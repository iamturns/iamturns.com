import React from "react";

const Crop = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-crop"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
		<path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
	</svg>
);

export default Crop;
