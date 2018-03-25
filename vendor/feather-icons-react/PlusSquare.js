import React from "react";

const PlusSquare = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-plus-square"
    width="1em"
    height="1em"
    {...props}
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <path d="M12 8v8m-4-4h8" />
  </svg>
);

export default PlusSquare;
