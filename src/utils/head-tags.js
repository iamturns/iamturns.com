// @flow

import _flow from 'lodash/flow';

import siteLogo from '../assets/images/i-am-turns-logo.png';
import defaultImage from '../assets/images/social-share/default.png';
import type { HeadTagsProps } from '../components/HeadTags';
import { SITE_URL } from '../config';
import { prefixSiteUrl } from './url';

const DEFAULT_HEAD_TAGS: HeadTagsProps = {
	pageTitle: 'I Am Turns',
	pageDescription: "Hey, I'm Matt Turnbull. I make websites & apps.",
	siteTitle: 'I Am Turns',
	siteUrl: SITE_URL,
	siteLogo,
	siteTwitter: '@iamturns',
	siteSocialProfiles: [
		'https://twitter.com/iamturns',
		'https://www.instagram.com/iamturns/',
		'https://www.facebook.com/iamturns',
		'https://github.com/iamturns',
	],
	siteFacebookAdmins: ['650078615'],
	siteAdditional: {
		founder: {
			'@type': 'Person',
			name: 'Matt Turnbull',
			email: 'matt@iamturns.com',
		},
	},
};

const DEFAULT_HEAD_TAGS_ARTICLE: HeadTagsProps = {
	isArticle: true,
	articleAuthorName: 'Matt Turnbull',
	articleAuthorUrl: SITE_URL,
	articleAuthorFacebook: 'https://www.facebook.com/iamturns',
	articleAuthorTwitter: '@iamturns',
	articleAuthorAdditional: {
		email: 'matt@iamturns.com',
	},
};

const DEFAULT_PAGE_IMAGE: HeadTagsProps = {
	pageImage: prefixSiteUrl(defaultImage),
	pageImageWidth: '1200',
	pageImageHeight: '630',
};

function setDefaultHeadTags(props: HeadTagsProps): HeadTagsProps {
	return {
		...DEFAULT_HEAD_TAGS,
		...props,
	};
}

function setDefaultHeadTagsArticle(props: HeadTagsProps): HeadTagsProps {
	if (!props.isArticle) {
		return props;
	}
	return {
		...DEFAULT_HEAD_TAGS_ARTICLE,
		...props,
	};
}

function setDefaultPageImage(props: HeadTagsProps): HeadTagsProps {
	if (props.pageImage) {
		return props;
	}
	return {
		...DEFAULT_PAGE_IMAGE,
		...props,
	};
}

export default function getHeadTags(props?: HeadTagsProps = {}): HeadTagsProps {
	return _flow([
		setDefaultHeadTags,
		setDefaultHeadTagsArticle,
		setDefaultPageImage,
	])(props);
}
