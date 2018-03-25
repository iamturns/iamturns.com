// @flow

import * as React from 'react';

import type { Article } from '../../types/Article';
import type { Result } from '../../types/Result';
import ArticleListing from '../ArticleListing';
import EmailPlease from '../EmailPlease';
import Hey from '../Hey';
import PageContainer from '../PageContainer';

type LayoutArticleFooterProps = {
	articleListing: Result<Article> | Array<Article>,
	articleNerdsListing: Result<Article> | Array<Article>,
	currentArticle?: Article,
};

const LayoutArticleFooter = ({
	articleListing,
	articleNerdsListing,
	currentArticle,
}: LayoutArticleFooterProps) => (
	<div>
		<PageContainer className="mt-12 py-12 bg-denim-white">
			<Hey />
		</PageContainer>
		<ArticleListing
			articles={articleListing}
			currentArticle={currentArticle}
		/>
		<ArticleListing
			articles={articleNerdsListing}
			currentArticle={currentArticle}
			nerdsOnly
		/>
		<PageContainer className="py-12 bg-denim-white">
			<EmailPlease />
		</PageContainer>
	</div>
);

export default LayoutArticleFooter;
