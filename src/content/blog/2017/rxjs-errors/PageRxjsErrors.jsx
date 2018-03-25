// @flow

import * as React from 'react';

import LayoutArticle from '../../../../components/LayoutArticle';
import type { PageProps } from '../../../../types/PageProps';
import Content from './Content';

export const frontmatter = {
	title: 'Continue RxJS Streams When Errors Occur: The Quest for Meatballs',
	description:
		'I assumed RxJS streams worked like Promises, and I was very wrong.',
	slug: '/continue-rxjs-streams-when-errors-occur',
	dateCreated: '2017-05-07',
	dateUpdated: '2018-03-19',
	type: 'article',
	nerdsOnly: true,
	cover: './meatballs.jpg',
	shareImage: './meatballs.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query PageRxjsErrorsQuery($slug: String!) {
		...CurrentArticle
		...Articles
	}
`;

const PageRxjsErrors = (props: PageProps) => (
	<LayoutArticle pageProps={props}>
		<Content {...props} />
	</LayoutArticle>
);

export default PageRxjsErrors;
