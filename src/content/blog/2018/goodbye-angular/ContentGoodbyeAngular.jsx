// @flow

import * as React from 'react';

import ImgBlock from '../../../../components/ImgBlock';
import LayoutContent from '../../../../components/LayoutContent';
import Link from '../../../../components/Link';
import type { Content } from '../../../../types/Content';
import type { Image } from '../../../../types/Image';
import type { Result } from '../../../../types/Result';

export const frontmatter = {
	title: 'Angular Burnout',
	description:
		'I dreaded returning to programming during a 3 month travel break. It turns out I’m not done with programming; I’m just done with Angular.',
	slug: '/angular-burnout',
	dateCreated: '2018-03-23',
	dateUpdated: '2018-03-23',
	type: 'article',
	nerdsOnly: true,
	cover: './sleeping-dog.jpg',
	shareImage: './sleeping-dog.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentGoodbyeAngularQuery($slug: String!) {
		...CurrentContent
		...ContentList
		imgDocs: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/goodbye-angular/docs.jpg" }
		) {
			childImageSharp {
				sizes(maxWidth: 580) {
					...GatsbyImageSharpSizes
				}
			}
		}
	}
`;

type ContentProps = {
	data: {
		currentContent: Content,
		contentListResult: Result<Content>,
		contentListNerdsResult: Result<Content>,
		imgDocs: Image,
	},
};

const ContentGoodbyeAngular = (props: ContentProps) => (
	<LayoutContent
		currentContent={props.data.currentContent}
		contentListResult={props.data.contentListResult}
		contentListNerdsResult={props.data.contentListNerdsResult}
	>
		<Article {...props} />
	</LayoutContent>
);

export default ContentGoodbyeAngular;

const Article = (props: ContentProps) => (
	<div className="wysiwyg">
		<p>
			I dreaded returning to programming during a 3-month travel break.
			After all these years, it seemed my passion had dried up. Time for
			something new.
		</p>
		<p>
			It turns out I’m not done with programming; I’m just done with
			Angular.
		</p>
		<h2>Oh, Angular…</h2>
		<p className="c-p text-sm">*long sigh*</p>
		<p>
			I’ve been deep diving into Angular (v1 and 2+) for three years now.
			Overall, a frustrating experience. Coding feels challenging for the{' '}
			<em>wrong</em> reasons.
		</p>
		<p>A list of things that annoy me daily:</p>
		<ul>
			<li>
				Pointless template syntax
				<ul>
					<li>
						NgIf, NgSwitch, NgFor, what a load of shit. JavaScript
						already has all these features, and I already know how
						to use JavaScript — let me use JavaScript!
					</li>
					<li>
						Fun fact: adding <code>else</code> to <code>*ngIf</code>{' '}
						was a “new feature” in Angular v4!
					</li>
				</ul>
			</li>
			<li>Tweaking code just so AOT compiler can parse it</li>
			<li>
				Zone.js sucks
				<ul>
					<li>
						Errors are garbled, and integrating 3rd-party libs is a
						pain
					</li>
				</ul>
			</li>
			<li>
				General over-engineering
				<ul>
					<li>
						DI with factories and providers, services, ngModules,
						etc.
					</li>
					<li>
						A lot to learn, a lot to code, and a lot to maintain
					</li>
					<li>
						Many projects succeed without this baggage, is it
						necessary?
					</li>
				</ul>
			</li>
		</ul>

		<h2>Arguments for Angular</h2>
		<blockquote className="c-blockquote text-lg">
			“I just need to learn Angular, then I can easily jump between any
			Angular project.”
		</blockquote>
		<p>
			This is a myth. Starting with Angular does not guarantee the entire
			project remains purely Angular. Every project becomes custom.
		</p>
		<p>
			If a 3rd-party library is better than the Angular offering,
			developers shift over. Remember when UI-Router landed? Nobody used
			the official ngRouter. This would’ve happened in Angular 2+ too if
			the community hadn’t already swarmed React.
		</p>
		<p>
			My last Angular project exploded to include a Redux store, HTTP
			requests piped through{' '}
			<Link to="https://github.com/ngrx/effects">@ngrx/effects</Link>, and
			composing smaller utility functions instead of creating full-blown
			services. Could any Angular developer jump straight into this setup?
			Nope.
		</p>
		<blockquote className="c-blockquote text-lg">
			“Code written by Angular official maintainers is better quality and
			more stable than a bunch of random 3rd-party libraries thrown
			together.”
		</blockquote>
		<p>
			Angular has mostly settled now, but the early days saw huge breaking
			changes every month or two. It portrayed a lack of vision and focus.
			This is not stability.
		</p>
		<p>The official documentation had this gem:</p>
		<ImgBlock image={props.data.imgDocs}>
			Excerpt from the{' '}
			<Link to="https://github.com/angular/angular/blob/3e34ba01bdbeea237cb7c50e9cea3b0ed3b0606b/aio/content/guide/dependency-injection.md">
				official Angular docs
			</Link>{' '}
			about factory providers.
		</ImgBlock>
		<p>This is not quality.</p>
		<p>
			The JavaScript community is energetic, active, and passionate. A
			group of random developers can deliver code that surpasses the
			efforts of core maintainers.
		</p>
		<blockquote className="c-blockquote text-lg">
			“I like that Angular makes choices for me, I don’t want to pick and
			choose which libraries to use.”
		</blockquote>
		<p>
			I get it. You want to style your React project, okay: CSS Modules or
			Styled Components? Or maybe Glamorous? Oh, Emotion looks nice!
		</p>
		<p>
			Relying on what Angular provides is initially easier, but it might
			not be the best for your project. TypeScript is forced on you, but
			it might be overkill for your needs (the non-TS version of Angular
			is still undocumented all these years later). RxJS observables for
			HTTP requests is also mandatory, but using Promises might be a
			better fit.
		</p>
		<p>
			You can easily become locked into poor choices. Embrace the
			light-weight libraries that do one thing, and do it well. Celebrate
			that the JavaScript community provides you with so many options you
			can pick-and-choose based on your specific needs.
		</p>

		<h2>React reignites the passion</h2>
		<p>
			In the past weeks I’ve used React to build this website (powered by{' '}
			<Link to="https://www.gatsbyjs.org/">Gatsby</Link>).
		</p>
		<p>
			I can get into the flow and just code. Less uphill battles, more
			“just doing it.” Yep, I’m living the Nike slogan now, but on a
			computer.{' '}
			<span className="text-sm">
				And with <em>slightly</em> less sweat.
			</span>
		</p>
		<p>
			React is light in all the right places, and complex only when I need
			it to be. I start with little and build up. I choose the libraries
			that best fit my needs. Freedom and power.
		</p>
		<p>
			I love tying together tiny stateless components. It barely looks
			like framework specific code, and is super quick to scaffold. And,
			it‘s actually fun!
		</p>
		<p>
			Relying on <Link to="https://prettier.io/">Prettier</Link> to style
			code for me is a relief. Again, fewer barriers, and more focus on
			getting the job done.
		</p>
		<p>
			I have only scratched the surface of React, but I can’t deny this
			feeling. The developer experience is A+ so far. I‘m back in the
			game!
		</p>
	</div>
);
