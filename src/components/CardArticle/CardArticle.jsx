// @flow

import * as React from 'react';

import type { Article } from '../../types/Article';
import Card from '../Card';

type CardArticleProps = {
	article: Article,
};

const CardArticle = (props: CardArticleProps) => (
	<Card
		linkTo={props.article.fields.slug}
		title={props.article.frontmatter.title}
		image={props.article.frontmatter.cover}
		text={props.article.frontmatter.description}
	/>
);

export default CardArticle;
