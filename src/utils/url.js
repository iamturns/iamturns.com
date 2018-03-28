// @flow

import urlJoin from 'url-join';

import { SITE_URL } from '../config';

export function prefixSiteUrl(url: string): string {
	if (isUrlExternal(url)) {
		return url;
	}
	return urlJoin(SITE_URL, url);
}

export function isUrlExternal(url: string): boolean {
	if (url.startsWith('mailto:')) {
		return true;
	}
	return url.match(/^https?:\/\//) !== null;
}

export function removeTrailingSlash(url: string): string {
	return url.replace(/\/$/, '');
}

export function addTrailingSlash(url: string): string {
	return url.replace(/\/?$/, '/');
}
