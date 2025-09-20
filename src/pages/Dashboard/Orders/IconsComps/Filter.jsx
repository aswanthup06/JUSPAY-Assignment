import * as React from "react";
const SvgFilter = (props) => (
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
     
      d="M15.625 10a.624.624 0 0 1-.625.625H5a.625.625 0 1 1 0-1.25h10a.625.625 0 0 1 .625.625m2.5-4.375H1.875a.625.625 0 0 0 0 1.25h16.25a.625.625 0 1 0 0-1.25m-6.25 7.5h-3.75a.625.625 0 1 0 0 1.25h3.75a.624.624 0 1 0 0-1.25"
    />
  </svg>
);
export default SvgFilter;
