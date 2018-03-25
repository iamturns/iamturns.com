// @flow

import type { Image } from './Image';

export type Article = {
	fields: {
		slug: string,
	},
	frontmatter: {
		title: string,
		type?: 'article',
		description?: string,
		dateCreated?: string,
		dateUpdated?: string,
		cover?: Image,
		shareImage?: Image,
	},
};
