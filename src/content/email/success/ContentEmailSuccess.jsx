// @flow

import * as React from 'react';

import ArrowLeft from '../../../../vendor/feather-icons-react/ArrowLeft';
import ContentHeader from '../../../components/ContentHeader';
import ContentP from '../../../components/ContentP';
import ContentSubtitle from '../../../components/ContentSubtitle';
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
		<PageContainer small className="my-12">
			<ContentSubtitle>
				When I write new stuff, you’ll be first to know — lucky duck!
			</ContentSubtitle>
			<ContentP>
				I just sent you an email to make sure you’re fo’ real.
			</ContentP>
			<ContentP>
				Click the link (in the email), then we officially become best
				friends.
			</ContentP>
			<ContentP className="mt-8">
				<Link to="/" className="button inline-flex items-center">
					<ArrowLeft className="w-4 h-4 mr-1" />
					Back to I Am Turns
				</Link>
			</ContentP>
		</PageContainer>
	</div>
);

export default ContentEmailSuccess;
