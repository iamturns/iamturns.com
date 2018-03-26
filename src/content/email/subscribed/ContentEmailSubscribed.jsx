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
	title: 'Yes!',
	cover: '../../../assets/images/headers/celebrate.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentEmailSubscribedQuery($slug: String!) {
		...CurrentContent
	}
`;

type ContentProps = {
	data: {
		currentContent: Content,
	},
};

const ContentEmailSubscribed = ({ data: { currentContent } }: ContentProps) => (
	<div>
		<HeadTagsContent content={currentContent} />
		<ContentHeader image={currentContent.frontmatter.cover} />
		<PageContainer small className="my-12">
			<ContentSubtitle>That’s us, jumping in the sunset.</ContentSubtitle>
			<ContentP>That’s what we do now.</ContentP>
			<ContentP>See you (in your inbox) soon!</ContentP>
			<ContentP>
				Love,<br />Matt
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

export default ContentEmailSubscribed;
