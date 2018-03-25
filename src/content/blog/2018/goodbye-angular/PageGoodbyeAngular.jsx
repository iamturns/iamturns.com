// @flow

import * as React from 'react';

import LayoutArticle from '../../../../components/LayoutArticle';
import type { PagePropsData } from '../../../../types/PageProps';
import Content from './Content';

export const frontmatter = {
	title: 'Angular Burnout',
	description:
		'I dreaded returning to programming during a 3 month travel break. It turns out I’m not done with programming, I’m just done with Angular.',
	slug: '/angular-burnout-react-saves-the-day',
	dateCreated: '2018-03-23',
	dateUpdated: '2018-03-23',
	type: 'article',
	nerdsOnly: true,
	cover: './sleeping-dog.jpg',
	shareImage: './sleeping-dog.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query PageGoodbyeAngularQuery($slug: String!) {
		...CurrentArticle
		...Articles
		imgDocs: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/goodbye-angular/docs.jpg" }
		) {
			childImageSharp {
				sizes(maxWidth: 580) {
					...GatsbyImageSharpSizes
				}
			}
		}
	}
`;

export type PageGoodbyeAngularProps = {
	data: PagePropsData & {
		imgDocs: Image,
	},
};

const PageGoodbyeAngular = (props: PageGoodbyeAngularProps) => (
	<LayoutArticle pageProps={props}>
		<Content {...props} />
	</LayoutArticle>
);

export default PageGoodbyeAngular;
