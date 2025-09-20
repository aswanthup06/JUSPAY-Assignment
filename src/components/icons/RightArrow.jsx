import * as React from "react";
const SvgRightArrow = (props) => (
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
      fillRule="evenodd"
      d="M5.66 12.354a.47.47 0 0 1 0-.708l3.59-3.292a.47.47 0 0 0 0-.708L5.66 4.354a.47.47 0 0 1 0-.708.58.58 0 0 1 .77 0l3.591 3.293a1.414 1.414 0 0 1 0 2.122l-3.59 3.293a.58.58 0 0 1-.771 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRightArrow;
