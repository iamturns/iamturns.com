// @flow

import * as React from 'react';

import ArrowLeft from '../../../../vendor/feather-icons-react/ArrowLeft';
import ContentHeader from '../../../components/ContentHeader';
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
		<PageContainer small className="wysiwyg my-12">
			<p className="subtitle">That’s us, jumping in the sunset.</p>
			<p>That’s what we do now.</p>
			<p>See you (in your inbox) soon!</p>
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

export default ContentEmailSubscribed;
