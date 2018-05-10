// @flow

import * as React from 'react';

import type { Content } from '../../types/Content';
import type { Result } from '../../types/Result';
import { getResultAsArray } from '../../utils/result';
import ContentHeader from '../ContentHeader/ContentHeader';
import ContentListing from '../ContentListing/ContentListing';
import type { HeadTagsProps } from '../HeadTags';
import HeadTagsContent from '../HeadTagsContent';
import PageContainer from '../PageContainer';
import LayoutContentEmail from './Email';
import LayoutContentHeaderAuthor from './HeaderAuthor';

type LayoutContentProps = {
	children: React.Node,
	currentContent: Content,
	contentListResult: Result<Content>,
	additionalHeadTags?: HeadTagsProps,
};

const LayoutContent = ({
	children,
	currentContent,
	contentListResult,
	additionalHeadTags = {},
}: LayoutContentProps) => (
	<div>
		<HeadTagsContent
			content={currentContent}
			overrideTags={additionalHeadTags}
		/>
		<ContentHeader
			image={currentContent.frontmatter.cover}
			title={currentContent.frontmatter.title}
		/>
		<LayoutContentHeaderAuthor content={currentContent} />
		<PageContainer small>
			{children}
			<LayoutContentEmail currentContent={currentContent} />
		</PageContainer>
		<ContentListing
			contentList={getResultAsArray(contentListResult)}
			currentContent={currentContent}
		/>
	</div>
);

export default LayoutContent;
