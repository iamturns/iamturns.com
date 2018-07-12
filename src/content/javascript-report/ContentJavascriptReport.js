// @flow

import * as React from 'react';

import ArrowLeft from '../../../vendor/feather-icons-react/ArrowLeft';
import EmailPlease from '../../components/EmailPlease';
import HeadTagsContent from '../../components/HeadTagsContent';
import ImgBlock from '../../components/ImgBlock';
import Link from '../../components/Link';
import PageContainer from '../../components/PageContainer';
import type { Content } from '../../types/Content';
import { createImage } from '../../utils/image';
import ImgHose from './hose.gif';

const IMG_HOSE = createImage(ImgHose, 295, 288);

export const frontmatter = {
	type: 'page',
	title: 'JavaScript Report',
	description:
		'Surfacing the best content from the biggest JavaScript communities.',
	dateCreated: '2018-07-11',
	dateUpdated: '2018-07-11',
	unlisted: true,
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentJavascriptReportQuery($slug: String!) {
		...CurrentContent
	}
`;

export type ContentProps = {
	data: {
		currentContent: Content,
	},
};

const ContentJavascriptReport = ({
	data: { currentContent },
}: ContentProps) => (
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
				You‘re lost in 42 browser tabs. An endless trail of articles and
				tutorials and GitHub repos, all bookmarked to check out later
				(or, never).
			</p>
			<p>It’s overwhelming. There’s too much to know.</p>

			<ImgBlock image={IMG_HOSE}>
				Checking the latest JavaScript news.
			</ImgBlock>

			<h2>
				I developed a system that easily keeps me up-to-date with
				JavaScript.
			</h2>

			<p>
				I don‘t have time to sift through the noise, so I let the
				JavaScript community do it for me.
			</p>

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

			<h2>
				This report is my single source of JavaScript news for the week.
			</h2>

			<p>
				I’ve stopped habitually refreshing Hacker News. My inbox feels
				lighter after unsubscribing from a bunch of newsletters. I
				ignore the noise and simply focus on this one report.
			</p>

			<p>
				It contains everything I need to stay updated. Only the best
				content survives, selected by the largest JavaScript
				communities.
			</p>

			<p>
				It feels like cheating. Like watching the movie instead of
				reading the book. Or an expert highlighting paragraphs in my
				mountain of papers.
			</p>

			<p>
				I love using my time wisely, and this report saves me hours
				every week. I discovered I actually have <em>other</em> hobbies
				— woah!
			</p>

			<h2>Want the report?</h2>

			<p>
				Surfacing the best content from the biggest JavaScript
				communities at Hacker News, Twitter, Medium, GitHub, Reddit, and
				YouTube.
			</p>

			<p>
				Stay updated with the JavaScript world, including React, Vue,
				Node, GraphQL, and Serverless. And to keep things interesting: a
				splash of tech news, design, and funny bits.
			</p>

			<p>
				The report is currently an ugly spreadsheet I keep to myself.
				Given enough interest, I‘ll take time to tidy the report, polish
				it up, and publish it weekly. Show your support by signing up
				below, and I‘ll send an email (if it kicks off):
			</p>

			<div className="my-4">
				<EmailPlease
					list="javascript-report"
					id="javascript-report"
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

export default ContentJavascriptReport;
