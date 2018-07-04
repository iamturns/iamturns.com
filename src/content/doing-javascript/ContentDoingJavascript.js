// @flow

import * as React from 'react';

import ArrowLeft from '../../../vendor/feather-icons-react/ArrowLeft';
import EmailPlease from '../../components/EmailPlease/EmailPlease';
import HeadTagsContent from '../../components/HeadTagsContent/HeadTagsContent';
import Link from '../../components/Link/Link';
import PageContainer from '../../components/PageContainer/PageContainer';
import type { Content } from '../../types/Content';

export const frontmatter = {
	type: 'page',
	title: 'Doing JavaScript',
	description: 'A hands-on approach to learning JavaScript.',
	dateCreated: '2018-06-20',
	dateUpdated: '2018-06-20',
	unlisted: true,
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentDoingJavaScriptQuery($slug: String!) {
		...CurrentContent
	}
`;

export type ContentProps = {
	data: {
		currentContent: Content,
	},
};

const ContentDoingJavaScript = ({ data: { currentContent } }: ContentProps) => (
	<div>
		<HeadTagsContent content={currentContent} />
		<PageContainer small className="wysiwyg">
			<h2>It’s impossible to keep up with JavaScript.</h2>
			<p>
				A popular dev tweets about a fancy new animation library.
				Meanwhile, your buddy Slacks you <em>another</em> React Native
				blog post. And your inbox is jam-packed with fresh articles:
				“What’s New In React This Month” and “Why Haven’t You Tried Vue
				Yet?!”.
			</p>

			<p>You bookmark a handful of links to read later (or, never).</p>

			<p>
				“JavaScript fatigue” isn’t just something people say. Nuh uh —
				you feel it in your gut every time you check Hacker News.
			</p>

			<p>
				<strong>
					There’s too much to know, and too much to learn.
				</strong>
			</p>

			<p>
				You’ve seen other devs manage to stay updated. They’re building
				interesting projects with the latest and greatest tech.
			</p>

			<p>
				But your terminal is glowing red with errors. Maybe you
				copy-and-pasted from an outdated tutorial? You dart between the
				official docs and Stack Overflow, lost within 42 browser tabs.
			</p>
			<p>
				You stay up late watching some dude coding away on YouTube, but
				nothing sticks.
			</p>
			<p>
				You’ve wasted an entire weekend on this app, and it’s stuck on
				“Hello World”. Ouch.
			</p>

			<h2>You just want to code.</h2>

			<p>
				You have a brilliant idea for a new side project and architect a
				solid plan to launch your first mobile app using React Native
				and GraphQL. You fire up your favourite editor and focus. Step
				by step your momentum builds, code pours onto the screen —
				you’re in the zone! <em>This</em> is why you love coding!
			</p>
			<p>
				You smash out the last feature and host it online for the world
				to see. It feels so damn good to finish a project! Your GitHub
				profile is a tasty shade of green. You freshen up your portfolio
				and level up your CV.
			</p>
			<p>
				You <em>know</em> React Native and GraphQL inside out now, and
				you’ve gained the battle scars and real-world experience to
				prove it.
			</p>

			<p>Then you do it all again — because you love it!</p>

			<h2>
				You learn best by <em>doing</em>.
			</h2>

			<p>
				But <em>what</em> exactly do you build? Another todo app doesn’t
				inspire you.
			</p>
			<p>
				And <em>how</em> do you build it? What technology do you use?
				Can you handle it? Will you give up again?
			</p>
			<p>
				All you want to do is be creative, craft a beautiful solution,
				and code up a storm.
			</p>
		</PageContainer>

		<PageContainer className="my-4 mt-12 p-6 bg-denim-white text-center">
			<h2 className="h2 mt-0">Introducing: “Doing JavaScript”</h2>
			<p className="p mb-0">
				A hands-on project-first approach to learning JavaScript.
			</p>
		</PageContainer>

		<PageContainer small className="wysiwyg">
			<p>
				This online course will help you build real-world projects (like
				Instagram, Reddit, Airbnb) with modern JavaScript tech stacks
				(like React Native, TypeScript, Node, GraphQL).
			</p>

			<p>
				Each project is broken down into super-tiny super-achievable
				steps. And each step contains fast-paced videos and{' '}
				<em>just enough</em> learning material to guide you.
			</p>

			<p>
				This is a hands-on approach, and answers are <em>not</em>{' '}
				spoon-fed. When you get stuck (and you will), simply activate
				the hint system. It will dish out code snippets and general
				suggestions, nudging you slightly closer to your goal — just
				like a point-and-click adventure game!
			</p>

			<p>
				See solutions from other students as you complete each step.
				Steal the best tricks for yourself.
			</p>

			<p>
				Update your JavaScript skills <em>and</em> your portfolio by
				Doing JavaScript.
			</p>

			<p>
				Join the waiting list for early access, monthly updates, and a
				discount on launch:
			</p>

			<div className="my-4">
				<EmailPlease list="doing-javascript" id="doing-javascript" />
			</div>

			<hr className="hr-dash" />

			<p className="my-12">
				<Link to="/" className="button inline-flex items-center">
					<ArrowLeft className="w-4 h-4 mr-1" />
					Back to I Am Turns
				</Link>
			</p>
		</PageContainer>
	</div>
);

export default ContentDoingJavaScript;
