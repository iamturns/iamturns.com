// @flow

import classNames from 'classnames';
import * as React from 'react';

import ContentBlock from '../ContentBlock';

type ContentFigureProps = {
	children: React.Node,
	className?: string,
	// ...wrapperProps
};

const ContentFigure = ({
	children,
	className,
	...rest
}: ContentFigureProps) => (
	<ContentBlock
		tag="figure"
		className={classNames('my-8', className)}
		{...rest}
	>
		{children}
	</ContentBlock>
);

export default ContentFigure;
