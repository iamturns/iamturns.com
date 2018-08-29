import React from "react";

const Clipboard = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-clipboard"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
		<rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
	</svg>
);

export default Clipboard;
