// @flow

import * as React from 'react';

import Code from '../../../../components/Code';
import CodeBlock from '../../../../components/CodeBlock';
import Emoji from '../../../../components/Emoji';
import LayoutContent from '../../../../components/LayoutContent';
import type { Content } from '../../../../types/Content';
import type { Result } from '../../../../types/Result';

export const frontmatter = {
	title: 'Continue RxJS Streams When Errors Occur: The Quest for Meatballs',
	description:
		'I assumed RxJS streams worked like Promises, and I was very wrong.',
	slug: '/continue-rxjs-streams-when-errors-occur',
	dateCreated: '2017-05-07',
	dateUpdated: '2018-03-19',
	type: 'article',
	nerdsOnly: true,
	cover: './meatballs.jpg',
	shareImage: './meatballs.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentRxjsErrorsQuery($slug: String!) {
		...CurrentContent
		...ContentList
	}
`;

export type ContentProps = {
	data: {
		currentContent: Content,
		contentListResult: Result<Content>,
		contentListNerdsResult: Result<Content>,
	},
};

const ContentRxjsErrors = (props: ContentProps) => (
	<LayoutContent
		currentContent={props.data.currentContent}
		contentListResult={props.data.contentListResult}
		contentListNerdsResult={props.data.contentListNerdsResult}
	>
		<Article />
	</LayoutContent>
);

export default ContentRxjsErrors;

const Article = () => (
	<div className="wysiwyg">
		<p>
			I assumed RxJS streams worked like Promises, and I was very wrong.
		</p>

		<p>Here’s a stream of stuff, with meatballs!</p>

		<CodeBlock
			language="js"
			code={`
				const stuff$ = Rx.Observable.of(
					'Spaghetti',
					42,
					'Meatballs'
				);
			`}
		/>

		<p>Let’s make the stuff lowercase:</p>

		<CodeBlock
			language="js"
			code={`
				const lowercaseStuff$ = stuff$
					.map(x => x.toLowerCase());
			`}
		/>

		<p>Quick quiz: what is logged to console?</p>

		<CodeBlock
			language="js"
			code={`
				lowercaseStuff$.subscribe(
					(x => console.log('Success:', x)),
					(x => console.log('Error:', x)),
					(() => console.log('Complete'))
				);
			`}
		/>

		<p>The answer may surprise you:</p>

		<CodeBlock
			code={`
				Success: spaghetti
				Error: TypeError: x.toLowerCase is not a function
			`}
		/>

		<p>
			Where’s the meatballs?! It seems the error killed the stream. Let’s
			stop that from happening.
		</p>

		<h2>Attempt #1: Defensive coding</h2>

		<CodeBlock
			language="js"
			code={`
				const lowercaseStuff$ = stuff$
					.map(x => {
						if (typeof x.toLowerCase !== 'function') {
							return undefined;
						}
						return x.toLowerCase();
					});
			`}
		/>

		<p>Result:</p>

		<CodeBlock
			code={`
				Success: spaghetti
				Success: undefined
				Success: meatballs
				Complete
			`}
		/>

		<p>Hello meatballs! That was easy!</p>

		<h3>Hold up…</h3>

		<p>
			Maybe the “stream of stuff” is actually a response from a server.
			You expect to receive nicely structured JSON. Then one day, you
			don’t.
		</p>

		<p>
			Maybe you’re passing the “stuff” into a 3rd party library, and it
			throws an error.
		</p>

		<p>
			Errors will always happen. You can’t code defensively for every
			unpredictable possibility.
		</p>

		<p>Let’s try something else.</p>

		<h2>Attempt #2: Try / catch</h2>

		<CodeBlock
			language="js"
			code={`
				const lowercaseStuff$ = stuff$
					.map(x => {
						try {
							return x.toLowerCase();
						} catch(error) {
							return undefined;
						}
					});
			`}
		/>

		<p>Result:</p>

		<CodeBlock
			code={`
				Success: spaghetti
				Success: undefined
				Success: meatballs
				Complete
			`}
		/>

		<p>
			Meatballs! <Emoji>😍</Emoji>
		</p>

		<p>
			But, what a nightmare to place this inside <em>every</em> operator:
		</p>

		<CodeBlock
			language="js"
			code={`
				const moreComplexStuff$ = stuff$
					.map(x => {
						try {
							return x.toLowerCase();
						} catch(error) {
							return undefined;
						}
					})
					.anotherOperator(x => {
						try {
							return doSomethingElse(x);
						} catch(error) {
							return undefined;
						}
						});
			`}
		/>

		<p>We can do better.</p>

		<h2>Attempt #3: Catch operator</h2>

		<CodeBlock
			language="js"
			code={`
				const lowercaseStuff$ = stuff$
					.map(x => x.toLowerCase())
					.catch(error => Rx.Observable.of(error));
			`}
		/>

		<p>Result:</p>

		<CodeBlock
			code={`
				Success: spaghetti
				Success: undefined
				Complete
			`}
		/>

		<p>
			The error was caught, but the stream completes before the meatballs
			had a chance.
		</p>

		<p>
			<Emoji>🤔</Emoji> Hmm. The catch operator is returning a bran new
			stream. Maybe the original stream is completing because it’s
			replaced?
		</p>

		<h2>Attempt #4: Materialize / dematerialize</h2>

		<CodeBlock
			language="js"
			code={`
				const lowercaseStuff$ = stuff$
					.map(x => x.toLowerCase())
					.materialize()
					.map(notification => {
						if (notification.kind === "E") {
							return Rx.Notification.createNext(undefined);
						}
						return notification;
					})
					.dematerialize();
			`}
		/>

		<p>
			This looks complex, but it’s behaving similar to the catch operator
			above. We are watching for an error notification, and then
			converting it into a next / success notification instead.
		</p>

		<p>
			It’s pretty low level, but this time we have no catch operator
			replacing the main stream. Should be fine.
		</p>

		<CodeBlock
			code={`
				Success: spaghetti
				Success: undefined
				Complete
			`}
		/>

		<p>
			<Emoji>😖</Emoji> No meatballs.
		</p>

		<p>What is going on?!</p>

		<hr />

		<h2>Deep in RxJS Land</h2>

		<p>
			RxJS is internally wrapping code in operators (like{' '}
			<Code code="map" />, <Code code="filter" />, etc) with a{' '}
			<Code code="try / catch" />. If an error is caught, it will notify
			subscribers, and then <strong>unsubscribe</strong> the stream. This
			is <em>hard coded</em> — you have no choice!
		</p>

		<blockquote className="quote-pull">
			If an error is thrown within an operator, the stream will always
			complete.
		</blockquote>

		<h2>Solution</h2>

		<p>
			Create a disposable stream. If an error occurs only the disposable
			stream dies, and the main stream lives on.
		</p>

		<CodeBlock
			language="js"
			code={`
				const lowercaseStuff$ = stuff$
					.switchMap((x) => {
						const disposableStream$ = Rx.Observable.of(x);
						return disposableStream$
							.map(x => x.toLowerCase())
							.catch(error => Rx.Observable.of(undefined));
					})
			`}
		/>

		<p>Result:</p>

		<CodeBlock
			code={`
				Success: spaghetti
				Success: undefined
				Success: meatballs
				Complete
			`}
		/>

		<p>
			We have meatballs! <Emoji>😋</Emoji>
		</p>

		<p>This can be condensed further:</p>

		<CodeBlock
			language="js"
			code={`
				const lowercaseStuff$ = stuff$.switchMap(x =>
					Rx.Observable.of(x)
						.map(x => x.toLowerCase())
						.catch(error => Rx.Observable.of(undefined))
				);
			`}
		/>

		<p>And here’s a real world scenario:</p>

		<ul>
			<li>Processing a response from the server</li>
			<li>
				Keeping the main stream alive (so future responses are processed
				after an error)
			</li>
			<li>Performing error handling in the main stream</li>
		</ul>

		<CodeBlock
			language="js"
			code={`
				responseFromServer$
					.switchMap(response =>
						Rx.Observable.of(response)
							.map(response => codeThatMayThrowAnError(response))
							.catch(error => Rx.Observable.of(error))
					)
					.map(response => {
						if (response instanceof Error) {
							// Error handling here
						}
						return response;
					});
			`}
		/>
	</div>
);
