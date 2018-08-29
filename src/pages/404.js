// @flow

import * as React from "react";

import ArrowLeft from "../../vendor/feather-icons-react/ArrowLeft";
import ContentHeader from "../components/ContentHeader";
import HeadTags from "../components/HeadTags";
import Link from "../components/Link";
import PageContainer from "../components/PageContainer";
import type { Image } from "../types/Image";
import getHeadTags from "../utils/head-tags";
import { prefixSiteUrl } from "../utils/url";

declare var graphql: Function;
export const pageQuery = graphql`
	query PageNotFoundQuery {
		cover: file(
			sourceInstanceName: { eq: "assets" }
			relativePath: { eq: "images/headers/missing-jigsaw.jpg" }
		) {
			childImageSharp {
				sizes(maxHeight: 400) {
					...GatsbyImageSharpSizes
				}
			}
		}
	}
`;

type PageProps = {
	data: {
		cover: Image,
	},
	location: {
		pathname: string,
	},
};

const PageNotFound = (props: PageProps) => (
	<div>
		<HeadTags
			{...getHeadTags({
				pageUrl: prefixSiteUrl(props.location.pathname),
				pageTitle: "404: Not Found",
			})}
		/>
		<ContentHeader image={props.data.cover} title="404: Not found" />
		<PageContainer small className="wysiwyg">
			<p>Sorry about that.</p>
			<p>
				If this is a problem, please <Link to="mailto:matt@iamturns.com">let me know</Link>.
			</p>
			<p className="mt-8">
				<Link to="/" className="button inline-flex items-center">
					<ArrowLeft className="w-4 h-4 mr-1" />
					Back to I Am Turns
				</Link>
			</p>
		</PageContainer>
	</div>
);

export default PageNotFound;
