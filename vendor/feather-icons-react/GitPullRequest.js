import React from "react";

const GitPullRequest = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-git-pull-request"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={18} cy={18} r={3} />
    <circle cx={6} cy={6} r={3} />
    <path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12" />
  </svg>
);

export default GitPullRequest;
