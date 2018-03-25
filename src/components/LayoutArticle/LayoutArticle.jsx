// @flow

import * as React from 'react';

import type { PageProps } from '../../types/PageProps';
import type { HeadTagsProps } from '../HeadTags';
import HeadTagsArticle from '../HeadTagsArticle';
import LayoutArticleFooter from '../LayoutArticleFooter';
import LayoutArticleHeader from '../LayoutArticleHeader';
import PageContainer from '../PageContainer';

type LayoutArticleProps = {
	children: React.Node,
	pageProps: PageProps,
	additionalHeadTags?: HeadTagsProps,
	imageCaption?: string,
};

const LayoutArticle = ({
	children,
	pageProps,
	additionalHeadTags = {},
	imageCaption,
}: LayoutArticleProps) => (
	<div>
		<HeadTagsArticle
			article={pageProps.data.currentArticle}
			overrideTags={additionalHeadTags}
		/>
		<LayoutArticleHeader
			article={pageProps.data.currentArticle}
			imageCaption={imageCaption}
		/>
		<PageContainer small>{children}</PageContainer>
		<LayoutArticleFooter
			currentArticle={pageProps.data.currentArticle}
			articleListing={pageProps.data.articlesResult}
			articleNerdsListing={pageProps.data.articlesNerdsResult}
		/>
	</div>
);

export default LayoutArticle;
