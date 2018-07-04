// @flow

import * as React from 'react';

import EmailPlease from '../../../../components/EmailPlease';
import Emoji from '../../../../components/Emoji';
import ImgBlock from '../../../../components/ImgBlock';
import LayoutContent from '../../../../components/LayoutContent';
import Link from '../../../../components/Link';
import type { Content } from '../../../../types/Content';
import type { Image } from '../../../../types/Image';
import type { Result } from '../../../../types/Result';

export const frontmatter = {
	title: 'The Best Open Graph Image Size (Stolen From Top Websites of 2018)',
	description:
		'Finding the best image size for og:image (and twitter:image) by analysing 30 massively popular websites.',
	slug: '/open-graph-image-size',
	dateCreated: '2018-05-03',
	dateUpdated: '2018-05-03',
	type: 'article',
	cover: './og-image.jpg',
	shareImage: './og-image.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentOpenGraphImageQuery($slug: String!) {
		...CurrentContent
		...ContentList
		imgSpreadsheet: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/open-graph-image/spreadsheet.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 580) {
					...GatsbyImageSharpSizes
				}
			}
		}
	}
`;

type ContentProps = {
	data: {
		currentContent: Content,
		contentListResult: Result<Content>,
		imgSpreadsheet: Image,
	},
};

const ContentOpenGraphImage = (props: ContentProps) => (
	<LayoutContent
		currentContent={props.data.currentContent}
		contentListResult={props.data.contentListResult}
	>
		<Article {...props} />
	</LayoutContent>
);

export default ContentOpenGraphImage;

const Article = (props: ContentProps) => (
	<div className="wysiwyg">
		<p>
			Everyone wants a piece of your sweet sweet Open Graph image. I’m
			talkin’ about Facebook, Twitter, Pinterest, LinkedIn, Google+,
			Slack, Yammer, Facebook Messenger, WhatsApp, Reddit, The Official
			Hello Kitty Fan Fiction Forum, the list goes on.
		</p>
		<p>
			They’re each gonna take your og:image and resize it, crop it, and
			slap it around until it’s snug within the Facebook feed, Twitter
			timeline, or your Dad’s email newsletter about potatoes. Some like
			it big and wide, and some like it small and square-ish. No judgement
			here.
		</p>
		<p>
			<mark>But you can only set one single Open Graph image.</mark> So
			how do you cater for all these platforms? What image size and aspect
			ratio is best?
		</p>
		<h2>Let’s Google it!</h2>
		<p>According to the first page of Google:</p>
		<ul>
			<li>
				<Link to="https://developers.facebook.com/docs/sharing/best-practices/">
					Facebook Open Graph Docs
				</Link>{' '}
				suggests 1200 x 630 (1.9:1)
			</li>
			<li>
				<Link to="https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary">
					Twitter Docs
				</Link>{' '}
				suggests 2:1 for large images, and 1:1 for small images
			</li>
			<li>
				<Link to="https://blog.bufferapp.com/ideal-image-sizes-social-media-posts">
					Buffer
				</Link>{' '}
				suggests 1024 x 512 (2:1)
			</li>
			<li>
				<Link to="https://www.h3xed.com/web-and-internet/how-to-use-og-image-meta-tag-facebook-reddit">
					H3xed
				</Link>{' '}
				suggests 1200 x 1200 (1:1)
			</li>
		</ul>
		<p>No general consensus. So…</p>
		<h2>I analysed how 30 massively popular websites use og:image</h2>
		<p>
			I chose websites that are a) very popular, b) have pages begging to
			be shared, and c) tickle me.
		</p>
		<p>
			Here’s who made the cut: adobe.com, amazon.com, answers.yahoo.com,
			apple.com, bbc.co.uk, bestbuy.com, buzzfeed.com, cnn.com, ebay.com,
			etsy.com, forbes.com, foxnews.com, goodreads.com, homedepot.com,
			ikea.com, indiatimes.com, medium.com, microsoft.com, news.yahoo.com,
			nytimes.com, quora.com, reddit.com, stackoverflow.com,
			store.steampowered.com, theguardian.com, udemy.com, walmart.com,
			washingpost.com, wikipedia.org, wordpress.com.
		</p>
		<h2>The results</h2>
		<p className="border border-turtle-darker bg-white p-4 text-sm">
			Just want the recommendations? Jump straight to the{' '}
			<Link to="#cheatsheet">cheatsheet</Link>.
		</p>
		<h3 className="h4">On the homepage:</h3>
		<ul>
			<li>
				{toPercent(17, 30)} of websites <strong>use og:image</strong>
			</li>
			<li>
				Image width ranges from <strong>291</strong> to{' '}
				<strong>1484</strong> (average: <strong>871</strong>)
			</li>
			<li>
				Image height ranges from <strong>167</strong> to{' '}
				<strong>1200</strong> (average: <strong>564</strong>)
			</li>
			<li>
				{toPercent(9, 17)} with og:image set a{' '}
				<strong>landscape image</strong>
				<ul>
					<li>
						{toPercent(5, 9)} set a ratio of <strong>1.9:1</strong>{' '}
						({toPercent(4, 5)} exactly <strong>1200 x 630</strong>)
					</li>
					<li>
						{toPercent(7, 17)} set a width of exactly{' '}
						<strong>1200</strong>
					</li>
				</ul>
			</li>
			<li>
				{toPercent(7, 17)} with og:image set a{' '}
				<strong>square image</strong>
				<ul>
					<li>
						With average dimension of <strong>554 x 554</strong>
					</li>
				</ul>
			</li>
			<li>
				{toPercent(13, 30)} of websites{' '}
				<strong>
					do <em>not</em> use og:image
				</strong>
			</li>
			<li>
				Udemy sets a <strong>576 x 167</strong> image (ratio of{' '}
				<strong>3.45:1</strong>, wtf?)
			</li>
			<li>
				Walmart sets a <strong>broken image</strong> (ouch)
			</li>
		</ul>
		<h3 className="h4">On article &amp; product pages:</h3>
		<ul>
			<li>
				{toPercent(28, 30)} of websites <strong>use og:image</strong>
			</li>
			<li>
				Image width ranges from <strong>316</strong> to{' '}
				<strong>3200</strong> (average: <strong>960</strong>)
			</li>
			<li>
				Image height ranges from <strong>215</strong> to{' '}
				<strong>1400</strong> (average: <strong>547</strong>)
			</li>
			<li>
				{toPercent(18, 28)} with og:image set{' '}
				<strong>exact dimensions</strong>
				<ul>
					<li>
						{toPercent(13, 18)} set a{' '}
						<strong>landscape image</strong>
					</li>
					<li>
						{toPercent(9, 18)} set a width of{' '}
						<strong>1000 or more</strong>
					</li>
				</ul>
			</li>
			<li>
				{toPercent(10, 28)} with og:image{' '}
				<strong>change image dimensions</strong> from page to page
			</li>
			<li>
				{toPercent(2, 28)} of websites (Quora and Amazon){' '}
				<strong>
					do <em>not</em> use og:image
				</strong>
				<ul>
					<li>
						Quora is text heavy, and they possibly want more space
						for the text.
					</li>
					<li>
						Amazon surprises me, but they don’t seem to care much
						for visuals in general.
					</li>
				</ul>
			</li>
		</ul>
		<h2>Searching for a pattern</h2>
		<p>
			No strong pattern emerged from the above results. But, if we ignore
			websites that set random sizes, wacky aspect ratios, and broken
			images: 8 websites remain standing.
		</p>
		<p>
			I call them…{' '}
			<strong>
				<mark>the perfectionists</mark>
			</strong>!
		</p>
		<p>
			<Emoji label="Applause">👏</Emoji> for apple.com, forbes.com,
			foxnews.com, goodreads.com, indiatimes.com, nytimes.com,
			stackoverflow.com, theguardian.com.
		</p>
		<p>These guys know what’s up.</p>
		<h3 className="h4">What do the perfectionists do?</h3>
		<p>
			On the homepage: {toPercent(4, 8)} set a ratio of{' '}
			<strong>1.9:1</strong>, with {toPercent(3, 4)} set exactly{' '}
			<strong>1200 x 630</strong>
		</p>
		<p>
			On article &amp; product pages: {toPercent(5, 8)} set a ratio of{' '}
			<strong>1.9:1</strong>, with {toPercent(3, 5)} set exactly{' '}
			<strong>1200 x 630</strong>
		</p>
		<h2>What about twitter:image?</h2>
		<p>
			Twitter allows you to override og:image with a different image by
			setting the twitter:image meta tag. If twitter:image doesn’t exist,
			it will use og:image.
		</p>
		<h3 className="h4">How do these 30 websites use twitter:image?</h3>
		<p>
			Pretty badly. Most set twitter:image to be the same as og:image,
			which doesn’t achieve anything.
		</p>
		<p>Only 4 websites use twitter:image as intended:</p>
		<ul>
			<li>
				<strong>Buzzfeed:</strong> og:image = random sizes,
				twitter:image = 625 x 415 (1.5:1)
			</li>
			<li>
				<strong>Forbes</strong>: og:image = 600 x 315 (1.9:1),
				twitter:image = 600 x 300 (2:1)
			</li>
			<li>
				<strong>Goodreads</strong>: og:image = 1200 x 630 (1.9:1),
				twitter:image = 450 x 450 (1:1)
			</li>
			<li>
				<strong>Wordpress</strong>: og:image = 1200 width x random
				height, twitter:image = 640 width x random height
			</li>
		</ul>
		<p>
			The way Buzzfeed and Wordpress use twitter:image makes no sense to
			me. Perhaps developers updated og:image but forgot about
			twitter:image, and they became out of sync.
		</p>
		<p>
			Forbes and Goodreads seem to have a specific strategy here,
			following advice directly from the{' '}
			<Link to="https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image">
				Twitter documentation
			</Link>.
		</p>

		<h2
			id="cheatsheet"
			className="h2 border-b-4 border-t-4 border-turtle py-3"
		>
			Summary &amp; Cheatsheet
		</h2>

		<h3 className="h4 mt-12 mb-8 border-b border-turtle pb-3">
			What size og:image for my homepage?
		</h3>

		<p>Don’t bother setting one.</p>

		<p>But if you do…</p>

		<ul>
			<li>Want a landscape image? 1200 x 630 (1.9:1)</li>
			<li>Want a square image? 1200 x 1200</li>
		</ul>

		<p>
			<strong>For perfectionists:</strong> Set a landscape image at 1200 x
			630 (1.9:1).
		</p>

		<h3 className="h4 mt-12 mb-8 border-b border-turtle pb-3">
			What size og:image for my article &amp; product pages?
		</h3>

		<ul>
			<li>Landscape image</li>
			<li>Width between 1000 and 3200 pixels</li>
			<li>Any height</li>
		</ul>
		<p>
			<strong>For perfectionists:</strong> Set a landscape image at 1200 x
			630 (1.9:1)
		</p>

		<h3 className="h4 mt-12 mb-8 border-b border-turtle pb-3">
			Should I use twitter:image?
		</h3>

		<p>No, don’t bother.</p>

		<p>
			<strong>For perfectionists:</strong>
		</p>
		<ul>
			<li>
				Want a landscape image?
				<ul>
					<li>
						Follow the Twitter docs:{' '}
						<Link to="https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image">
							Summary with large image
						</Link>
					</li>
					<li>2:1 aspect ratio (eg: 1200 x 600 pixels)</li>
					<li>Minimum dimensions: 300 x 157</li>
					<li>Maximum dimensions: 4096 x 4096</li>
				</ul>
			</li>
			<li>
				Want a square image?
				<ul>
					<li>
						Follow the Twitter docs:{' '}
						<Link to="https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary">
							Summary card
						</Link>
					</li>
					<li>1:1 aspect ratio (eg: 600 x 600 pixels)</li>
					<li>Minimum dimensions: 144 x 144</li>
					<li>Maximum dimensions: 4096 x 4096</li>
				</ul>
			</li>
		</ul>
		<hr />
		<h2>
			Reverse engineering successful websites can reveal interesting
			insights
		</h2>
		<p>Here’s some ideas I plan to research soon:</p>
		<ul>
			<li>
				What’s the most popular keywords on the frontpage of Reddit? Has
				it changed over time?
			</li>
			<li>
				What’s the average amount of comments on a Hacker News thread?
				Which threads attract the most?
			</li>
			<li>
				What’s the most common body text font size? Does it change
				across breakpoints?
			</li>
			<li>
				Which Instagram hashtags are used by the most popular accounts?
			</li>
		</ul>
		<p>
			If this kinda stuff tickles you, subscribe below and I’ll send you
			an email when I write an article:
		</p>
		<div className="mt-6">
			<EmailPlease id="open-graph-image-size-cta" />
		</div>
		<h2>Bonus: Raw Data</h2>
		<ImgBlock
			image={props.data.imgSpreadsheet}
			linkTo="https://docs.google.com/spreadsheets/d/1aIQVn0iN0n_ECfEZmHPqA7ggt_MCY2CWzeXPpKI0Yas/edit?usp=sharing"
			type="fullwidth"
		>
			<Link to="https://docs.google.com/spreadsheets/d/1aIQVn0iN0n_ECfEZmHPqA7ggt_MCY2CWzeXPpKI0Yas/edit?usp=sharing">
				View the raw data in Google Sheets
			</Link>
		</ImgBlock>
		<p>
			If you find any extra patterns or anything I’ve missed, please let
			me know!
		</p>
	</div>
);

function toPercent(amount: number, total: number): string {
	return `${Math.round(amount / total * 100)}%`;
}
