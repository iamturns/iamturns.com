// @flow

import classNames from "classnames";
import * as React from "react";

import IconClock from "../../../vendor/feather-icons-react/Clock";
import DateTime from "../DateTime";

type LastUpdatedProps = {
	dateTime: string, // ISO 8601
	prefix?: string, // default = 'Last updated: '
	tag?: string, // default = 'div'
	className?: string,
	// ...wrapperProps
};

const LastUpdated = ({
	dateTime,
	prefix = "Last updated: ",
	tag: Tag = "div",
	className,
	...wrapperProps
}: LastUpdatedProps) => (
	<Tag className={classNames("flex items-center", className)} {...wrapperProps}>
		<IconClock className="w-4 h-4 mr-1" />
		<div>
			{prefix}
			<DateTime dateTime={dateTime} />
		</div>
	</Tag>
);

export default LastUpdated;
