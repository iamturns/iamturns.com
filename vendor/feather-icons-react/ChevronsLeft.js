import React from "react";

const ChevronsLeft = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-chevrons-left"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M11 17l-5-5 5-5m7 10l-5-5 5-5" />
	</svg>
);

export default ChevronsLeft;
