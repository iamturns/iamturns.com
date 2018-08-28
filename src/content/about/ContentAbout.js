// @flow

import classNames from 'classnames';
import * as React from 'react';

import ImgFace from '../../assets/images/matt-turnbull-face-120.jpg';
import ImgFace2x from '../../assets/images/matt-turnbull-face-240.jpg';
import ContentListing from '../../components/ContentListing';
import DateTime from '../../components/DateTime';
import EmailPleaseBox from '../../components/EmailPleaseBox';
import EmojiText from '../../components/EmojiText';
import HeadingBrick from '../../components/HeadingBrick';
import HeadTagsContent from '../../components/HeadTagsContent';
import ImgBlock from '../../components/ImgBlock';
import LastUpdated from '../../components/LastUpdated';
import Link from '../../components/Link';
import PageContainer from '../../components/PageContainer';
import type { Content } from '../../types/Content';
import type { Image } from '../../types/Image';
import type { Result } from '../../types/Result';
import { createImage } from '../../utils/image';
import { getResultAsArray } from '../../utils/result';
import ImgCheers from './cheers.gif';
import ImgTouch from './touch.gif';

const IMG_CHEERS = createImage(ImgCheers, 576, 432);
const IMG_TOUCH = createImage(ImgTouch, 480, 196);

export const frontmatter = {
	title: 'About Matt Turnbull',
	dateCreated: '2018-03-19',
	dateUpdated: '2018-08-11',
	type: 'article',
	unlisted: true,
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentAboutQuery($slug: String!) {
		...CurrentContent
		...ContentList
		imgCrab: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "about/hermit-crab.jpg" }
		) {
			childImageSharp {
				sizes(maxWidth: 580) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgCartoon: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "about/cartoon.png" }
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
		imgCrab: Image,
		imgCartoon: Image,
	},
};

