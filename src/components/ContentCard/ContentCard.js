// @flow

import * as React from "react";

import type { Content } from "../../types/Content";
import Card from "../Card";

type ContentCardProps = {
	content: Content,
};

const ContentCard = (props: ContentCardProps) => (
	<Card
		linkTo={props.content.fields.slug}
		title={props.content.frontmatter.title}
		image={props.content.frontmatter.cover}
		text={props.content.frontmatter.description}
		dateTime={props.content.frontmatter.dateUpdated}
	/>
);

export default ContentCard;
