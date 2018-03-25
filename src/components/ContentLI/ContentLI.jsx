// @flow

import classNames from 'classnames';
import * as React from 'react';

type ContenLIProps = {
	children: React.Node,
	className?: string,
	// ...wrapperProps
};

const ContentLI = ({ children, className, ...rest }: ContenLIProps) => (
	<li className={classNames('p-0 my-2 ml-2', className)} {...rest}>
		{children}
	</li>
);

export default ContentLI;
