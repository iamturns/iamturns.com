// @flow

import classNames from 'classnames';
import * as React from 'react';

type ContentBlockProps = {
	children: React.Node,
	tag?: string, // div (default), h2, p, figure, etc
	className?: string,
};

const ContentBlock = ({
	children,
	className,
	tag: Tag = 'div',
	...rest
}: ContentBlockProps) => (
	<Tag className={classNames('my-4', className)} {...rest}>
		{children}
	</Tag>
);

export default ContentBlock;
