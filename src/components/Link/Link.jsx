// @flow

import LinkInternal from 'gatsby-link';
import * as React from 'react';

import { isUrlExternal } from '../../utils/url';

type LinkProps = {
	to: string,
	children?: React.Node,
};

const Link = ({ children, to, ...rest }: LinkProps) => {
	const isExternal = isUrlExternal(to);
	const Tag = isExternal ? LinkExternal : LinkInternal;

	return (
		<Tag to={to} target={isExternal ? '_blank' : ''} {...rest}>
			{children || to}
		</Tag>
	);
};

export default Link;

const LinkExternal = ({ children, to, ...rest }: LinkProps) => (
	<a href={to} {...rest}>
		{children}
	</a>
);
