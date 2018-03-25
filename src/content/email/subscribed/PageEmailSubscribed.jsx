// @flow

import * as React from 'react';

import ArrowLeft from '../../../../vendor/feather-icons-react/ArrowLeft';
import ContentP from '../../../components/ContentP';
import ContentSubtitle from '../../../components/ContentSubtitle';
import ContentTitle from '../../../components/ContentTitle';
import HeadTagsArticle from '../../../components/HeadTagsArticle';
import Link from '../../../components/Link';
import PageContainer from '../../../components/PageContainer';
import type { Article } from '../../../types/Article';

export const frontmatter = {
	title: 'Yes!',
	cover: '../../../assets/images/headers/celebrate.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query PageEmailSubscribedQuery($slug: String!) {
		...CurrentArticle
	}
`;

type PageEmailSubscribedProps = {
	data: {
		currentArticle: Article,
	},
};

const PageEmailSubscribed = ({
	data: { currentArticle },
}: PageEmailSubscribedProps) => (
	<div>
		<HeadTagsArticle article={currentArticle} />
		<ContentTitle image={currentArticle.frontmatter.cover} />
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

export default PageEmailSubscribed;
