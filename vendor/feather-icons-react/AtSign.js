import React from "react";

const AtSign = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-at-sign"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={12} cy={12} r={4} />
		<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
	</svg>
);

export default AtSign;
