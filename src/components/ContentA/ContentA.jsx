// @flow

import classNames from 'classnames';
import * as React from 'react';

import Link from '../Link';

type ContentAProps = {
	children: React.Node, // Link text
	to: string,
	className?: string,
};

const ContentA = ({ children, className, ...rest }: ContentAProps) => (
	<Link
		className={classNames(
			'link-border border-dotted visited-turtle-dark',
			className,
		)}
		{...rest}
	>
		{children}
	</Link>
);

export default ContentA;
