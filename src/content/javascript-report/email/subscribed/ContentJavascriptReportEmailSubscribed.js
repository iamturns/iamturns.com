// @flow

import * as React from 'react';

import ArrowLeft from '../../../../../vendor/feather-icons-react/ArrowLeft';
import ContentHeader from '../../../../components/ContentHeader';
import HeadTagsContent from '../../../../components/HeadTagsContent';
import Link from '../../../../components/Link';
import PageContainer from '../../../../components/PageContainer';
import type { Content } from '../../../../types/Content';

export const frontmatter = {
	title: 'JavaScript Report',
	cover: '../../../../assets/images/headers/fireworks.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentJavascriptReportEmailSubscribedQuery($slug: String!) {
		...CurrentContent
	}
`;

type ContentProps = {
	data: {
		currentContent: Content,
	},
};

const ContentJavascriptReportEmailSubscribed = ({
	data: { currentContent },
}: ContentProps) => (
	<div>
		<HeadTagsContent content={currentContent} />
		<ContentHeader image={currentContent.frontmatter.cover} />
		<PageContainer small className="wysiwyg my-12">
			<p>
				Nice one! You‘ll be the first to know when the{' '}
				<Link to="/javascript-report/">JavaScript report</Link> kicks
				off.
			</p>

			<p>
				Feel free to share the report with anyone else who might enjoy
				it — the more the merrier.
			</p>

			<p>
				Love,<br />Matt
			</p>
			<p className="p mt-8">
				<Link to="/" className="button inline-flex items-center">
					<ArrowLeft className="w-4 h-4 mr-1" />
					Back to I Am Turns
				</Link>
			</p>
		</PageContainer>
	</div>
);

export default ContentJavascriptReportEmailSubscribed;
