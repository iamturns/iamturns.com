import React from "react";

const Smartphone = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-smartphone"
		width="1em"
		height="1em"
		{...props}
	>
		<rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
	</svg>
);

export default Smartphone;
