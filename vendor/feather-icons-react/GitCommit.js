import React from "react";

const GitCommit = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-git-commit"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={12} r={4} />
    <path d="M1.05 12H7m10.01 0h5.95" />
  </svg>
);

export default GitCommit;
