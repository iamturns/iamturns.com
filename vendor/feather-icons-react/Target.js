import React from "react";

const Target = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-target"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={12} cy={12} r={10} />
		<circle cx={12} cy={12} r={6} />
		<circle cx={12} cy={12} r={2} />
	</svg>
);

export default Target;
