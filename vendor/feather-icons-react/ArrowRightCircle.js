import React from "react";

const ArrowRightCircle = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-right-circle"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 16l4-4-4-4m-4 4h8" />
  </svg>
);

export default ArrowRightCircle;
