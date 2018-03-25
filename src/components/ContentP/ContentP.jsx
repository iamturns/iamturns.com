// @flow

import * as React from 'react';

import ContentBlock from '../ContentBlock';

type ContentPProps = {
	children: React.Node,
	// ...wrapperProps
};

const ContentP = ({ children, ...rest }: ContentPProps) => (
	<ContentBlock tag="p" {...rest}>
		{children}
	</ContentBlock>
);

export default ContentP;
