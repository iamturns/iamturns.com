import React from "react";

const Aperture = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-aperture"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={12} cy={12} r={10} />
		<path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
	</svg>
);

export default Aperture;
