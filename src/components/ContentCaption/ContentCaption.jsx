// @flow

import classNames from 'classnames';
import * as React from 'react';

type ContentCaptionProps = {
	children: React.Node,
	tag?: string, // div (default), figcaption, etc
	className?: string,
	// ...wrapperProps
};

const ContentCaption = ({
	children,
	className,
	tag: Tag = 'div',
	...rest
}: ContentCaptionProps) => (
	<Tag
		className={classNames(
			'my-2 text-sm text-center text-turtle-darker',
			className,
		)}
		{...rest}
	>
		{children}
	</Tag>
);

export default ContentCaption;
