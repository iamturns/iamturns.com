// @flow

import * as React from "react";

import type { Content } from "../../types/Content";
import Author from "../Author/Author";

type HeaderAuthorProps = {
	content: Content,
};

const LayoutContentHeaderAuthor = ({ content }: HeaderAuthorProps) => {
	if (!content.frontmatter.dateUpdated) {
		return null;
	}
	return (
		<div className="my-6">
			<Author date={content.frontmatter.dateUpdated} />
		</div>
	);
};

export default LayoutContentHeaderAuthor;
