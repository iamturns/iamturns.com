// @flow

import classNames from 'classnames';
import * as React from 'react';

import type { Content } from '../../types/Content';
import CardGroup from '../CardGroup';
import ContentCard from '../ContentCard';
import HeadingBrick from '../HeadingBrick';
import PageContainer from '../PageContainer';

type ContentListingProps = {
	contentList: Array<Content>,
	currentContent?: Content,
	title?: string,
	className?: string,
	// ...wrapperProps
};

const ContentListing = ({
	contentList,
	currentContent,
	title,
	className,
	...wrapperProps
}: ContentListingProps) => {
	const contentListFiltered = filterContentList(contentList, currentContent);
	if (contentListFiltered.length === 0) {
		return null;
	}
	return (
		<div className={classNames('py-12', className)} {...wrapperProps}>
			<PageContainer>
				{title && (
					<HeadingBrick className="mb-12">{title}</HeadingBrick>
				)}
				<CardGroup>
					{contentListFiltered.map(content => (
						<ContentCard
							key={content.fields.slug}
							content={content}
						/>
					))}
				</CardGroup>
			</PageContainer>
		</div>
	);
};

function filterContentList(
	contentList: Array<Content>,
	currentContent: ?Content,
): Array<Content> {
	return contentList
		.filter(content => {
			if (!currentContent) {
				return true;
			}
			return content.fields.slug !== currentContent.fields.slug;
		})
		.slice(0, 4);
}

export default ContentListing;
