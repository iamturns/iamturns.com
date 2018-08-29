import React from "react";

const ChevronsUp = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-chevrons-up"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M17 11l-5-5-5 5m10 7l-5-5-5 5" />
	</svg>
);

export default ChevronsUp;
