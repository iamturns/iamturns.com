import React from "react";

const RotateCw = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-rotate-cw"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M23 4v6h-6" />
		<path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
	</svg>
);

export default RotateCw;
