import * as React from "react";
const SvgProjects = (props) => (
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
      d="M10 6.25 7.666 8a.63.63 0 0 1-.375.125H2.5V5a.625.625 0 0 1 .625-.625h4.166c.136 0 .267.044.375.125z"
    />
    <path
    
      d="M16.875 5.625h-6.666L8.04 4a1.26 1.26 0 0 0-.75-.25H3.125A1.25 1.25 0 0 0 1.875 5v10.625a1.25 1.25 0 0 0 1.25 1.25h13.75a1.25 1.25 0 0 0 1.25-1.25v-8.75a1.25 1.25 0 0 0-1.25-1.25M3.125 5h4.166L8.96 6.25 7.29 7.5H3.125zm13.75 10.625H3.125V8.75h4.166c.27 0 .534-.088.75-.25l2.168-1.625h6.666z"
    />
  </svg>
);
export default SvgProjects;
