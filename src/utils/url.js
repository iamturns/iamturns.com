// @flow

import urlJoin from 'url-join';

import { SITE_URL } from '../config';

export function prefixSiteUrl(url: string): string {
	if (url.startsWith(SITE_URL)) {
		return url;
	}
	return urlJoin(SITE_URL, url);
}

export function removeTrailingSlash(url: string): string {
	return url.replace(/\/$/, '');
}

export function addTrailingSlash(url: string): string {
	return url.replace(/\/?$/, '/');
}
