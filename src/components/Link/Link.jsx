// @flow

import LinkInternal from 'gatsby-link';
import * as React from 'react';

type LinkProps = {
	children: React.Node,
	to: string,
};

const Link = ({ children, to, ...rest }: LinkProps) => {
	const isExternal = to.startsWith('http') || to.startsWith('mailto');
	const Tag = isExternal ? LinkExternal : LinkInternal;

	return (
		<Tag to={to} target={isExternal ? '_blank' : ''} {...rest}>
			{children}
		</Tag>
	);
};

export default Link;

const LinkExternal = ({ children, to, ...rest }: LinkProps) => (
	<a href={to} {...rest}>
		{children}
	</a>
);
