// @flow

import * as React from 'react';

import type { Content } from '../../types/Content';
import Author from '../Author';
import ContentHeader from '../ContentHeader';

type HeaderProps = {
	content: Content,
	imageCaption?: string,
};

const Header = ({ content, imageCaption }: HeaderProps) => (
	<div>
		<ContentHeader
			image={content.frontmatter.cover}
			title={content.frontmatter.title}
		/>
		{imageCaption}
		<HeaderAuthor content={content} />
	</div>
);

type HeaderAuthorProps = {
	content: Content,
};

const HeaderAuthor = ({ content }: HeaderAuthorProps) => {
	if (!content.frontmatter.dateUpdated) {
		return null;
	}
	return (
		<div className="my-6">
			<Author date={content.frontmatter.dateUpdated} />
		</div>
	);
};

export default Header;
