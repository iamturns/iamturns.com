// @flow

import classNames from 'classnames';
import * as React from 'react';

import ContentBlock from '../ContentBlock';

type ContentQuoteProps = {
	children: React.Node,
	className?: string,
	// ...wrapperProps
};

const ContentQuote = ({ children, className, ...rest }: ContentQuoteProps) => (
	<ContentBlock
		tag="blockquote"
		className={classNames(
			'p-2 sm:p-4',
			'border-l-4 border-turtle',
			'italic font-serif',
			className,
		)}
		{...rest}
	>
		{children}
	</ContentBlock>
);

export default ContentQuote;
