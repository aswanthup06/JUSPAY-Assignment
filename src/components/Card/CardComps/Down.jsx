import * as React from "react";

const SvgDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"   
    className={props.className} 
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M14.346 3.64a.5.5 0 0 1 .015.706L11 7.846a.5.5 0 0 1-.722 0L8.24 5.722 5.823 8.239l1.722 1.653L2 11.5l1.38-5.606 1.722 1.653 2.777-2.893a.5.5 0 0 1 .722 0l2.039 2.124 3-3.124a.5.5 0 0 1 .706-.015"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgDown;
