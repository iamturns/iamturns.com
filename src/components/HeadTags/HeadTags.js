// @flow

import * as React from "react";
import Helmet from "react-helmet";

export type HeadTagsProps = {
	pageUrl?: string,
	pageTitle?: string,
	pageDescription?: string,
	pageImage?: string,
	pageImageWidth?: string,
	pageImageHeight?: string,
	siteTitle?: string,
	siteUrl?: string,
	siteLogo?: string, // 112 x 112 minimum
	siteTwitter?: string, // @example
	siteSocialProfiles?: Array<string>, // URLs to facebook, twitter, youtube, etc
	siteFacebookAdmins?: Array<string>, // Gives you analytics access, must be IDs: https://findmyfbid.com/
	siteAdditional?: Object, // http://schema.org/Organization
	isArticle?: boolean, // Default = false
	articleDatePublished?: string, // ISO 8601
	articleDateModified?: string, // ISO 8601
	articleSection?: string,
	articleTags?: Array<string>,
	articleAdditional?: Object, // http://schema.org/NewsArticle
	articleAuthorName?: string,
	articleAuthorUrl?: string,
	articleAuthorFacebook?: string, // https://facebook.com/username
	articleAuthorTwitter?: string, // @example
	articleAuthorAdditional?: Object, // http://schema.org/Person
};

const HeadTags = (props: HeadTagsProps) => (
	<Helmet>
		<html prefix={htmlPrefix(props)} />

		{/* Basic */}

		{props.pageTitle && <title>{props.pageTitle}</title>}
		{props.pageDescription && <meta name="description" content={props.pageDescription} />}

		{props.pageUrl && <link rel="canonical" href={props.pageUrl} />}
		<meta name="robots" content="index, follow" />

		{/* Open Graph (Facebook, Pinterest, LinkedIn, Reddit, Google+, etc) */}

		<meta property="og:type" content={props.isArticle ? "article" : "website"} />

		{props.pageUrl && <meta property="og:url" content={props.pageUrl} />}

		{props.pageTitle && <meta property="og:title" content={props.pageTitle} />}

		{props.pageDescription && <meta property="og:description" content={props.pageDescription} />}

		{props.pageImage && <meta property="og:image" content={props.pageImage} />}

		{props.pageImageWidth && <meta property="og:image:width" content={props.pageImageWidth} />}

		{props.pageImageHeight && <meta property="og:image:height" content={props.pageImageHeight} />}

		{props.siteTitle && <meta property="og:site_name" content={props.siteTitle} />}

		{/* Open Graph - Article */}

		{props.articleDatePublished && (
			<meta property="article:published_time" content={props.articleDatePublished} />
		)}

		{props.articleDateModified && (
			<meta property="article:modified_time" content={props.articleDateModified} />
		)}

		{props.articleSection && <meta property="article:section" content={props.articleSection} />}

		{props.articleTags &&
			props.articleTags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}

		{/* Open Graph - Facebook */}

		{props.articleAuthorFacebook && (
			<meta property="article:author" content={props.articleAuthorFacebook} />
		)}

		{props.siteFacebookAdmins &&
			props.siteFacebookAdmins.map(fbAdmin => (
				<meta key={fbAdmin} property="fb:admins" content={fbAdmin} />
			))}

		{/* Twitter */}

		<meta name="twitter:card" content="summary_large_image" />

		{props.siteTwitter && <meta name="twitter:site" content={props.siteTwitter} />}

		{props.articleAuthorTwitter && (
			<meta name="twitter:creator" content={props.articleAuthorTwitter} />
		)}

		{/* Schema */}

		<script type="application/ld+json">
			{`
					${JSON.stringify({
						"@context": "http://schema.org",
						...schema(props),
					})}
				`}
		</script>
	</Helmet>
);

export default HeadTags;

function htmlPrefix(props: HeadTagsProps): string {
	const result = ["og: http://ogp.me/ns#"];
	if (props.isArticle) {
		result.push("article: http://ogp.me/ns/article#");
	}
	return result.join(" ");
}

function schemaOrganization(props: HeadTagsProps): Object {
	const result: Object = {
		"@type": "Organization",
	};

	if (props.siteTitle) {
		result.name = props.siteTitle;
	}

	if (props.siteUrl) {
		result.url = props.siteUrl;
	}

	if (props.siteLogo) {
		result.logo = props.siteLogo;
	}

	if (props.siteSocialProfiles) {
		result.sameAs = props.siteSocialProfiles;
	}

	return {
		...result,
		...(props.siteAdditional || {}),
	};
}

function schemaAuthor(props: HeadTagsProps): Object {
	const result: Object = {
		"@type": "Person",
	};

	if (props.articleAuthorName) {
		result.name = props.articleAuthorName;
	}

	if (props.articleAuthorUrl) {
		result.url = props.articleAuthorUrl;
	}

	return {
		...result,
		...(props.articleAuthorAdditional || {}),
	};
}

function schemaArticle(props: HeadTagsProps): Object {
	const result: Object = {
		"@type": "NewsArticle",
	};

	if (props.pageUrl) {
		result.mainEntityOfPage = props.pageUrl;
	}

	if (props.pageTitle) {
		result.headline = props.pageTitle;
	}

	if (props.pageDescription) {
		result.description = props.pageDescription;
	}

	if (props.articleSection) {
		result.articleSection = props.articleSection;
	}

	if (props.articleTags) {
		result.keywords = props.articleTags;
	}

	if (props.pageImage) {
		result.image = props.pageImage;
	}

	if (props.articleDatePublished) {
		result.datePublished = props.articleDatePublished;
	}

	if (props.articleDateModified) {
		result.dateModified = props.articleDateModified;
	}

	result.author = schemaAuthor(props);
	result.publisher = schemaOrganization(props);

	return {
		...result,
		...(props.articleAdditional || {}),
	};
}

function schema(props: HeadTagsProps) {
	return props.isArticle ? schemaArticle(props) : schemaOrganization(props);
}
