// @flow

import * as React from 'react';

import LayoutContent from '../../../../components/LayoutContent';
import type { Content } from '../../../../types/Content';
import type { Result } from '../../../../types/Result';

export const frontmatter = {
	title: 'Brand New Website',
	description: 'Starting 2018 in a new skin!',
	slug: '/new-website-2018',
	dateCreated: '2018-03-23',
	dateUpdated: '2018-03-23',
	type: 'article',
	cover: './open.jpg',
	shareImage: './open.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentNewWebsiteQuery($slug: String!) {
		...CurrentContent
		...ContentList
	}
`;

type ContentProps = {
	data: {
		currentContent: Content,
		contentListResult: Result<Content>,
		contentListNerdsResult: Result<Content>,
		imgDocs: Image,
	},
};

const ContentNewWebsite = (props: ContentProps) => (
	<LayoutContent
		currentContent={props.data.currentContent}
		contentListResult={props.data.contentListResult}
		contentListNerdsResult={props.data.contentListNerdsResult}
	>
		<div className="wysiwyg">
			<p className="c-subtitle">Welcome!</p>
			<p>There’s not much to see yet, but that will soon change!</p>
		</div>
	</LayoutContent>
);

export default ContentNewWebsite;
