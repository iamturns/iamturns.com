import React from "react";

const Filter = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-filter"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
	</svg>
);

export default Filter;
