// @flow

import * as React from 'react';

import LayoutArticle from '../../components/LayoutArticle';
import type { Image } from '../../types/Image';
import type { PagePropsData } from '../../types/PageProps';
import Content from './Content';

export const frontmatter = {
	title: 'Example page',
	description: 'Example description.',
	dateCreated: '2017-01-01',
	dateUpdated: '2018-01-01',
	type: 'article',
	unlisted: true,
	// nerdsOnly: true,
	cover: '../../assets/images/headers/fireworks.jpg',
	shareImage: '../../assets/images/headers/celebrate.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query PageExampleQuery($slug: String!) {
		...CurrentArticle
		...Articles
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

export type PageExampleProps = {
	data: PagePropsData & {
		imgSetSize: Image,
		imgSmall: Image,
		imgBig: Image,
		imgFull: Image,
	},
};

// If no need to override, then props:

const PageExample = (props: PageExampleProps) => (
	<LayoutArticle pageProps={props}>
		<Content {...props} />
	</LayoutArticle>
);

export default PageExample;
