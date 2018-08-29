import React from "react";

const Scissors = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-scissors"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={6} cy={6} r={3} />
		<circle cx={6} cy={18} r={3} />
		<path d="M20 4L8.12 15.88m6.35-1.4L20 20M8.12 8.12L12 12" />
	</svg>
);

export default Scissors;
