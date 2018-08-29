import React from "react";

const ChevronDown = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-chevron-down"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M6 9l6 6 6-6" />
	</svg>
);

export default ChevronDown;
