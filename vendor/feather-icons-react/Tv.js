import React from "react";

const Tv = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-tv"
    width="1em"
    height="1em"
    {...props}
  >
    <rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
    <path d="M17 2l-5 5-5-5" />
  </svg>
);

export default Tv;
