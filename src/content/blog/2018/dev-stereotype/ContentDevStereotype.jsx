// @flow

import * as React from 'react';

import LayoutContent from '../../../../components/LayoutContent';
import type { Content } from '../../../../types/Content';
import type { Result } from '../../../../types/Result';
import ContentDevStereotypeArticle from './ContentDevStereotypeArticle';
import ContentDevStereotypeFootnotes from './ContentDevStereotypeFootnotes';
import type { Footnote } from './Footnote';

export const frontmatter = {
	title: 'The Stereotypical Developer of 2018',
	description:
		'Inspired by the the 100,000 developers who participated in the 2018 Stack Overflow developer survey.',
	slug: '/stereotypical-developer-2018',
	dateCreated: '2018-05-09',
	dateUpdated: '2018-05-09',
	type: 'article',
	cover: './stereotypical-developers-2018.jpg',
	shareImage: './stereotypical-developers-2018.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentDevStereotypeQuery($slug: String!) {
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

type ContentState = {
	footnotes: Array<Footnote>,
};

class ContentDevStereotype extends React.Component<ContentProps, ContentState> {
	constructor(props: ContentProps) {
		super(props);
		// $FlowFixMe
		this.addFootnote = this.addFootnote.bind(this);
	}

	state = {
		footnotes: [],
	};

	componentWillUpdate() {
		this.state.footnotes = [];
	}

	addFootnote(footnote: Footnote): number {
		this.state.footnotes.push(footnote);
		return this.state.footnotes.length;
	}

	render() {
		return (
			<LayoutContent
				currentContent={this.props.data.currentContent}
				contentListResult={this.props.data.contentListResult}
			>
				<ContentDevStereotypeArticle addFootnote={this.addFootnote} />
				<ContentDevStereotypeFootnotes
					footnotes={this.state.footnotes}
				/>
			</LayoutContent>
		);
	}
}

export default ContentDevStereotype;
