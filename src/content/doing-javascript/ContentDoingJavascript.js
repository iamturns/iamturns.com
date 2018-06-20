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
			<h2>
				This just in: there’s a brand new JavaScript library to learn
				(again).
			</h2>

			<p>
				Your buddy Slacks you <em>another</em> article about GraphQL.
				Meanwhile, a famous dev tweets about an awesome new animation
				library. And your inbox is jam packed with fresh articles:
				“What‘s New In React This Month”, and “Why Haven‘t You Tried Vue
				Yet?!”.
			</p>

			<p>
				You skim the articles, star the repos, and bookmark a handful of
				links to read later (or, never).
			</p>

			<h2>There’s too much to know, and too much to learn.</h2>

			<p>
				You‘re constantly bombared with hype, clickbait, and{' '}
				<em>bullshit</em>.
			</p>

			<p>
				“JavaScript Fatigue” isn’t just something people say. Nuh uh —
				you feel it in your gut everytime you check Hacker News.
			</p>

			<p>
				You‘ve seen other devs keep up. They‘re building interesting
				projects with the latest and greatest tech. What‘s their secret
				sauce?
			</p>

			<h2>
				You know you need to build <em>something</em>.
			</h2>

			<p>
				But you‘re not sure <em>what</em> to build. And even if you did,
				you‘re not sure <em>how</em> to start. You resort to creating
				another todo app, but it‘ll be fun this time — you‘re finally
				gonna learn GraphQL!
			</p>

			<p>
				You read another blog post. Hmm, looks familiar — did you
				already read it last month? You follow along to discover it’s
				outdated and broken anyway.
			</p>

			<p>
				So you try YouTube, but most videos are super… slow… ugh…
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
				After hours and hours of struggling, you lose steam and finally
				give up. Your unfinished todo app says “Hello World”, just like
				the others. Ouch.
			</p>

			<h2>It doesn‘t have to be this way.</h2>

			<p>
				You know that ambitious idea you have for a side project?
				Imagine you can architect a solid plan to make it happen. With a
				shiny new tech stack too — you decide to launch your first
				mobile app in React Native. You fire up your favourite editor
				and code pours out. You‘re in the zone! <em>This</em> is why you
				fell in love with coding!
			</p>
			<p>
				Your mates are talking about <em>whatever.js</em> this week, but
				you keep learning and coding with a calm focus. You smash out
				the last feature and host it online for the world to see. Damn
				it feels good! Your GitHub profile is a tasty shade of green.
				You freshen up your portfolio and level up your CV.
			</p>
			<p>
				You‘ve gained real-world experience and the battle scars to
				prove it.
				<br />
				You <em>know</em> this new tech stack inside out now.
			</p>
			<p>Then you do it all again — because you love it!</p>

			<h2>The secret sauce is: doing.</h2>

			<p>
				You don‘t learn by consuming the clickbait, hype and bullshit.
				<br />
				You don‘t learn by passively skimming blogs.
				<br />
				You don‘t learn by mindlessly watching videos.
			</p>
			<p>
				No. You learn by creating, coding, crafting, and{' '}
				<strong>doing</strong>.
			</p>

			<p>
				But <em>what</em> do you build? And <em>how</em> do you start?
			</p>
		</PageContainer>

		<PageContainer className="my-8 p-6 bg-denim-white text-center">
			<h2 className="h2 m-0">Introducing: Doing JavaScript</h2>
		</PageContainer>

		<PageContainer small className="wysiwyg">
			<p>A hands-on project-first approach to learning JavaScript.</p>

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
			</p>

			<ul>
				<li>
					A clever hint system that nudges you slightly closer to your
					goal (like a point-and-click adventure game)
				</li>
				<li>Solutions from other students</li>
				<li>Slack community</li>
			</ul>

			<h2>
				Start learning <em>and</em> doing.
			</h2>

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
