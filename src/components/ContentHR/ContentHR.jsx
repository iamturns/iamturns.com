// @flow

import classNames from 'classnames';
import * as React from 'react';

import ContentBlock from '../ContentBlock';

type ContentHRProps = {
	children?: React.Node,
	className?: string,
	// ...wrapperProps
};

const ContentHR = ({ children, className, ...rest }: ContentHRProps) => (
	<ContentBlock tag="hr" className={classNames('my-12', className)} {...rest}>
		{children}
	</ContentBlock>
);

export default ContentHR;
