// @flow

import * as React from 'react';

import type { Content } from '../../types/Content';
import type { Result } from '../../types/Result';
import { getResultAsArray } from '../../utils/result';
import type { HeadTagsProps } from '../HeadTags';
import HeadTagsContent from '../HeadTagsContent';
import PageContainer from '../PageContainer';
import Footer from './Footer';
import Header from './Header';

type LayoutContentProps = {
	children: React.Node,
	currentContent: Content,
	contentListResult: Result<Content>,
	additionalHeadTags?: HeadTagsProps,
	imageCaption?: string,
};

const LayoutContent = ({
	children,
	currentContent,
	contentListResult,
	additionalHeadTags = {},
	imageCaption,
}: LayoutContentProps) => (
	<div>
		<HeadTagsContent
			content={currentContent}
			overrideTags={additionalHeadTags}
		/>
		<Header content={currentContent} imageCaption={imageCaption} />
		<PageContainer small>{children}</PageContainer>
		<Footer
			contentList={getResultAsArray(contentListResult)}
			currentContent={currentContent}
		/>
	</div>
);

export default LayoutContent;
