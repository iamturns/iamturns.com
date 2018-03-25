import React from "react";

const Battery = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-battery"
    width="1em"
    height="1em"
    {...props}
  >
    <rect x={1} y={6} width={18} height={12} rx={2} ry={2} />
    <path d="M23 13v-2" />
  </svg>
);

export default Battery;
