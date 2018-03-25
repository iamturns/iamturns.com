import React from "react";

const Anchor = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-anchor"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={5} r={3} />
    <path d="M12 22V8m-7 4H2a10 10 0 0 0 20 0h-3" />
  </svg>
);

export default Anchor;
