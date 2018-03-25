// @flow

import classNames from 'classnames';
import * as React from 'react';

import ContentBlock from '../ContentBlock';

type ContentSubtitleProps = {
	children: React.Node,
	className?: string,
	// ...wrapperProps
};

const ContentSubtitle = ({
	children,
	className,
	...rest
}: ContentSubtitleProps) => (
	<ContentBlock
		className={classNames(
			'mt-8 text-lg font-sans text-turtle-darkest',
			className,
		)}
		{...rest}
	>
		{children}
	</ContentBlock>
);

export default ContentSubtitle;
