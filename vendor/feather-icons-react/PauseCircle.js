import React from "react";

const PauseCircle = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-pause-circle"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={12} cy={12} r={10} />
		<path d="M10 15V9m4 6V9" />
	</svg>
);

export default PauseCircle;
