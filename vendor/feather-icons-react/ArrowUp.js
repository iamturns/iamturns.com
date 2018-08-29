import React from "react";

const ArrowUp = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-arrow-up"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M12 19V5m-7 7l7-7 7 7" />
	</svg>
);

export default ArrowUp;
