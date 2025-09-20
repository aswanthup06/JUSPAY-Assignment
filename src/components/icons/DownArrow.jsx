import * as React from "react";
const SvgDownArrow = (props) => (
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
      d="M3.646 5.66a.47.47 0 0 1 .708 0l3.292 3.59a.47.47 0 0 0 .708 0l3.292-3.59a.47.47 0 0 1 .708 0 .58.58 0 0 1 0 .77L9.06 10.022a1.414 1.414 0 0 1-2.122 0l-3.293-3.59a.58.58 0 0 1 0-.771"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDownArrow;
