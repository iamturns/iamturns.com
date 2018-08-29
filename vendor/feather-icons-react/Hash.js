import React from "react";

const Hash = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-hash"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M4 9h16M4 15h16M10 3L8 21m8-18l-2 18" />
	</svg>
);

export default Hash;
