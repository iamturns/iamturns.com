// @flow

import * as React from 'react';

import ArrowLeft from '../../../../vendor/feather-icons-react/ArrowLeft';
import ContentHeader from '../../../components/ContentHeader';
import HeadTagsContent from '../../../components/HeadTagsContent';
import Link from '../../../components/Link';
import PageContainer from '../../../components/PageContainer';
import type { Content } from '../../../types/Content';

export const frontmatter = {
	title: 'Boom!',
	cover: '../../../assets/images/headers/fireworks.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentEmailSuccessQuery($slug: String!) {
		...CurrentContent
	}
`;

type ContentProps = {
	data: {
		currentContent: Content,
	},
};

const ContentEmailSuccess = ({ data: { currentContent } }: ContentProps) => (
	<div>
		<HeadTagsContent content={currentContent} />
		<ContentHeader
			image={currentContent.frontmatter.cover}
			title={currentContent.frontmatter.title}
		/>
		<PageContainer small className="wysiwyg my-12">
			<p className="c-subtitle">
				When I write new stuff, you’ll be first to know — lucky duck!
			</p>
			<p>I just sent you an email to make sure you’re fo’ real.</p>
			<p>
				Click the link (in the email), then we officially become best
				friends.
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

export default ContentEmailSuccess;