const ContentAbout = ({
	data: { currentContent, contentListResult, imgCrab, imgCartoon },
}: ContentProps) => (
	<div>
		<HeadTagsContent content={currentContent} />
		<PageContainer small className="wysiwyg">
			<Hey />
			<p>And I have a confession to make…</p>
		</PageContainer>
		<PageContainer className="my-8 p-6 bg-denim-white text-center">
			<h2 className="text-xl text-denim-black">
				I love making websites &amp; apps
			</h2>
		</PageContainer>
		<PageContainer small className="wysiwyg">
			<p>It gets me out of bed, and keeps me up at night.</p>

			<h3 className="h3 mt-12">Blame it on crabs</h3>
			<ImgBlock image={imgCrab} alt="Hermit crab" />
			<p>
				It all started with building a website about hermit crabs at the
				age of 13.
			</p>
			<p>20 years later this passion has driven me to:</p>
			<ul className="list list-reset my-6">
				<li>
					<EmojiText emoji="🛠️">
						Create exceptional websites &amp; apps with
						award-winning agencies in London and Melbourne
					</EmojiText>
				</li>
				<li>
					<EmojiText emoji="🤝">
						Collaborate with talented teams in Berlin, Tel Aviv, and
						Guangzhou
					</EmojiText>
				</li>
				<li>
					<EmojiText emoji="📈">
						Deliver a range of digital solutions, from prototypes
						&amp; MVPs to large-scale enterprise systems
					</EmojiText>
				</li>
			</ul>
		</PageContainer>

		<div className="my-8 pt-12 sm:px-8 sm:pb-12 bg-pattern">
			<HeadingBrick>Nerds Only</HeadingBrick>
			<div
				className={classNames(
					'mt-12',
					'max-w-md mx-auto',
					'bg-turtle-white',
					'border-turtle-darker sm:border',
				)}
			>
				<div
					className={classNames(
						'bg-turtle-white text-turtle-black',
						'font-mono leading-tight text-sm',
						'my-8 mx-4 sm:mx-8 overflow-auto',
						'wysiwyg',
					)}
				>
					<p>
						Some of my favourite languages and tools (
						{currentContent.frontmatter.dateUpdated && (
							<DateTime
								dateTime={
									currentContent.frontmatter.dateUpdated
								}
							/>
						)}
						):
					</p>

					<ul>
						<li>JavaScript, TypeScript</li>
						<li>React, Node.js, Express</li>
						<li>GraphQL, PostgreSQL</li>
						<li>Jest, Enzyme, Cypress</li>
						<li>PostCSS (with SASS style plugins), Tailwind CSS</li>
						<li>AWS, Netlify, Docker</li>
						<li>Gatsby, Puppeteer</li>
						<li>Functional programming, Agile</li>
						<li>VSCode, Fish shell</li>
					</ul>
				</div>
			</div>
		</div>

		<PageContainer small className="wysiwyg">
			<ImgBlock image={imgCartoon} alt="Matt Turnbull" />

			<p>Away from the keyboard I love:</p>

			<ul className="list list-reset">
				<li>
					<EmojiText emoji="🌏">
						<Link to="https://www.instagram.com/whereareweguys/">
							Exploring the world with my partner
						</Link>
					</EmojiText>
				</li>
				<li>
					<EmojiText emoji="🐾">
						<Link to="https://www.instagram.com/helloiamalfie/">
							Spoiling my furry son Alfie
						</Link>
					</EmojiText>
				</li>
				<li>
					<EmojiText emoji="🤘">
						Rocking out on drums &amp; guitar
					</EmojiText>
				</li>
				<li>
					<EmojiText emoji="📚">Learning all the things</EmojiText>
				</li>
				<li>
					<EmojiText emoji="🙃">Anything ridiculous</EmojiText>
				</li>
			</ul>

			<h2>Get in touch</h2>

			<ImgBlock image={IMG_TOUCH} type="fullwidth" />

			<ul>
				<li>
					<Link to="mailto:matt@iamturns.com">matt@iamturns.com</Link>
				</li>
				<li>
					<Link to="https://twitter.com/iamturns">
						twitter.com/iamturns
					</Link>
				</li>
				<li>
					<Link to="https://www.instagram.com/iamturns/">
						instagram.com/iamturns
					</Link>
				</li>
				<li>
					<Link to="https://github.com/iamturns">
						github.com/iamturns
					</Link>
				</li>
				<li>
					<Link to="https://www.linkedin.com/in/iamturns/">
						linkedin.com/in/iamturns
					</Link>
				</li>
			</ul>

			<h2>Now</h2>

			{currentContent.frontmatter.dateUpdated && (
				<LastUpdated
					dateTime={currentContent.frontmatter.dateUpdated}
					className="text-xs"
				/>
			)}

			<ul className="list list-reset my-6">
				<li>
					<EmojiText emoji="📍" emojiLabel="Current location: ">
						Melbourne, Australia
					</EmojiText>
				</li>
				<li>
					<EmojiText emoji="👨‍💻" emojiLabel="Employment: ">
						Open to part-time work
					</EmojiText>
				</li>
				<li>
					<EmojiText emoji="📃">CV available on request</EmojiText>
				</li>
			</ul>

			<h2>Cheers!</h2>
			<ImgBlock image={IMG_CHEERS} type="fullwidth" />
		</PageContainer>
		<PageContainer className="mt-12 py-12 bg-denim-white">
			<EmailPleaseBox id={`footer-${currentContent.fields.slug}`} />
		</PageContainer>
		<ContentListing
			contentList={getResultAsArray(contentListResult)}
			currentContent={currentContent}
		/>
	</div>
);

export default ContentAbout;

const Hey = () => (
	<div className="py-12 flex items-center justify-center">
		<div className="flex flex-col sm:flex-row items-center">
			<div className="flex-none" style={{ width: '120px' }}>
				<img
					src={ImgFace}
					srcSet={`${ImgFace2x} 2x`}
					alt="Matt Turnbull"
					width="120"
					height="120"
					className="rounded-full border-2 border-turtle-darker"
				/>
			</div>
			<div className="pt-4 sm:pt-0 sm:pl-8 text-center">
				<div className="text-lg text-turtle-darker">Hey, I’m</div>
				<h1 className="text-2xl">Matt Turnbull</h1>
			</div>
		</div>
	</div>
);
