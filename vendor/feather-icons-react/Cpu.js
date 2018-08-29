import React from "react";

const Cpu = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-cpu"
		width="1em"
		height="1em"
		{...props}
	>
		<rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
		<path d="M9 9h6v6H9zm0-8v3m6-3v3M9 20v3m6-3v3m5-14h3m-3 5h3M1 9h3m-3 5h3" />
	</svg>
);

export default Cpu;
