// @flow

import * as React from 'react';

import HeadTagsContent from '../../components/HeadTagsContent/HeadTagsContent';
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
	query ContentDoingJavascriptQuery($slug: String!) {
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
				Breaking news: there’s a brand new JavaScript framework to learn
				(again)
			</h2>
			<p>
				Your buddy just Slacked you another article about GraphQL. All
				the cool kids are using it. You skim the article, dish out the
				thumbs up emoji, and reply “Nice! I’d love to learn this one
				day.”
			</p>
			<p>
				A famous(ish) developer just tweeted about a new animation
				library. You skim the readme and star the repo — you‘ll try it
				one day too.
			</p>
			<p>
				Your inbox is full of email newsletters jam packed with fresh
				blog posts:
				<ul>
					<li>Twenty Reasons To Use Redux</li>
					<li>Why MobX Is Better Than Redux</li>
					<li>You Don’t Need Redux Anymore</li>
				</ul>
			</p>

			<p>You bookmark a handful of links to digest later (or, never).</p>

			<p>
				<strong>
					You’re constantly wading through a mess of hype, clickbait,
					and <em>bullshit</em>.
				</strong>
			</p>

			<p>
				“JavaScript Fatigue” isn’t just something people say — you feel
				it in your gut everytime you check Hacker News.
			</p>
			<h2>There’s too much to know, and too much to learn.</h2>

			<p>
				You read another blog post about React. Hmm, it looks familiar -
				did already read it last month? You follow along to discover
				it’s outdated and broken.
			</p>

			<p>
				You try YouTube, but the videos are super… slow… so you
				impatiently skip around. You end up finding some high energy
				dude coding up a storm. Impressive. But the next day? You forget
				almost everything. Nothing sticks.
			</p>

			<p>
				You buy an online course. “Type out this exact code into this
				box”. You mindlessly follow, typing typing typing. Nothing
				clicks in your head. Is this coding?
			</p>

			<p>
				You waste hours jumping around the Internet, and your demo todo
				app still says “Hello World”.
			</p>

			<h2>What if you could easily learn new JavaScript skills?</h2>

			<p>
				You could architect a solid plan for your new idea. You fire up
				your favourite editor and the code pours out. You’re learning
				the latest and greatest <em>and</em> building exciting stuff.
				You’re in the zone. This is why you fell in love with coding!
			</p>

			<p>
				Your mates are talking about <em>whatever.js</em> this week, but
				you filter out the noise. You keep learning and building with a
				calm focus. Your GitHub profile is an impressive shade of green.
				Your co-workers star your repo (then move onto skimming another
				blog post). You update your CV and get promoted.
			</p>
		</PageContainer>
		<PageContainer className="my-8 p-6 bg-denim-white text-center">
			<h2 className="h2 m-0">Introducing: Doing JavaScript</h2>
		</PageContainer>
		<PageContainer small className="wysiwyg">
			<p>
				A hands-on approach to learning JavaScript, with a focus on
				building real-world projects.
			</p>

			<p>
				Select from a catalogue of interesting projects (no todo apps)
				paired with modern full-stack technology (like React Native,
				TypeScript, Express, and GraphQL).
			</p>

			<p>
				Projects are broken down into super-tiny super-achievable steps.
				And you are given learning materials to achieve each step along
				the way.
			</p>

			<p>
				By building projects:
				<ul>
					<li>
						Gain real-world experience and empowering battle scars
					</li>
					<li>Feel massive personal achievement and momentum</li>
					<li>Level up your GitHub profile and personal portfolio</li>
					<li>Most importantly: remember what you learn</li>
				</ul>
			</p>

			<p>
				This is a hands-on approach to learning JavaScript. You will
				probably get stuck, and that’s normal.
			</p>
			<p>
				But you‘re always supported:
				<ul>
					<li>
						Hints that nudge you slightly closer to your goal (just
						like in a point-and-click adventure game)
					</li>
					<li>See how other students solve your exact problem</li>
					<li>Slack community</li>
				</ul>
			</p>

			<h2>
				Start learning <em>and</em> doing
			</h2>

			<p>
				Join the waiting list for early access, monthly updates, and a
				discount on launch.
			</p>

			<p>
				[ you@gmail.com ] [ Submit ] I know, emails suck. I promise not
				to spam you. (And if I do, just unsubscribe!)
			</p>
		</PageContainer>
	</div>
);

export default ContentDoingJavaScript;
