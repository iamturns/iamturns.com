import React from "react";

const Search = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-search"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={11} cy={11} r={8} />
		<path d="M21 21l-4.35-4.35" />
	</svg>
);

export default Search;
