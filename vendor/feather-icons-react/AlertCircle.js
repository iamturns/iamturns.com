import React from "react";

const AlertCircle = props => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-alert-circle"
		width="1em"
		height="1em"
		{...props}
	>
		<circle cx={12} cy={12} r={10} />
		<path d="M12 8v4m0 4" />
	</svg>
);

export default AlertCircle;
