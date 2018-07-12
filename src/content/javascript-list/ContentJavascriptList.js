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
	description: 'The best from the JavaScript community every week.',
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

			<p>
				You’re doing your best to keep up. This fast-paced JavaScript
				industry demands it! So you’re on your phone every chance you
				get. Scrolling… reading… refreshing… skimming… and just when you
				feel on top of things — ding! <em>Another</em> email newsletter.
			</p>

			<p>
				You‘re lost in 42 browser tabs. An endless supply of articles
				and tutorials and GitHub repos, all bookmarked to check out
				later (or, never).
			</p>
			<p>It’s overwhelming. There’s too much to know.</p>

			<h2>
				I developed a system that easily keeps me up-to-date with
				JavaScript.
			</h2>

			<p>
				1) Every Sunday I visit the biggest news platforms (like Hacker
				News, Twitter, and Medium).
			</p>

			<p>
				2) I run filters to discover the most popular JavaScript content
				from the last 7 days.
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
				It surfaces only what‘s important, and contains everything I
				need to stay updated.
			</p>

			<p>
				It feels like cheating. Like watching the movie instead of
				reading the book. Or an expert highlighting paragraphs in my
				mountain of papers.
			</p>

			<p>
				I’ve stopped habitually refreshing Hacker News. My inbox feels
				lighter after unsubscribing from a bunch of newsletters. I
				ignore the noise and simply focus on the report.
			</p>
			<p>
				I love using my time wisely, and this report saves me both time
				and energy every week. With all the hours saved, I discovered I
				actually have <em>other</em> hobbies — woah!
			</p>
		</PageContainer>

		<PageContainer className="my-8 p-6 bg-denim-white text-center">
			<h2 className="h2 my-0">The JavaScript Report</h2>
		</PageContainer>

		<PageContainer small className="wysiwyg">
			<p>
				Surfacing only the best content from the communities at Hacker
				News, Twitter, Medium, GitHub, Reddit, and YouTube.
			</p>

			<p>
				Stay updated with the JavaScript world, including React, Vue,
				Node, GraphQL, and Serverless. And to keep things interesting: a
				splash of tech news, design, and funny bits.
			</p>

			<p>
				The report is currently an ugly spreadsheet I keep to myself.
				Given enough interest, I‘ll take time to tidy the report and
				publish it weekly. Show your support by signing up below, and
				I‘ll send an email (if it kicks off):
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
