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
	title: 'JavaScript List',
	description:
		'The pulse of JavaScript, powered by the community, and distilled into a weekly email.',
	dateCreated: '2018-07-11',
	dateUpdated: '2018-07-11',
	unlisted: true,
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentJavascriptListQuery($slug: String!) {
		...CurrentContent
	}
`;

export type ContentProps = {
	data: {
		currentContent: Content,
	},
};

const ContentJavascriptList = ({ data: { currentContent } }: ContentProps) => (
	<div>
		<HeadTagsContent content={currentContent} />
		<PageContainer small className="wysiwyg">
			<h2>It’s impossible to keep up with JavaScript.</h2>
			<p>
				A popular dev tweets “Why aren’t you using Vue yet?!”.
				Meanwhile, your buddy Slacks you a blog post: “What‘s New In
				React This Month”. And your inbox is jam-packed with fresh
				articles: “You Must Learn Redux” and “Redux Is Dead”.
			</p>

			<p>You bookmark a handful of links to read later (or, never).</p>

			<p>
				“JavaScript fatigue” isn’t just something people say. Nuh uh —
				you feel it in your gut every time you check Hacker News.
			</p>

			<p>
				<strong>
					But you’re doing your best to get through it all.
				</strong>
			</p>

			<p>
				You know you gotta keep up. This fast-paced JavaScript industry
				demands it.
			</p>
			<p>
				So you’re on your phone every chance you get. Scrolling…
				skimming… refreshing… and just when you feel on top of things —
				Ding! You have another email newsletter.
			</p>
			<p>
				You’re constantly bombarded with hype, clickbait, and{' '}
				<em>bullshit</em>.
			</p>
			<p>It’s overwhelming. There’s too much to know.</p>

			<h2>
				I developed a system that easily keeps me up-to-date with
				JavaScript.
			</h2>

			<p>
				1) Every Sunday I visit the biggest news platforms (like Hacker
				News, Reddit, Medium, and Twitter).
			</p>

			<p>
				2) I run filters to discover the most popular items from the
				last 7 days.
			</p>

			<p>3) I collate, de-dupe, tag, and save the results into a list.</p>

			<p>
				<strong>
					This list is my single source of JavaScript news for the
					week.
				</strong>
			</p>

			<p>
				The next step is easy: keep calm, and read the list! It surfaces
				what‘s important, and contains everything I need to stay
				updated. Even just skimming the list gives me a high-level
				overview of current events and trends.
			</p>

			<p>
				It feels like cheating. Like watching the movie instead of
				reading the book. Or an expert highlighting a handful of
				important paragraphs in my mountain of papers.
			</p>

			<p>
				It‘s sooo much easier to focus on just one single list
				containing the cream of the crop. I’ve stopped habitually
				refreshing Hacker News. My inbox feels lighter after
				unsubscribing from a bunch of newsletters. I feel like I have
				more hours in the day. I even discovered I have <em>other</em>{' '}
				hobbies — woah!
			</p>

			<h2>Get the list.</h2>

			<p>
				Stay updated with the JavaScript world (like React, Vue, Node,
				GraphQL, and Serverless). And to keep things interesting: a dash
				of tech news, design, and random lols.
			</p>

			<p>
				I‘ll bring the best of Hacker News, Reddit, Medium, GitHub,
				Twitter, and YouTube to you.
			</p>

			<p>
				The pulse of JavaScript, powered by the community, and distilled
				into a weekly email.
			</p>

			<p>
				The list is just a personal ugly spreadsheet for now. If I get
				enough interest, I will take time to tidy the list and publish
				it weekly. Show your support by signing up below, and I‘ll send
				you an email if it kicks off:
			</p>

			<div className="my-4">
				<EmailPlease
					list="doing-javascript"
					id="doing-javascript"
					hideFooter
				/>
			</div>

			<p className="my-12">
				<Link to="/" className="button inline-flex items-center">
					<ArrowLeft className="w-4 h-4 mr-1" />
					Back to I Am Turns
				</Link>
			</p>
		</PageContainer>
	</div>
);

export default ContentJavascriptList;
