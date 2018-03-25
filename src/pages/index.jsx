// @flow

import * as React from 'react';

import ArticleListing from '../components/ArticleListing';
import EmailPlease from '../components/EmailPlease';
import HeadTags from '../components/HeadTags';
import Hey from '../components/Hey';
import PageContainer from '../components/PageContainer';
import type { Article } from '../types/Article';
import type { Result } from '../types/Result';
import getHeadTags from '../utils/head-tags';
import { prefixSiteUrl } from '../utils/url';

declare var graphql: Function;
export const pageQuery = graphql`
	query PageIndexQuery {
		...Articles
	}
`;

type PageIndexProps = {
	data: {
		articlesResult: Result<Article>,
		articlesNerdsResult: Result<Article>,
	},
	location: {
		pathname: string,
	},
};

const PageIndex = ({
	data: { articlesResult, articlesNerdsResult },
	location: { pathname },
}: PageIndexProps) => (
	<div>
		<HeadTags
			{...getHeadTags({
				pageUrl: prefixSiteUrl(pathname),
				pageTitle: 'I Am Turns',
			})}
		/>
		<PageContainer className="pt-12">
			<Hey />
		</PageContainer>
		<ArticleListing articles={articlesResult} />
		<ArticleListing articles={articlesNerdsResult} nerdsOnly />
		<PageContainer className="py-12 bg-denim-white">
			<EmailPlease />
		</PageContainer>
	</div>
);

export default PageIndex;
