// @flow

import _flow from 'lodash/flow';

import type { HeadTagsProps } from '../../components/HeadTags';
import type { Article } from '../../types/Article';
import { getImageDimensions, getImageSrc } from '../../utils/image';
import { prefixSiteUrl } from '../../utils/url';
import getHeadTags from '../head-tags';

type ArticleHeadTags = HeadTagsProps & {
	article: Article,
};

export default function getArticleHeadTags(
	article: Article,
	props?: HeadTagsProps = {},
): HeadTagsProps {
	const articleHeadTags: ArticleHeadTags = { ...props, article };
	return _flow([
		setArticleHeadTags,
		setArticleImage,
		clearArticleFromProps,
		getHeadTags,
	])(articleHeadTags);
}

function setArticleHeadTags(props: ArticleHeadTags): ArticleHeadTags {
	const articleTags = {};

	articleTags.isArticle = props.article.frontmatter.type === 'article';
	articleTags.pageUrl = prefixSiteUrl(props.article.fields.slug);
	articleTags.pageTitle = props.article.frontmatter.title;

	if (props.article.frontmatter.description) {
		articleTags.pageDescription = props.article.frontmatter.description;
	}
	if (props.article.frontmatter.dateCreated) {
		articleTags.articleDatePublished =
			props.article.frontmatter.dateCreated;
	}
	if (props.article.frontmatter.dateUpdated) {
		articleTags.articleDateModified = props.article.frontmatter.dateUpdated;
	}

	return {
		...articleTags,
		...props,
	};
}

function setArticleImage(props: ArticleHeadTags): ArticleHeadTags {
	const articleImage = props.article.frontmatter.shareImage;

	if (!articleImage) {
		return props;
	}

	const imageSrc = getImageSrc(articleImage);
	if (!imageSrc) {
		return props;
	}

	const newProps = {
		...props,
		pageImage: prefixSiteUrl(imageSrc),
	};

	const dimensions = getImageDimensions(articleImage);

	if (!dimensions) {
		return newProps;
	}

	if (dimensions.width) {
		newProps.pageImageWidth = dimensions.width;
	}

	if (dimensions.height) {
		newProps.pageImageHeight = dimensions.height;
	}

	return newProps;
}

function clearArticleFromProps(props: ArticleHeadTags): HeadTagsProps {
	const { article, ...rest } = props;
	return rest;
}
