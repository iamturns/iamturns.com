// @flow

import * as React from 'react';

import LayoutContent from '../../../../components/LayoutContent';
import { withFootnotesParent } from '../../../../hocs/withFootnotesParent';
import type { Content } from '../../../../types/Content';
import type { Footnote } from '../../../../types/Footnote';
import type { Result } from '../../../../types/Result';
import ContentDevStereotypeArticle from './ContentDevStereotypeArticle';

export const frontmatter = {
	title: 'The Stereotypical Developer in 2018',
	description:
		'Introducing: Joe, the stereotypical developer in 2018. Inspired by the 100,000 devs who participated in the 2018 Stack Overflow Developer Survey.',
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
	footnotes: Array<Footnote>,
	addFootnote: (footnote: Footnote) => number,
};

const ContentDevStereotype = (props: ContentProps) => (
	<LayoutContent
		currentContent={props.data.currentContent}
		contentListResult={props.data.contentListResult}
		footnotes={props.footnotes}
	>
		<ContentDevStereotypeArticle addFootnote={props.addFootnote} />
	</LayoutContent>
);

export default withFootnotesParent(ContentDevStereotype);
