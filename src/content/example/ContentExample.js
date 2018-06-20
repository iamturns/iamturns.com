// @flow

import * as React from 'react';

import Code from '../../components/Code';
import CodeBlock from '../../components/CodeBlock';
import Emoji from '../../components/Emoji';
import EmojiText from '../../components/EmojiText';
import ImgBlock from '../../components/ImgBlock';
import LayoutContent from '../../components/LayoutContent';
import Link from '../../components/Link';
import type { Content } from '../../types/Content';
import type { Image } from '../../types/Image';
import type { Result } from '../../types/Result';
import { createImage } from '../../utils/image';
import { markUserAdmin } from '../../utils/user';
import ImgSpongebob from './spongebob.gif';

const IMG_SPONGEBOB = createImage(ImgSpongebob, 500, 380);

export const frontmatter = {
	type: 'article', // 'page'
	title: 'Example page',
	description: 'Example description.',
	dateCreated: '2017-01-01',
	dateUpdated: '2018-01-01',
	unlisted: true,
	cover: '../../assets/images/headers/fireworks.jpg',
	shareImage: '../../assets/images/headers/celebrate.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentExampleQuery($slug: String!) {
		...CurrentContent
		...ContentList
		imgSetSize: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "example/little.png" }
		) {
			childImageSharp {
				resolutions(width: 190, height: 174) {
					...GatsbyImageSharpResolutions
				}
			}
		}
		imgSmall: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "example/little.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 580) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgBig: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "example/big.jpg" }
		) {
			childImageSharp {
				sizes(maxWidth: 580) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgFull: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "example/big.jpg" }
		) {
			childImageSharp {
				sizes(maxWidth: 1920) {
					...GatsbyImageSharpSizes
				}
			}
		}
	}
`;

export type ContentProps = {
	data: {
		currentContent: Content,
		contentListResult: Result<Content>,
		imgSetSize: Image,
		imgSmall: Image,
		imgBig: Image,
		imgFull: Image,
	},
};

class ContentExample extends React.Component<ContentProps> {
	componentDidMount() {
		markUserAdmin();
	}

	render() {
		return (
			<LayoutContent
				currentContent={this.props.data.currentContent}
				contentListResult={this.props.data.contentListResult}
			>
				<Article {...this.props} />
			</LayoutContent>
		);
	}
}

export default ContentExample;

const Article = ({
	data: { imgSetSize, imgSmall, imgBig, imgFull },
}: ContentProps) => (
	<div className="wysiwyg">
		<p className="subtitle">
			This is a subtitle and it is a little bit longer so that it wraps
			over a couple of lines you see.
		</p>
		<p>
			<Emoji>😖</Emoji> Lorem ipsum <Link to="internal">dolor sit</Link>{' '}
			amet, <Link to="http://external/">consectetur adipiscing</Link>{' '}
			elit, sed do and{' '}
			<Link to="https://google.com/">this link is visited</Link>. Ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit
			esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.
		</p>
		<h2>Heading level two</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</p>
		<h3>Heading level three</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</p>
		<ul>
			<li>List item 1</li>
			<li>
				List item 2 consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua
			</li>
			<li>List item 3</li>
		</ul>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</p>
		<ul className="list list-reset">
			<li>
				<EmojiText emoji="✋">List item 1</EmojiText>
			</li>
			<li>
				<EmojiText emoji="☄">
					Listem item 2 consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua
				</EmojiText>
			</li>
			<li>
				<EmojiText emoji="⚽">List item 3</EmojiText>
			</li>
		</ul>
		<blockquote>This is a quote.</blockquote>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</p>
		<blockquote className="quote-pull">This is a pull quote.</blockquote>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</p>
		<h3>Image set size</h3>
		<ImgBlock image={imgSetSize} alt="Example alt text">
			Example caption
		</ImgBlock>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</p>
		<h3>Image small</h3>
		<ImgBlock image={imgSmall} alt="Example alt text">
			Here is the caption with a <Link to="/">link inside</Link> - wow!
		</ImgBlock>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</p>
		<h3>Image big</h3>
		<ImgBlock image={imgBig} alt="Example alt text">
			Example caption
		</ImgBlock>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</p>
		<h3>Image full</h3>
		<ImgBlock image={imgFull} alt="Example alt text" type="fullscreen">
			Example caption
		</ImgBlock>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</p>
		<h3>Image gif</h3>
		<ImgBlock image={IMG_SPONGEBOB} alt="Example alt text">
			Example caption
		</ImgBlock>
		<hr />
		<p>
			Inline code <Code language="js" code="const a = 'b'" />
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</p>
		<CodeBlock
			language="jsx"
			highlight="3, 15-17"
			code={`
				// @flow

				import urlJoin from 'url-join';
				import somethingReallyLongAndStupidJustToShowOffHorizontalScrolling from '../../../../../../../../../../../../../../hi';

				import { SITE_URL } from '../config';

				// Hey look it's a comment
				class TodoList extends React.Component {
					render() {
					const list = this.props.list;
						return (
							<View>
							{/* It works just like a React component, because it is one! */}
							<Text>{list.title}</Text>
							{list.todoItems.map(item => <TodoItem item={item} />)}
							</View>
						);
					}
				}
			`}
		/>
		<h2>Colours</h2>
		<div className="p">
			<div className="bg-black h-16" />
			<div className="bg-turtle-black h-16" />
			<div className="bg-turtle-darkest h-16" />
			<div className="bg-turtle-darker h-16" />
			<div className="bg-turtle-dark h-16" />
			<div className="bg-turtle h-16">TURTLE</div>
			<div className="bg-turtle-light h-16" />
			<div className="bg-turtle-lighter h-16" />
			<div className="bg-turtle-lightest h-16" />
			<div className="bg-turtle-white h-16" />
			<div className="bg-white h-16" />
			<div className="bg-black h-16" />
			<div className="bg-denim-black h-16" />
			<div className="bg-denim-darkest h-16" />
			<div className="bg-denim-darker h-16" />
			<div className="bg-denim-dark h-16" />
			<div className="bg-denim h-16">DENIM</div>
			<div className="bg-denim-light h-16" />
			<div className="bg-denim-lighter h-16" />
			<div className="bg-denim-lightest h-16" />
			<div className="bg-denim-white h-16" />
			<div className="bg-white h-16" />
		</div>
	</div>
);
