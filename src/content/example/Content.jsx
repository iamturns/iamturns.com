// @flow

import * as React from 'react';

import ContentA from '../../components/ContentA';
import ContentBlock from '../../components/ContentBlock';
import ContentCode from '../../components/ContentCode';
import ContentCodeBlock from '../../components/ContentCodeBlock';
import ContentH2 from '../../components/ContentH2';
import ContentH3 from '../../components/ContentH3';
import ContentHR from '../../components/ContentHR';
import ContentImg from '../../components/ContentImg';
import ContentLI from '../../components/ContentLI';
import ContentP from '../../components/ContentP';
import ContentPullQuote from '../../components/ContentPullQuote';
import ContentQuote from '../../components/ContentQuote';
import ContentSubtitle from '../../components/ContentSubtitle';
import ContentUL from '../../components/ContentUL';
import Emoji from '../../components/Emoji';
import EmojiText from '../../components/EmojiText';
import { createImage } from '../../utils/image';
import type { PageExampleProps } from './PageExample';
import ImgSpongebob from './spongebob.gif';

const IMG_SPONGEBOB = createImage(ImgSpongebob, 500, 380);

const Content = ({
	data: { imgSetSize, imgSmall, imgBig, imgFull },
}: PageExampleProps) => (
	<div>
		<ContentSubtitle>
			This is a subtitle and it is a little bit longer so that it wraps
			over a couple of lines you see.
		</ContentSubtitle>
		<ContentP>
			<Emoji>😖</Emoji> Lorem ipsum{' '}
			<ContentA to="internal">dolor sit</ContentA> amet,{' '}
			<ContentA to="http://external/">consectetur adipiscing</ContentA>{' '}
			elit, sed do and{' '}
			<ContentA to="https://google.com/">this link is visited</ContentA>.
			Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
			nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit
			esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.
		</ContentP>
		<ContentH2>Heading level two</ContentH2>
		<ContentP>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</ContentP>
		<ContentH3>Heading level three</ContentH3>
		<ContentP>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</ContentP>
		<ContentUL>
			<ContentLI>List item 1</ContentLI>
			<ContentLI>
				List item 2 consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua
			</ContentLI>
			<ContentLI>List item 3</ContentLI>
		</ContentUL>
		<ContentP>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</ContentP>
		<ContentUL reset>
			<ContentLI>
				<EmojiText emoji="✋">List item 1</EmojiText>
			</ContentLI>
			<ContentLI>
				<EmojiText emoji="☄">
					Listem item 2 consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua
				</EmojiText>
			</ContentLI>
			<ContentLI>
				<EmojiText emoji="⚽">List item 3</EmojiText>
			</ContentLI>
		</ContentUL>
		<ContentQuote>This is a quote.</ContentQuote>
		<ContentP>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</ContentP>
		<ContentPullQuote>This is a pull quote.</ContentPullQuote>
		<ContentP>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</ContentP>
		<ContentH3>Image set size</ContentH3>
		<ContentImg image={imgSetSize} alt="Example alt text">
			Example caption
		</ContentImg>
		<ContentP>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</ContentP>
		<ContentH3>Image small</ContentH3>
		<ContentImg image={imgSmall} alt="Example alt text">
			Here is the caption with a <ContentA to="/">link inside</ContentA> -
			wow!
		</ContentImg>
		<ContentP>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</ContentP>
		<ContentH3>Image big</ContentH3>
		<ContentImg image={imgBig} alt="Example alt text">
			Example caption
		</ContentImg>
		<ContentP>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</ContentP>
		<ContentH3>Image full</ContentH3>
		<ContentImg image={imgFull} alt="Example alt text" type="fullscreen">
			Example caption
		</ContentImg>
		<ContentP>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</ContentP>
		<ContentH3>Image gif</ContentH3>
		<ContentImg image={IMG_SPONGEBOB} alt="Example alt text">
			Example caption
		</ContentImg>
		<ContentHR />
		<ContentP>
			Inline code <ContentCode language="js" code="const a = 'b'" />
		</ContentP>
		<ContentP>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</ContentP>
		<ContentCodeBlock
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
		<ContentH2>Colours</ContentH2>
		<ContentBlock>
			<div className="bg-black h-16" />
			<div className="bg-turtle-black h-8" />
			<div className="bg-turtle-darkest h-8" />
			<div className="bg-turtle-darker h-8" />
			<div className="bg-turtle-dark h-8" />
			<div className="bg-turtle h-8">TURTLE</div>
			<div className="bg-turtle-light h-8" />
			<div className="bg-turtle-lighter h-8" />
			<div className="bg-turtle-lightest h-8" />
			<div className="bg-turtle-white h-8" />
			<div className="bg-white h-16" />
			<div className="bg-black h-16" />
			<div className="bg-denim-black h-8" />
			<div className="bg-denim-darkest h-8" />
			<div className="bg-denim-darker h-8" />
			<div className="bg-denim-dark h-8" />
			<div className="bg-denim h-8">DENIM</div>
			<div className="bg-denim-light h-8" />
			<div className="bg-denim-lighter h-8" />
			<div className="bg-denim-lightest h-8" />
			<div className="bg-denim-white h-8" />
			<div className="bg-white h-16" />
		</ContentBlock>
	</div>
);

export default Content;
