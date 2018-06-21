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
				Guess what? There’s a brand new JavaScript library to learn
				(again).
			</h2>
			<p>
				A popular dev tweets about a fancy new animation library.
				Meanwhile, your buddy Slacks you <em>another</em> article about
				React Native. And your inbox is jam-packed with fresh articles:
				“What‘s New In React This Month” and “Why Haven‘t You Tried Vue
				Yet?!”.
			</p>
			<p>
				You skim the articles, star the repos, and bookmark a handful of
				links to read later (or, never).
			</p>
			<p>
				<strong>
					There’s too much to know, and too much to learn.
				</strong>
			</p>
			<p>
				“JavaScript fatigue” isn’t just something people say. Nuh uh —
				you feel it in your gut every time you check Hacker News.
			</p>

			<h2>It feels impossible to stay updated.</h2>

			<p>
				But you‘re doing your best. You‘re working on another todo app
				this weekend — you‘re finally gonna learn GraphQL!
			</p>
			<p>
				You find yourself darting between the official docs and Stack
				Overflow, lost within 42 browser tabs. Your terminal is glowing
				red with errors — maybe you copy-and-pasted from an outdated
				tutorial?
			</p>
			<p>
				You turn to YouTube, but the videos… are… super… sloooow… ugh…
				<br />
				You end up watching some high energy dude coding up a storm.
				Impressive. But the next day? You forget almost everything.
				Nothing sticks.
			</p>
			<p>
				You delve into an online course. “Type this exact code into this
				box”. You follow along, typing typing typing. Nothing clicks in
				your head. Is this coding?
			</p>
			<p>
				After an entire Sunday of struggling, you lose motivation and
				give up. Your todo app is stuck on “Hello World”. Ouch.
			</p>

			<p>
				You‘ve seen other devs manage to stay updated. They‘re building
				interesting projects with the latest and greatest tech. What‘s
				their secret sauce?
			</p>

			<h2>It doesn‘t have to be this way.</h2>

			<p>
				That ambitious idea you have for a side project — what if you
				could architect a solid plan to make it happen? With a shiny new
				tech stack too. You decide to launch your first mobile app using
				React Native.
			</p>
			<p>
				You fire up your favourite editor and code pours onto the
				screen. Your mates are talking about <em>whatever.js</em> this
				week, but you keep learning and coding with intense focus. Step
				by step your momentum carries you further — you‘re in the zone!{' '}
				<em>This</em> is why you fell in love with coding!
			</p>
			<p>
				You smash out the last feature and host it online for the world
				to see. It feels so damn good to finish a project! Your GitHub
				profile is a tasty shade of green. You freshen up your portfolio
				and level up your CV.
			</p>
			<p>
				You <em>know</em> the new tech stack inside out now, and you‘ve
				gained the battle scars and real-world experience to prove it.
			</p>
			<p>Then you do it all again — because you love it!</p>

			<h2>The secret sauce is: doing.</h2>

			<p>
				You don‘t learn by consuming the constant stream of hype,
				clickbait, and bullshit. Or by mindlessly skimming blogs,
				aimlessly jumping around docs, or passively watching videos.
			</p>
			<p>No.</p>
			<p>
				<strong>
					You learn by <em>doing</em>.
				</strong>
			</p>
			<p>
				Applying knowledge. Building projects piece by piece. Creating,
				crafting, coding.
			</p>
			<p>
				But doing is hard. What do you build? How do you build it? Where
				do you start?
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

			<p>You always have support when you‘re stuck:</p>

			<ul>
				<li>
					Activate the hint system which nudges you slightly closer to
					your goal (just like a point-and-click adventure game)
				</li>
				<li>
					View solutions from other students who have solved your{' '}
					<em>exact</em> problem
				</li>
				<li>Reach out to the friendly Slack community</li>
			</ul>

			<p>
				Update your JavaScript skills <em>and</em> your portfolio by
				Doing JavaScript. Join the waiting list for early access,
				monthly updates, and a discount on launch:
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
