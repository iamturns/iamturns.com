// @flow

import * as React from "react";

type EmojiProps = {
	children: React.Node,
	label?: string,
	// ...wrapperProps
};

const Emoji = ({ label = "", children, ...wrapperProps }: EmojiProps) => (
	<span role="img" aria-label={label} {...wrapperProps}>
		{children}
	</span>
);

export default Emoji;
