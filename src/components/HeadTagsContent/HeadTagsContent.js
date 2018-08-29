// @flow

import * as React from "react";

import type { Content } from "../../types/Content";
import HeadTags from "../HeadTags";
import type { HeadTagsProps } from "../HeadTags";
import getContentHeadTags from "./get-content-head-tags";

type HeadTagsContentProps = {
	content: Content,
	overrideTags?: HeadTagsProps,
};

const HeadTagsContent = ({ content, overrideTags = {} }: HeadTagsContentProps) => (
	<HeadTags {...getContentHeadTags(content, overrideTags)} />
);

export default HeadTagsContent;
