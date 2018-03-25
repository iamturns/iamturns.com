import React from "react";

const GitBranch = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-git-branch"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M6 3v12" />
    <circle cx={18} cy={6} r={3} />
    <circle cx={6} cy={18} r={3} />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

export default GitBranch;
