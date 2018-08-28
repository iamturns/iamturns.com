// @flow

import _flow from 'lodash/flow';

import type { HeadTagsProps } from '../../components/HeadTags';
import type { Content } from '../../types/Content';
import getHeadTags from '../../utils/head-tags';
import { getImageDimensions, getImageSrc } from '../../utils/image';
import { prefixSiteUrl } from '../../utils/url';

type ContentHeadTags = HeadTagsProps & {
	content: Content,
};

export default function getContentHeadTags(
	content: Content,
	props?: HeadTagsProps = {},
): HeadTagsProps {
	const contentHeadTags: ContentHeadTags = {
		...props,
		content,
	};
	return _flow([
		setContentHeadTags,
		setContentImage,
		clearContentFromProps,
		getHeadTags,
	])(contentHeadTags);
}

function setContentHeadTags(props: ContentHeadTags): ContentHeadTags {
	const contentHeadTags = {};

	contentHeadTags.isArticle = props.content.frontmatter.type === 'article';
	contentHeadTags.pageUrl = prefixSiteUrl(props.content.fields.slug);
	contentHeadTags.pageTitle = props.content.frontmatter.title;

	if (props.content.frontmatter.description) {
		contentHeadTags.pageDescription = props.content.frontmatter.description;
	}
	if (props.content.frontmatter.dateCreated) {
		contentHeadTags.articleDatePublished =
			props.content.frontmatter.dateCreated;
	}
	if (props.content.frontmatter.dateUpdated) {
		contentHeadTags.articleDateModified =
			props.content.frontmatter.dateUpdated;
	}

	return {
		...contentHeadTags,
		...props,
	};
}

function setContentImage(props: ContentHeadTags): ContentHeadTags {
	const contentImage = props.content.frontmatter.shareImage;

	if (!contentImage) {
		return props;
	}

	const imageSrc = getImageSrc(contentImage);
	if (!imageSrc) {
		return props;
	}

	const newProps: ContentHeadTags = {
		...props,
		pageImage: prefixSiteUrl(imageSrc),
	};

	const dimensions = getImageDimensions(contentImage);

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

function clearContentFromProps(props: ContentHeadTags): HeadTagsProps {
	const { content, ...rest } = props;
	return rest;
}
