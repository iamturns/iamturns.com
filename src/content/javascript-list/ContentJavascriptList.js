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
	title: 'The JavaScript Report',
	description:
		'The pulse of the JavaScript community distilled into a weekly email.',
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
				A popular dev tweets “<em>Why aren’t you using Vue yet?!</em>”.
				Meanwhile, your buddy Slacks you a blog post: “<em>
					What‘s New In React This Month
				</em>”. And your inbox is jam-packed with fresh articles: “<em>
					You Must Learn Redux
				</em>” and “<em>Redux Is Dead</em>”.
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
				reading… refreshing… skimming… and just when you feel on top of
				things — Ding! Another email newsletter.
			</p>
			<p>
				You’re constantly bombarded with hype, clickbait, and{' '}
				<em>bullshit</em>. It’s overwhelming. There’s too much to know.
			</p>

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

			<p>
				3) I collate, de-dupe, tag, and save the results into a report.
			</p>

			<p>
				<strong>
					This report is my single source of JavaScript news for the
					week.
				</strong>
			</p>

			<p>
				I love this report. It surfaces what‘s important, and contains
				everything I need to stay updated. Even just skimming it gives
				me a high-level overview of current trends.
			</p>

			<p>
				It feels like cheating. Like watching the movie instead of
				reading the book. Or an expert highlighting paragraphs in my
				mountain of papers.
			</p>

			<p>
				I’ve stopped habitually refreshing Hacker News. My inbox feels
				lighter after unsubscribing from a bunch of newsletters. I
				ignore the noise and simply focus on the report. It feels like I
				have more hours in the day. I even discovered I have{' '}
				<em>other</em> hobbies — woah!
			</p>
		</PageContainer>

		<PageContainer className="my-4 mt-12 p-6 bg-denim-white text-center">
			<h2 className="h2 mt-0">The JavaScript Report</h2>
			<p className="p mb-0">
				The pulse of the JavaScript community distilled into a weekly
				email.
			</p>
		</PageContainer>

		<PageContainer small className="wysiwyg">
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
				The report is currently just a personal ugly spreadsheet. If I
				get enough interest, I will take time to tidy the report and
				publish it weekly. Show your support by signing up below, and
				I‘ll send you an email if it kicks off:
			</p>

			<div className="my-4">
				<EmailPlease
					list="javascript-list"
					id="javascript-list"
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
