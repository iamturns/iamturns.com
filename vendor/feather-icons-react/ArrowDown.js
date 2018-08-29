import React from "react";

const ArrowDown = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-arrow-down"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M12 5v14m7-7l-7 7-7-7" />
	</svg>
);

export default ArrowDown;
