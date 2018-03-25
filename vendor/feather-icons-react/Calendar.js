import React from "react";

const Calendar = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-calendar"
    width="1em"
    height="1em"
    {...props}
  >
    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
    <path d="M16 2v4M8 2v4m-5 4h18" />
  </svg>
);

export default Calendar;
