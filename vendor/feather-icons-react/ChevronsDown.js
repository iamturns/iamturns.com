import React from "react";

const ChevronsDown = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-chevrons-down"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
	</svg>
);

export default ChevronsDown;
