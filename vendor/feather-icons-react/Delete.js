import React from "react";

const Delete = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-delete"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3 5l-6 6m0-6l6 6" />
	</svg>
);

export default Delete;
