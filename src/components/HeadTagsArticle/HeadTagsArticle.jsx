// @flow

import * as React from 'react';

import type { Article } from '../../types/Article';
import { getArticleHeadTags } from '../../utils/article';
import HeadTags from '../HeadTags';
import type { HeadTagsProps } from '../HeadTags';

type HeadTagsArticleProps = {
	article: Article,
	overrideTags?: HeadTagsProps,
};

const HeadTagsArticle = ({
	article,
	overrideTags = {},
}: HeadTagsArticleProps) => (
	<HeadTags {...getArticleHeadTags(article, overrideTags)} />
);

export default HeadTagsArticle;
