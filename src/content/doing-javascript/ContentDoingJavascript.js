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
			<h2>There’s a brand new JavaScript framework to learn (again).</h2>
			<p>
				Your buddy just Slacked you <em>another</em> article about
				GraphQL.
				<br />
				“All the cool kids are using it!”
				<br />You skim the article, dish out the thumbs up emoji, and
				reply
				<br />
				“Nice! I’d love to learn this one day.”
			</p>
			<p>
				A famous(ish) developer just tweeted about a new animation
				library. You scroll through the readme and star the repo.
				<br />
				You‘ll get around to learning it one day, right?
			</p>
			<p>
				Your inbox is full of email newsletters jam packed with fresh
				blog posts, including: “What‘s New In React 22” and “Why Haven‘t
				You Tried Vue Yet?!”
				<br />
				You bookmark a handful of links to read later (or, never).
			</p>

			<h2>There’s too much to know, and too much to learn.</h2>

			<p>
				“JavaScript Fatigue” isn’t just something people say — you feel
				it in your gut everytime you check Hacker News.
			</p>

			<p>
				You‘ve seen other devs stay on top of things. They‘re building
				cool stuff with the latest and greatest. If only you had more
				hours in the day. But you‘re trying your best — right?
			</p>

			<p>
				You read another blog post about React. Hmm, it looks familiar —
				did you already read this last month? You follow along to
				discover it’s outdated and broken anyway.
			</p>

			<p>
				So you try YouTube, but the videos are super… slow… ugh…
				<br />
				You end up watching some high energy dude code up a storm.
				Impressive. But the next day? You forget almost everything.
				Nothing sticks.
			</p>

			<p>
				So you buy an online course. “Type out this exact code into this
				box”. You follow along, typing typing typing. Nothing clicks in
				your head. Is this coding?
			</p>

			<p>
				Your demo todo app still says “Hello World” as you waste hours
				scouring the Internet.
			</p>

			<h2>What if you could easily learn new JavaScript skills?</h2>

			<p>
				You have a brilliant idea for a side project. You architect a
				solid plan with a shiny new tech stack. Your mates are talking
				about <em>whatever.js</em> this week, but you keep learning and
				building with a calm focus. You fire up your favourite editor
				and the code pours out. You’re in the zone! <em>This</em> is why
				you fell in love with coding!
			</p>
			<p>
				You polish it up and throw it online. You <em>know</em> this
				tech stack inside and out now. Your CV has never looked so
				fresh, and your GitHub profile is a delicious shade of green.
				You‘ve gained real-world experience and empowering battle scars.
				You feel a massive sense of personal achievement. Then you do it
				all again — because you love it!
			</p>

			<h2>The secret sauce is: doing.</h2>

			<p>
				You don‘t learn by consuming the clickbait and hype.
				<br />
				You don‘t learn by passively skimming blogs.
				<br />
				You don‘t learn by mindlessly watching videos.
				<br />
				No. You learn by creating, coding, crafting, and{' '}
				<strong>doing</strong>.
			</p>
		</PageContainer>

		<PageContainer className="my-8 p-6 bg-denim-white text-center">
			<h2 className="h2 m-0">Introducing: Doing JavaScript</h2>
		</PageContainer>

		<PageContainer small className="wysiwyg">
			<p>A hands-on approach to learning JavaScript.</p>

			<p>
				Select from a catalogue of real-world projects (no todo apps)
				paired with modern tech stacks (like React Native, TypeScript,
				Node, and GraphQL).
			</p>

			<p>
				Each project is broken down into super-tiny super-achievable
				steps. And each step has <em>just enough</em> learning material
				to guide you.
			</p>

			<p>
				Learning by “doing” is challenging, but you always have support
				when you‘re stuck:
				<ul>
					<li>
						Hints that nudge you slightly closer to your goal (like
						a point-and-click adventure game)
					</li>
					<li>Solutions from other students</li>
					<li>Slack community</li>
				</ul>
			</p>

			<h2>
				Start learning <em>and</em> doing.
			</h2>

			<p>
				Join the waiting list for early access, monthly updates, and a
				discount on launch:
			</p>

			<div className="my-4">
				<EmailPlease id="doing-javascript" />
			</div>
			<hr />
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
