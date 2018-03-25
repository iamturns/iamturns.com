import React from "react";

const BarChart = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-bar-chart"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12 20V10m6 10V4M6 20v-4" />
  </svg>
);

export default BarChart;
