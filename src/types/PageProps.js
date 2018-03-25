// @flow

import type { Article } from './Article';
import type { Result } from './Result';

// This separation helps with overriding just the data property
export type PagePropsData = {
	currentArticle: Article,
	articlesResult: Result<Article>,
	articlesNerdsResult: Result<Article>,
};

export type PageProps = {
	data: PagePropsData,
};
