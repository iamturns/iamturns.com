import React from "react";

const Tablet = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-tablet"
    width="1em"
    height="1em"
    {...props}
  >
    <rect
      x={4}
      y={2}
      width={16}
      height={20}
      rx={2}
      ry={2}
      transform="rotate(180 12 12)"
    />
  </svg>
);

export default Tablet;
