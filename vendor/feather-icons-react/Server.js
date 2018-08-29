import React from "react";

const Server = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-server"
		width="1em"
		height="1em"
		{...props}
	>
		<rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
		<rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
	</svg>
);

export default Server;
