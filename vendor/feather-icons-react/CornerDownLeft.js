import React from "react";

const CornerDownLeft = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-corner-down-left"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M9 10l-5 5 5 5" />
		<path d="M20 4v7a4 4 0 0 1-4 4H4" />
	</svg>
);

export default CornerDownLeft;
