import * as React from "react";
const SvgSocial = (props) => (
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
      d="M18.125 11.875v5.156a.47.47 0 0 1-.469.469H12.5a5.625 5.625 0 0 1-5.305-3.75H7.5a5.625 5.625 0 0 0 5.307-7.49 5.625 5.625 0 0 1 5.318 5.615"
    />
    <path d="M13.248 5.671A6.25 6.25 0 0 0 1.25 8.125v5.156a1.094 1.094 0 0 0 1.094 1.094H6.77a6.26 6.26 0 0 0 5.729 3.75h5.156a1.094 1.094 0 0 0 1.094-1.094v-5.156a6.25 6.25 0 0 0-5.502-6.204M2.5 8.125a5 5 0 1 1 5 5h-5zm15 8.75h-5a5.01 5.01 0 0 1-4.35-2.534 6.244 6.244 0 0 0 5.498-7.332 5 5 0 0 1 3.852 4.866z" />
  </svg>
);
export default SvgSocial;
