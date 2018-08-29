// @flow

import * as React from "react";

import ArrowLeft from "../../../vendor/feather-icons-react/ArrowLeft";
import EmailPlease from "../../components/EmailPlease";
import FaceLink from "../../components/FaceLink";
import HeadTagsContent from "../../components/HeadTagsContent";
import ImgBlock from "../../components/ImgBlock";
import Link from "../../components/Link";
import PageContainer from "../../components/PageContainer";
import type { Content } from "../../types/Content";
import { createImage } from "../../utils/image";
import ImgHose from "./hose.gif";

const IMG_HOSE = createImage(ImgHose, 295, 288);

export const frontmatter = {
	type: "page",
	title: "The JavaScript Roundup",
	description: "A free weekly email powered by the JavaScript community.",
	dateCreated: "2018-07-11",
	dateUpdated: "2018-07-11",
	unlisted: true,
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentJavascriptRoundupQuery($slug: String!) {
		...CurrentContent
	}
`;

export type ContentProps = {
	data: {
		currentContent: Content,
	},
};

const ContentJavascriptRoundup = ({ data: { currentContent } }: ContentProps) => (
	<div>
		<HeadTagsContent content={currentContent} />
		<PageContainer small className="wysiwyg">
			<h2>It’s impossible to keep up with JavaScript.</h2>
			<p>
				A popular dev tweets “<em>Why aren’t you using Vue yet?!</em>
				”. Meanwhile, your buddy Slacks you a blog post: “<em>What’s New In React This Month</em>
				”. And your inbox is jam-packed with fresh articles: “<em>You Must Learn Redux Now!</em>”
				and “<em>Redux Is Dead!</em>
				”.
			</p>
			<p>
				You’re doing your best to keep up — this fast-paced JavaScript industry demands it! So
				you’re catching up every chance you get. Scrolling… reading… refreshing… skimming. You’re
				lost in 42 browser tabs of articles, tutorials, and GitHub repos. You bookmark a handful to
				check out later (or, never).
			</p>
			<p>It’s overwhelming. There’s too much to know.</p>
			<ImgBlock image={IMG_HOSE}>Just checking the latest JavaScript news</ImgBlock>
			<h2>I developed a system that easily keeps me up-to-date with JavaScript.</h2>
			<ol className="pl-4">
				<li>
					Every Sunday I visit the biggest news platforms (like Hacker News, Twitter, and Medium).
				</li>
				<li>I run filters to discover the most popular JavaScript content from the last 7 days.</li>
				<li>I collate, de-dupe, tag, and save the results into a report.</li>
			</ol>
			<h2>This report is my single source of JavaScript news for the week.</h2>
			<p>
				It surfaces the best content from the biggest JavaScript communities, and contains
				everything I need to stay updated. Even a quick skim of the report keeps me in the loop.
			</p>
			<p>
				The secret sauce: the JavaScript community itself filters the endless flood of news for me.
				I‘ve stopped wasting time refreshing Hacker News twice a day. My inbox feels lighter after
				ditching a bunch of newsletters. I ignore the noise and simply focus on the report.
			</p>
			<p>Guess what? I’ve decided to publish this report every week! I call it:</p>
		</PageContainer>

		<PageContainer className="my-4 mt-12 p-6 bg-denim-white text-center">
			<h2 className="h2 my-0">The JavaScript Roundup</h2>
			<p className="p mb-0">A free weekly email powered by the JavaScript community</p>
		</PageContainer>

		<PageContainer small className="wysiwyg">
			<p>
				I know, emails suck. But this one is unique:
				<ul>
					<li>
						Powered entirely by the JavaScript community itself.
						<div className="text-sm">(no hidden agendas)</div>
					</li>
					<li>
						Surfaces only the best from the biggest online platforms.
						<div className="text-sm">
							(like Hacker News, Twitter, Medium, GitHub, Reddit, and YouTube)
						</div>
					</li>
					<li>
						Includes a mix of formats, whatever your preference.
						<div className="text-sm">
							(like articles, tutorials, discussions, code, tweets, videos, and podcasts)
						</div>
					</li>
					<li>
						Thoroughly covers JavaScript <em>and</em> its friends.
						<div className="text-sm">(like React, Vue, Node, GraphQL, and Serverless)</div>
					</li>
				</ul>
			</p>

			<p>Delivered weekly for free. No spam. Unsubscribe anytime.</p>

			<div className="my-4">
				<EmailPlease list="javascript-roundup" id="javascript-roundup" hideFooter />
			</div>
			<aside className="mt-12">
				<div className="inline-flex flex-row items-center">
					<div className="pr-6 flex-none">
						<FaceLink size={80} />
					</div>
					<div>
						Questions, suggestions, feedback?
						<br />
						<Link to="https://twitter.com/iamturns">@iamturns</Link> or{" "}
						<Link to="mailto:matt@iamturns.com">matt@iamturns.com</Link>
					</div>
				</div>
			</aside>
			<p className="my-12">
				<Link to="/" className="button inline-flex items-center">
					<ArrowLeft className="w-4 h-4 mr-1" />
					Back to I Am Turns
				</Link>
			</p>
		</PageContainer>
	</div>
);

export default ContentJavascriptRoundup;
