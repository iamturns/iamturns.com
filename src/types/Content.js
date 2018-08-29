// @flow

import type { Image } from "./Image";

export type Content = {
	+fields: {
		+slug: string,
	},
	+frontmatter: {
		+title: string,
		+type?: "page" | "article",
		+description?: string,
		+dateCreated?: string,
		+dateUpdated?: string,
		+cover?: Image,
		+shareImage?: Image,
	},
};
