import React from "react";

const Briefcase = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-briefcase"
		width="1em"
		height="1em"
		{...props}
	>
		<rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
		<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
	</svg>
);

export default Briefcase;
