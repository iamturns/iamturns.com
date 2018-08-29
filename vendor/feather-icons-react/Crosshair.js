import React from "react";

const Crosshair = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-crosshair"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={12} cy={12} r={10} />
		<path d="M22 12h-4M6 12H2m10-6V2m0 20v-4" />
	</svg>
);

export default Crosshair;
