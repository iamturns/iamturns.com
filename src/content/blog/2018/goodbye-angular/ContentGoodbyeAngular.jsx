// @flow

import * as React from 'react';

import Emoji from '../../../../components/Emoji';
import ImgBlock from '../../../../components/ImgBlock';
import LayoutContent from '../../../../components/LayoutContent';
import Link from '../../../../components/Link';
import type { Content } from '../../../../types/Content';
import type { Image } from '../../../../types/Image';
import type { Result } from '../../../../types/Result';

export const frontmatter = {
	title: 'Angular Burnout',
	description:
		'I dreaded returning to programming during a recent holiday. It turns out I’m just done with Angular.',
	slug: '/angular-burnout',
	dateCreated: '2018-03-23',
	dateUpdated: '2018-03-28',
	type: 'article',
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
		imgDocs: Image,
	},
};

const ContentGoodbyeAngular = (props: ContentProps) => (
	<LayoutContent
		currentContent={props.data.currentContent}
		contentListResult={props.data.contentListResult}
	>
		<Article {...props} />
	</LayoutContent>
);

export default ContentGoodbyeAngular;

const Article = (props: ContentProps) => (
	<div className="wysiwyg">
		<p>
			I dreaded returning to programming during a recent holiday. After
			all these years, it seemed my passion had dried up. Time for
			something new.
		</p>
		<p>
			I’ve been deep diving into{' '}
			<Link to="https://angular.io/">Angular</Link> (v1 and 2+) for three
			years now. It turns out I’m not done with programming; I’m just done
			with Angular.
		</p>

		<h2>There‘s no need for Angular in 2018</h2>

		<blockquote className="quote mt-12 text-lg">
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

		<blockquote className="quote mt-12 text-lg">
			“Code endorsed by the Angular team is better quality and more stable
			than a bunch of random 3rd-party libraries thrown together.”
		</blockquote>
		<p>
			Angular has mostly settled now, but the early days saw huge breaking
			changes every month or two. It portrayed a lack of vision and focus,
			not stability.
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
			efforts of the core Angular maintainers.
		</p>

		<blockquote className="quote mt-12 text-lg">
			“I like that Angular makes choices for me, I don’t want to pick and
			choose.”
		</blockquote>
		<p>
			I get it. You want to style your React project, okay: CSS Modules or
			Styled Components? Or maybe Glamorous? Oh, Emotion looks nice!
		</p>
		<p>
			Relying on what Angular provides is initially easier, but you can be
			locked into poor choices. TypeScript is forced on you, but it might
			be overkill for your needs{' '}
			<span className="text-sm">
				(the non-TS version of Angular is still undocumented all these
				years later)
			</span>. RxJS observables for HTTP requests is also mandatory, but
			using Promises might be a better fit. Factories, providers,
			services, ngModules, zone.js, AOT compilation, the list goes on.
		</p>
		<p>
			Many projects succeed without this baggage. Is it necessary? It‘s a
			lot to learn, a lot to code, and a lot to maintain.
		</p>
		<p>
			Embrace the light-weight libraries that do one thing, and do it
			well. Celebrate that the JavaScript community provides you with so
			many options you can pick the best for your needs.
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
			like framework specific code, and is super quick to scaffold.
			Goodbye NgIf, NgSwitch, NgFor and all that nonsense.{' '}
			<span className="text-sm">
				(Fun fact: adding <code>else</code> to <code>*ngIf</code> was a
				“new feature” in Angular v4 <Emoji>😖</Emoji>)
			</span>
		</p>
		<p>
			I have only scratched the surface of React, but I can’t deny this
			feeling. The developer experience is A+ so far. I‘m back in the
			game!
		</p>
	</div>
);
