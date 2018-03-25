import React from "react";

const Codepen = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-codepen"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zm0 20v-6.5" />
    <path d="M22 8.5l-10 7-10-7" />
    <path d="M2 15.5l10-7 10 7M12 2v6.5" />
  </svg>
);

export default Codepen;
