import * as React from "react";
const SvgDot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className={props.className}
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillOpacity={0.2}
      d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgDot;
