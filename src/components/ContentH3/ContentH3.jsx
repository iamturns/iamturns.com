// @flow

import classNames from 'classnames';
import * as React from 'react';

import ContentBlock from '../ContentBlock';

type ContentH3Props = {
	children: React.Node,
	className?: string,
	// ...wrapperProps
};

const ContentH3 = ({ children, className, ...rest }: ContentH3Props) => (
	<ContentBlock
		tag="h3"
		className={classNames('mt-8 text-xl', className)}
		{...rest}
	>
		{children}
	</ContentBlock>
);

export default ContentH3;
