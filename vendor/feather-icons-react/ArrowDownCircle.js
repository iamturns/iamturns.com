import React from "react";

const ArrowDownCircle = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-arrow-down-circle"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={12} cy={12} r={10} />
		<path d="M8 12l4 4 4-4m-4-4v8" />
	</svg>
);

export default ArrowDownCircle;
