import React from "react";

const ArrowLeftCircle = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-left-circle"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8l-4 4 4 4m4-4H8" />
  </svg>
);

export default ArrowLeftCircle;
