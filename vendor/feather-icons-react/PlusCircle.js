import React from "react";

const PlusCircle = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-plus-circle"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={12} cy={12} r={10} />
		<path d="M12 8v8m-4-4h8" />
	</svg>
);

export default PlusCircle;
