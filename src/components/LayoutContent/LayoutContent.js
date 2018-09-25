// @flow

import * as React from "react";

import type { Content } from "../../types/Content";
import type { Footnote } from "../../types/Footnote";
import type { Result } from "../../types/Result";
import { getResultAsArray } from "../../utils/result";
import ContentHeader from "../ContentHeader/ContentHeader";
import ContentListing from "../ContentListing/ContentListing";
import DisqusContent from "../DisqusContent/";
import type { HeadTagsProps } from "../HeadTags";
import HeadTagsContent from "../HeadTagsContent";
import PageContainer from "../PageContainer";
import PitchIntro from "../PitchIntro";
import LayoutContentFootnotes from "./Footnotes";
import LayoutContentHeaderAuthor from "./HeaderAuthor";
import PitchIntroContainer from "../PitchIntroContainer";

type LayoutContentProps = {
	children: React.Node,
	currentContent: Content,
	contentListResult: Result<Content>,
	additionalHeadTags?: HeadTagsProps,
	footnotes?: Array<Footnote>,
};

const LayoutContent = ({
	children,
	currentContent,
	contentListResult,
	additionalHeadTags = {},
	footnotes = [],
}: LayoutContentProps) => (
	<div>
		<HeadTagsContent content={currentContent} overrideTags={additionalHeadTags} />
		<ContentHeader
			image={currentContent.frontmatter.cover}
			title={currentContent.frontmatter.title}
		/>
		<LayoutContentHeaderAuthor content={currentContent} />
		<PageContainer small>
			{children}
			<aside>
				<hr className="hr-dash my-6" />
				<PitchIntro />
				<hr className="hr-dash my-6" />
			</aside>
			<div className="mt-12">
				<DisqusContent content={currentContent} />
			</div>
			<LayoutContentFootnotes footnotes={footnotes} />
		</PageContainer>
		<ContentListing
			contentList={getResultAsArray(contentListResult)}
			currentContent={currentContent}
		/>
		<PitchIntroContainer />
	</div>
);

export default LayoutContent;
