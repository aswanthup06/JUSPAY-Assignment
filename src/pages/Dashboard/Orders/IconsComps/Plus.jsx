import * as React from "react";
const SvgPlus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className={props.className}
    fill="currentColor"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      d="M10.625 4.375a.625.625 0 1 0-1.25 0v5h-5a.625.625 0 1 0 0 1.25h5v5a.625.625 0 1 0 1.25 0v-5h5a.625.625 0 1 0 0-1.25h-5z"
    />
  </svg>
);
export default SvgPlus;
