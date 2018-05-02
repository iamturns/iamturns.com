// @flow

import * as React from 'react';

import Emoji from '../../../../components/Emoji';
import LayoutContent from '../../../../components/LayoutContent';
import Link from '../../../../components/Link';
import type { Content } from '../../../../types/Content';
import type { Result } from '../../../../types/Result';

export const frontmatter = {
	title: 'Hunting For The Best Open Graph Image Size',
	description:
		'30 massively popular websites analysed to figure out what image size to set og:image',
	slug: '/open-graph-image-size',
	dateCreated: '2018-05-01',
	dateUpdated: '2018-05-01',
	type: 'article',
	cover: './og-image.jpg',
	shareImage: './og-image.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentOpenGraphImageQuery($slug: String!) {
		...CurrentContent
		...ContentList
	}
`;

type ContentProps = {
	data: {
		currentContent: Content,
		contentListResult: Result<Content>,
	},
};

const ContentOpenGraphImage = (props: ContentProps) => (
	<LayoutContent
		currentContent={props.data.currentContent}
		contentListResult={props.data.contentListResult}
	>
		<Article />
	</LayoutContent>
);

export default ContentOpenGraphImage;

const Article = () => (
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
			how do you cater for all these platforms? What dimensions should the
			image be? And what aspect ratio is best?
		</p>
		<h2>Let’s Google it!</h2>
		<p>According to the first page of Google:</p>
		<ul>
			<li>
				<Link to="https://developers.facebook.com/docs/sharing/best-practices/">
					Facebook
				</Link>{' '}
				suggests 1200 x 630 (1.9:1)
			</li>
			<li>
				<Link to="https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary">
					Twitter
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

		<h2>I analysed how 30 massive websites use og:image</h2>
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

		<h3 className="h4">On the homepage:</h3>

		<ul>
			<li>
				13 websites (43%){' '}
				<strong>
					do <em>not</em> use og:image
				</strong>
			</li>
			<li>
				7 websites (23%) set a ratio of <strong>1:1</strong>
			</li>
			<li>
				5 websites (17%) set a ratio of <strong>1.9:1</strong>
				<ul>
					<li>
						4 (80%) are exactly <strong>1200 x 630</strong>
					</li>
				</ul>
			</li>
			<li>
				3 websites (10%) set a ratio of <strong>1.91:1</strong>
				<ul>
					<li>
						2 (67%) are exactly <strong>1200 x 628</strong>
					</li>
				</ul>
			</li>
			<li>
				Udemy.com set a <strong>576 x 167</strong> image (ratio of
				<strong>3.45:1</strong>, wtf?)
			</li>
			<li>
				Walmart.com set a <strong>broken image</strong> (ouch)
			</li>
		</ul>

		<h3 className="h4">On article &amp; product pages:</h3>

		<ul>
			<li>
				10 websites (33%) <strong>change image dimensions</strong> from
				page to page
				<ul>
					<li>
						3 (30%) lock the width to <strong>1200</strong> (but the
						height is random)
					</li>
				</ul>
			</li>
			<li>
				5 websites (17%) set a ratio of <strong>1:1</strong>
			</li>
			<li>
				5 websites (17%) set a ratio of <strong>1.9:1</strong>
				<ul>
					<li>
						3 (60%) are exactly <strong>1200 x 630</strong>
					</li>
				</ul>
			</li>
			<li>
				4 websites (13%) have a ratio of <strong>1.78:1</strong> (aka{' '}
				<strong>16:9</strong>)
			</li>
			<li>
				2 websites (7%), Quora and Amazon,{' '}
				<strong>
					do <em>not</em> use og:image
				</strong>
				<ul className="ul mt-2">
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

		<h3 className="h4">In summary</h3>

		<p>
			The results indicate that the biggest and most popular websites{' '}
			<mark>do not care about og:image</mark>. They either don’t set one
			at all, or set images with random sizes.
		</p>

		<h2>A pattern emerges</h2>

		<p>
			If we ignore websites that set broken images, wacky aspect ratios,
			and random sizes, then 8 websites remain stranding.
		</p>

		<p>
			I call them:{' '}
			<strong>
				<mark>the perfectionists</mark>
			</strong>!
		</p>

		<p>
			<Emoji>👏</Emoji> for apple.com, forbes.com, foxnews.com,
			goodreads.com, indiatimes.com, nytimes.com, stackoverflow.com,
			theguardian.com.
		</p>

		<p>These guys know what’s up.</p>

		<h3 className="h4">What do the perfectionists do?</h3>

		<ul>
			<li>
				On the homepage: 4 websites (50%) set a ratio of{' '}
				<strong>1.9:1</strong>
				<ul>
					<li>
						3 (75%) are exactly <strong>1200 x 630</strong>
					</li>
				</ul>
			</li>
			<li>
				On article &amp; product pages: 5 websites (63%) set a ratio of{' '}
				<strong>1.9:1</strong>
				<ul>
					<li>
						3 (60%) are exactly <strong>1200 x 630</strong>
					</li>
				</ul>
			</li>
		</ul>

		<h2>What about twitter:image?</h2>

		<p>
			Twitter allows you to override og:image with a different image by
			setting the twitter:image meta tag. If twitter:image doesn’t exist,
			it will use og:image.
		</p>

		<h3 className="h4">How do these 30 websites use twitter:image?</h3>

		<ul>
			<li>
				On the homepage: only <strong>6</strong> websites (20%) use
				twitter:image<ul>
					<li>
						All 6 (100%) are set to the same image as og:image
						(making them redundant)
					</li>
				</ul>
			</li>
			<li>
				On article pages: <strong>18</strong> websites (60%) use
				twitter:image<ul>
					<li>
						14 (78%) are set to the same image as og:image (again,
						making them redundant)
					</li>
				</ul>
			</li>
		</ul>

		<p>Only 4 websites used twitter:image as intended:</p>

		<ul>
			<li>
				<strong>Buzzfeed</strong>
				<ul>
					<li>og:image = random sizes</li>
					<li>twitter:image = 625 x 415 (1.5:1)</li>
				</ul>
			</li>
			<li>
				<strong>Forbes</strong>
				<ul>
					<li>og:image = 600 x 315 (1.9:1)</li>
					<li>twitter:image = 600 x 300 (2:1)</li>
				</ul>
			</li>
			<li>
				<strong>Goodreads</strong>
				<ul>
					<li>og:image = 1200 x 630 (1.9:1)</li>
					<li>twitter:image = 450 x 450 (1:1)</li>
				</ul>
			</li>
			<li>
				<strong>Wordpress</strong>
				<ul>
					<li>og:image = 1200 width, random height</li>
					<li>twitter:image = 640 width, random height</li>
				</ul>
			</li>
		</ul>

		<p>
			The way Buzzfeed and Wordpress use twitter:image makes no sense to
			me. Perhaps developers updated og:image but forgot about
			twitter:image, and they became out of sync.
		</p>

		<p>Forbes and Goodreads seem to have a specific strategy here.</p>

		<h2>What did we learn?</h2>

		<h3 className="h4">On the homepage:</h3>

		<ul>
			<li>
				43% of websites{' '}
				<strong>
					do <em>not</em> use og:image
				</strong>
			</li>
			<li>
				41% of websites using og:image set a ratio of{' '}
				<strong>1:1</strong>
			</li>
			<li>
				50% of perfectionists set a ratio of <strong>1.91:1</strong>
				<ul>
					<li>
						75% with dimensions of <strong>1200 x 630</strong>
					</li>
				</ul>
			</li>
		</ul>

		<h3 className="h4">On article pages:</h3>

		<ul>
			<li>
				93% of websites <strong>do use og:image</strong>
			</li>
			<li>
				36% of websites using og:image set{' '}
				<strong>random dimensions</strong>
			</li>
			<li>
				63% of perfectionists set a ratio of <strong>1.9:1</strong>
				<ul>
					<li>
						60% with dimensions of <strong>1200 x 630</strong>
					</li>
				</ul>
			</li>
		</ul>

		<h3 className="h4">Using twitter:image:</h3>

		<ul>
			<li>
				87% of websites{' '}
				<strong>
					do <em>not</em> use twitter:image
				</strong>, or{' '}
				<strong>
					do <em>not</em> use it correctly
				</strong>
			</li>
			<li>
				50% of perfectionists set a ratio of <strong>2:1</strong>
			</li>
			<li>
				50% of perfectionists set a ratio of <strong>1:1</strong>
			</li>
		</ul>

		<h2>Raw data</h2>

		<p>
			Go for it! If you find any extra patterns or anything I’ve missed,
			please let me know!
		</p>

		<p>TODO: IMG HERE</p>

		<h2>Cheatsheet</h2>

		<h3 className="h4">What size og:image for my homepage?</h3>

		<ul>
			<li>
				<strong>Majority rules</strong>: Don’t bother setting an
				og:image, or use 1:1 ratio
			</li>
			<li>
				<strong>Perfectionists:</strong> 1200 x 630 (1.9:1)
			</li>
		</ul>

		<h3 className="h4">What size og:image for my article pages?</h3>

		<ul>
			<li>
				<strong>Majority rules:</strong> Use any size &amp; aspect ratio
			</li>
			<li>
				<strong>Perfectionists:</strong> 1200 x 630 (1.9:1)
			</li>
		</ul>

		<h3 className="h4">Should I use twitter:image?</h3>

		<ul>
			<li>
				<strong>Majority rules:</strong> Don’t bother.
			</li>
			<li>
				<strong>Perfectionists...</strong>
				<ul>
					<li>
						Want a wide image? 2:1 aspect ratio (eg: 1200 x 600)
					</li>
					<li>
						Want a small image? 1:1 aspect ratio (eg: 600 x 600)
					</li>
				</ul>
			</li>
		</ul>

		<hr />

		<p>
			I’ve always wondered:
			<ul>
				<li>
					What keywords are used the most in very popular headlines?
				</li>
				<li>
					What’s the average amount of comments on a Reddit or Hacker
					News thread? Are there patterns to attract more?
				</li>
				<li>
					What is the average word count for the meta description?
				</li>
			</ul>
		</p>
		<p>
			I believe we can find some interesting insights by reverse
			engineering successful websites.
		</p>
		<p>
			If you enjoyed this post and want more of this style, subscribe
			below and I’ll send you an email when I write more:
		</p>
	</div>
);
