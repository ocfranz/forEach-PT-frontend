import React from "react";
const CornerDownRight = ({ size = 30, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 9l6 6-6 6" />
    <path d="M4 4v7a4 4 0 0 0 4 4h11" />
  </svg>
);
export default CornerDownRight;
