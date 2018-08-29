import React from "react";

const Clock = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-clock"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={12} cy={12} r={10} />
		<path d="M12 6v6l4 2" />
	</svg>
);

export default Clock;
