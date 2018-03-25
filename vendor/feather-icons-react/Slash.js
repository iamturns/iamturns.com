import React from "react";

const Slash = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-slash"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M4.93 4.93l14.14 14.14" />
  </svg>
);

export default Slash;
