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
	title: 'Boom!',
	cover: '../../../assets/images/headers/fireworks.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query PageEmailSuccessQuery($slug: String!) {
		...CurrentArticle
	}
`;

type PageEmailSuccessProps = {
	data: {
		currentArticle: Article,
	},
};

const PageEmailSuccess = ({
	data: { currentArticle },
}: PageEmailSuccessProps) => (
	<div>
		<HeadTagsArticle article={currentArticle} />
		<ContentTitle
			image={currentArticle.frontmatter.cover}
			title={currentArticle.frontmatter.title}
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

export default PageEmailSuccess;
