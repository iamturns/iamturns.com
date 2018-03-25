// @flow

import classNames from 'classnames';
import * as React from 'react';

import ContentBlock from '../ContentBlock';

type ContentPullQuoteProps = {
	children: React.Node,
	className?: string,
	// ...wrapperProps
};

const ContentPullQuote = ({
	children,
	className,
	...rest
}: ContentPullQuoteProps) => (
	<ContentBlock
		tag="blockquote"
		className={classNames('my-12 ml-8 sm:ml-12 text-lg', className)}
		{...rest}
	>
		{children}
	</ContentBlock>
);

export default ContentPullQuote;
