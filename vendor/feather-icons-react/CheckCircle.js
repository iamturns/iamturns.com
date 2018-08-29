import React from "react";

const CheckCircle = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-check-circle"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
		<path d="M22 4L12 14.01l-3-3" />
	</svg>
);

export default CheckCircle;
