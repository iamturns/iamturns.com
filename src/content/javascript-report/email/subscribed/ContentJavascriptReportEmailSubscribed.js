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
	cover: './jumping.jpg',
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
			<p>You‘re in!</p>

			<p>
				The <Link to="/javascript-report">JavaScript report</Link> is
				just an ugly spreadsheet I keep to myself at the moment. But if
				this gets enough interest, I‘ll take time to tidy the report,
				polish it up, and publish it weekly.
			</p>

			<p>If it all kicks off, you‘re the first to know!</p>

			<p>
				Feel free to share the{' '}
				<Link to="/javascript-report">report</Link> with anyone else who
				might enjoy it — the more the merrier.
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
