import React from "react";

const Film = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-film"
		width="1em"
		height="1em"
		{...props}
	>
		<rect x={2} y={2} width={20} height={20} rx={2.18} ry={2.18} />
		<path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5m10 0h5M17 7h5" />
	</svg>
);

export default Film;
