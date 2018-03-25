// @flow

import classNames from 'classnames';
import * as React from 'react';

import ContentBlock from '../ContentBlock';

type ContentH2Props = {
	children: React.Node,
	className?: string,
	// ...wrapperProps
};

const ContentH2 = ({ children, className, ...rest }: ContentH2Props) => (
	<ContentBlock
		tag="h2"
		className={classNames('mt-12 text-2xl', className)}
		{...rest}
	>
		{children}
	</ContentBlock>
);

export default ContentH2;
