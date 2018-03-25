// @flow

import * as React from 'react';

import LayoutArticle from '../../../../components/LayoutArticle';
import type { PageProps } from '../../../../types/PageProps';
import Content from './Content';

// No share image on purpose, use the default share
export const frontmatter = {
	title: 'Brand New Website',
	description: 'Starting 2018 in a new skin!',
	slug: '/new-website-2018',
	dateCreated: '2018-03-23',
	dateUpdated: '2018-03-23',
	type: 'article',
	cover: './open.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query PageNewWebsiteQuery($slug: String!) {
		...CurrentArticle
		...Articles
	}
`;

const PageNewWebsite = (props: PageProps) => (
	<LayoutArticle pageProps={props}>
		<Content {...props} />
	</LayoutArticle>
);

export default PageNewWebsite;
