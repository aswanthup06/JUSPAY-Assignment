import * as React from "react";
const SvgHistory = (props) => (
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
      fillOpacity={0.1}
      d="M16.875 10a6.875 6.875 0 1 1-13.75 0 6.875 6.875 0 0 1 13.75 0"
    />
    <path d="M10.625 6.25v3.396l2.822 1.693a.626.626 0 0 1-.644 1.072l-3.125-1.875A.63.63 0 0 1 9.375 10V6.25a.625.625 0 0 1 1.25 0M10 2.5a7.46 7.46 0 0 0-5.306 2.2 32 32 0 0 0-1.569 1.706V5a.625.625 0 0 0-1.25 0v3.125a.625.625 0 0 0 .625.625h3.125a.625.625 0 1 0 0-1.25H3.828a34 34 0 0 1 1.75-1.92 6.25 6.25 0 1 1 .129 8.965.626.626 0 0 0-.86.91A7.5 7.5 0 1 0 10 2.5" />
  </svg>
);
export default SvgHistory;
