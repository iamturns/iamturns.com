// @flow

import * as React from "react";

type CardGroupProps = {
	children: React.Node,
};

const CardGroup = (props: CardGroupProps) => (
	<div className="flex flex-wrap justify-center -mb-12 md:-m-4">{props.children}</div>
);

export default CardGroup;
