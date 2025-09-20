import * as React from "react";
const SvgSide = (props) => (
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
      d="M6.875 3.75v12.5h-3.75a.625.625 0 0 1-.625-.625V4.375a.625.625 0 0 1 .625-.625z"
    />
    <path d="M16.875 3.125H3.125a1.25 1.25 0 0 0-1.25 1.25v11.25a1.25 1.25 0 0 0 1.25 1.25h13.75a1.25 1.25 0 0 0 1.25-1.25V4.375a1.25 1.25 0 0 0-1.25-1.25m-13.75 8.75h1.25a.625.625 0 1 0 0-1.25h-1.25v-1.25h1.25a.625.625 0 0 0 0-1.25h-1.25v-1.25h1.25a.625.625 0 0 0 0-1.25h-1.25v-1.25H6.25v11.25H3.125zm13.75 3.75H7.5V4.375h9.375z" />
  </svg>
);
export default SvgSide;
