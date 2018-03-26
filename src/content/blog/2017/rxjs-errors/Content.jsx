// @flow

import * as React from 'react';

import ContentCode from '../../../../components/ContentCode';
import ContentCodeBlock from '../../../../components/ContentCodeBlock';
import ContentH2 from '../../../../components/ContentH2';
import ContentH3 from '../../../../components/ContentH3';
import ContentHR from '../../../../components/ContentHR';
import ContentLI from '../../../../components/ContentLI';
import ContentP from '../../../../components/ContentP';
import ContentPullQuote from '../../../../components/ContentPullQuote';
import ContentUL from '../../../../components/ContentUL';
import Emoji from '../../../../components/Emoji';

const Content = () => (
	<div>
		<ContentP>
			I assumed RxJS streams worked like Promises, and I was very wrong.
		</ContentP>

		<ContentP>Here’s a stream of stuff, with meatballs!</ContentP>

		<ContentCodeBlock
			language="js"
			code={`const stuff$ = Rx.Observable.of('Spaghetti', 42, 'Meatballs');`}
		/>

		<ContentP>Let’s make the stuff lowercase:</ContentP>

		<ContentCodeBlock
			language="js"
			code={`const lowercaseStuff$ = stuff$.map(x => x.toLowerCase());`}
		/>

		<ContentP>Quick quiz: what is logged to console?</ContentP>

		<ContentCodeBlock
			language="js"
			code={`
				lowercaseStuff$.subscribe(
					(x => console.log('Success:', x)),
					(x => console.log('Error:', x)),
					(() => console.log('Complete'))
				);
			`}
		/>

		<ContentP>The answer may surprise you:</ContentP>

		<ContentCodeBlock
			code={`
				Success: spaghetti
				Error: TypeError: x.toLowerCase is not a function
			`}
		/>

		<ContentP>
			Where’s the meatballs?! It seems the error killed the stream. Let’s
			stop that from happening.
		</ContentP>

		<ContentH2>Attempt #1: Defensive coding</ContentH2>

		<ContentCodeBlock
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

		<ContentP>Result:</ContentP>

		<ContentCodeBlock
			code={`
				Success: spaghetti
				Success: undefined
				Success: meatballs
				Complete
			`}
		/>

		<ContentP>Hello meatballs! That was easy!</ContentP>

		<ContentH3>Hold up…</ContentH3>

		<ContentP>
			Maybe the “stream of stuff” is actually a response from a server.
			You expect to receive nicely structured JSON. Then one day, you
			don’t.
		</ContentP>

		<ContentP>
			Maybe you’re passing the “stuff” into a 3rd party library, and it
			throws an error.
		</ContentP>

		<ContentP>
			Errors will always happen. You can’t code defensively for every
			unpredictable possibility.
		</ContentP>

		<ContentP>Let’s try something else.</ContentP>

		<ContentH2>Attempt #2: Try / catch</ContentH2>

		<ContentCodeBlock
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

		<ContentP>Result:</ContentP>

		<ContentCodeBlock
			code={`
				Success: spaghetti
				Success: undefined
				Success: meatballs
				Complete
			`}
		/>

		<ContentP>
			Meatballs! <Emoji>😍</Emoji>
		</ContentP>

		<ContentP>
			But, what a nightmare to place this inside <em>every</em> operator:
		</ContentP>

		<ContentCodeBlock
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

		<ContentP>We can do better.</ContentP>

		<ContentH2>Attempt #3: Catch operator</ContentH2>

		<ContentCodeBlock
			language="js"
			code={`
				const lowercaseStuff$ = stuff$
					.map(x => x.toLowerCase())
					.catch(error => Rx.Observable.of(error));
			`}
		/>

		<ContentP>Result:</ContentP>

		<ContentCodeBlock
			code={`
				Success: spaghetti
				Success: undefined
				Complete
			`}
		/>

		<ContentP>
			The error was caught, but the stream completes before the meatballs
			had a chance.
		</ContentP>

		<ContentP>
			<Emoji>🤔</Emoji> Hmm. The catch operator is returning a bran new
			stream. Maybe the original stream is completing because it’s
			replaced?
		</ContentP>

		<ContentH2>Attempt #4: Materialize / dematerialize</ContentH2>

		<ContentCodeBlock
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

		<ContentP>
			This looks complex, but it’s behaving similar to the catch operator
			above. We are watching for an error notification, and then
			converting it into a next / success notification instead.
		</ContentP>

		<ContentP>
			It’s pretty low level, but this time we have no catch operator
			replacing the main stream. Should be fine.
		</ContentP>

		<ContentCodeBlock
			code={`
				Success: spaghetti
				Success: undefined
				Complete
			`}
		/>

		<ContentP>
			<Emoji>😖</Emoji> No meatballs.
		</ContentP>

		<ContentP>What is going on?!</ContentP>

		<ContentHR />

		<ContentH2>Deep in RxJS Land</ContentH2>

		<ContentP>
			RxJS is internally wrapping code in operators (like{' '}
			<ContentCode code="map" />, <ContentCode code="filter" />, etc) with
			a <ContentCode code="try / catch" />. If an error is caught, it will
			notify subscribers, and then <strong>unsubscribe</strong> the
			stream. This is <em>hard coded</em> — you have no choice!
		</ContentP>

		<ContentPullQuote>
			If an error is thrown within an operator, the stream will always
			complete.
		</ContentPullQuote>

		<ContentH2>Solution</ContentH2>

		<ContentP>
			Create a disposable stream. If an error occurs only the disposable
			stream dies, and the main stream lives on.
		</ContentP>

		<ContentCodeBlock
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

		<ContentP>Result:</ContentP>

		<ContentCodeBlock
			code={`
				Success: spaghetti
				Success: undefined
				Success: meatballs
				Complete
			`}
		/>

		<ContentP>
			We have meatballs! <Emoji>😋</Emoji>
		</ContentP>

		<ContentP>This can be condensed further:</ContentP>

		<ContentCodeBlock
			language="js"
			code={`
				const lowercaseStuff$ = stuff$.switchMap(x =>
					Rx.Observable.of(x)
						.map(x => x.toLowerCase())
						.catch(error => Rx.Observable.of(undefined))
				);
			`}
		/>

		<ContentP>And here’s a real world scenario:</ContentP>

		<ContentUL>
			<ContentLI>Processing a response from the server</ContentLI>
			<ContentLI>
				Keeping the main stream alive (so future responses are processed
				after an error)
			</ContentLI>
			<ContentLI>Performing error handling in the main stream</ContentLI>
		</ContentUL>

		<ContentCodeBlock
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

export default Content;
