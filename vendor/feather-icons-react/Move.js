import React from "react";

const Move = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-move"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M5 9l-3 3 3 3M9 5l3-3 3 3m0 14l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
  </svg>
);

export default Move;
