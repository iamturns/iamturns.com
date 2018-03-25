// @flow

import * as React from 'react';

import type { Article } from '../../types/Article';
import Author from '../Author';
import ContentTitle from '../ContentTitle';

type LayoutArticleHeaderProps = {
	article: Article,
	imageCaption?: string,
};

const LayoutArticleHeader = ({
	article,
	imageCaption,
}: LayoutArticleHeaderProps) => (
	<div>
		<ContentTitle
			image={article.frontmatter.cover}
			title={article.frontmatter.title}
		/>
		{imageCaption}
		<div className="my-6">
			<Author date={article.frontmatter.dateUpdated} />
		</div>
	</div>
);

export default LayoutArticleHeader;
