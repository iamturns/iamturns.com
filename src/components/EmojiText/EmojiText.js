// @flow

import classNames from "classnames";
import * as React from "react";

import Emoji from "../Emoji";

type EmojiTextProps = {
	children: React.Node,
	emoji: string,
	emojiLabel?: string,
	tag?: string, // default = div
	className?: string,
	// ...wrapperProps
};

const EmojiText = ({
	children,
	emoji,
	emojiLabel,
	tag: Tag = "div",
	className,
	...rest
}: EmojiTextProps) => (
	<Tag className={classNames("flex items-center my-4", className)} {...rest}>
		<span>
			<Emoji className="text-xl mt-1 mr-4" label={emojiLabel}>
				{emoji}
			</Emoji>
		</span>
		<span>{children}</span>
	</Tag>
);

export default EmojiText;
