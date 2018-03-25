// @flow

import classNames from 'classnames';
import * as React from 'react';

import type { Article } from '../../types/Article';
import type { Result } from '../../types/Result';
import { getResultAsArray } from '../../utils/result';
import CardArticle from '../CardArticle';
import CardGroup from '../CardGroup';
import HeadingBrick from '../HeadingBrick';
import PageContainer from '../PageContainer';

type ArticleListingProps = {
	articles: Result<Article> | Array<Article>,
	currentArticle?: Article,
	nerdsOnly?: boolean, // default = false
	className?: string,
	// ...wrapperProps
};

const ArticleListing = ({
	articles,
	currentArticle,
	nerdsOnly = false,
	className,
	...wrapperProps
}: ArticleListingProps) => {
	const articlesToList = getArticlesToList(articles, currentArticle);
	if (articlesToList.length === 0) {
		return null;
	}
	return (
		<div
			className={classNames(
				'py-12',
				nerdsOnly ? 'bg-turtle-white bg-pattern' : '',
				className,
			)}
			{...wrapperProps}
		>
			<PageContainer>
				{nerdsOnly && (
					<HeadingBrick className="mb-12">Nerds Only</HeadingBrick>
				)}
				<CardGroup>
					{articlesToList.map(article => (
						<CardArticle
							key={article.fields.slug}
							article={article}
						/>
					))}
				</CardGroup>
			</PageContainer>
		</div>
	);
};

function getArticlesToList(
	articles: Result<Article> | Array<Article>,
	currentArticles: ?Article,
): Array<Article> {
	return getResultAsArray(articles)
		.filter(article => {
			if (!currentArticles) {
				return true;
			}
			return article.fields.slug !== currentArticles.fields.slug;
		})
		.slice(0, 4);
}

export default ArticleListing;
