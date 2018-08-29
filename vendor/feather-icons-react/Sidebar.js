import React from "react";

const Sidebar = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-sidebar"
		width="1em"
		height="1em"
		{...props}
	>
		<rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
		<path d="M9 3v18" />
	</svg>
);

export default Sidebar;
