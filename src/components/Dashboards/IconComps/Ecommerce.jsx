import * as React from "react";
const SvgEcommerce = (props) => (
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
      d="M17.5 4.375V6.25h-15V4.375a.625.625 0 0 1 .625-.625h13.75a.625.625 0 0 1 .625.625"
    />
    <path d="M16.875 3.125H3.125a1.25 1.25 0 0 0-1.25 1.25v11.25a1.25 1.25 0 0 0 1.25 1.25h13.75a1.25 1.25 0 0 0 1.25-1.25V4.375a1.25 1.25 0 0 0-1.25-1.25m0 1.25v1.25H3.125v-1.25zm0 11.25H3.125v-8.75h13.75zM13.75 8.75a3.75 3.75 0 0 1-7.5 0 .625.625 0 0 1 1.25 0 2.5 2.5 0 0 0 5 0 .625.625 0 1 1 1.25 0" />
  </svg>
);
export default SvgEcommerce;
