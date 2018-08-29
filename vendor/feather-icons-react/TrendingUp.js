import React from "react";

const TrendingUp = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-trending-up"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M23 6l-9.5 9.5-5-5L1 18" />
		<path d="M17 6h6v6" />
	</svg>
);

export default TrendingUp;
