// @flow

import classNames from 'classnames';
import * as React from 'react';

import ContentBlock from '../ContentBlock';

type ContentULProps = {
	children: React.Node,
	reset?: boolean,
	className?: string,
	// ...wrapperProps
};

const ContentUL = ({
	children,
	reset = false,
	className,
	...rest
}: ContentULProps) => (
	<ContentBlock
		tag="ul"
		className={classNames(reset ? 'list-reset' : 'pl-4', 'my-4', className)}
		{...rest}
	>
		{children}
	</ContentBlock>
);

export default ContentUL;
