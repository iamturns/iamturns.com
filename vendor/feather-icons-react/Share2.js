import React from "react";

const Share2 = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-share-2"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={18} cy={5} r={3} />
		<circle cx={6} cy={12} r={3} />
		<circle cx={18} cy={19} r={3} />
		<path d="M8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98" />
	</svg>
);

export default Share2;
