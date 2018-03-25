import React from "react";

const PlayCircle = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-play-circle"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M10 8l6 4-6 4V8z" />
  </svg>
);

export default PlayCircle;
