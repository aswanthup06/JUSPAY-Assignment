import * as React from "react";
const SvgCalendar = (props) => (
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
      d="M13 2h-1.5v-.5a.5.5 0 0 0-1 0V2h-5v-.5a.5.5 0 1 0-1 0V2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M4.5 3v.5a.5.5 0 1 0 1 0V3h5v.5a.5.5 0 0 0 1 0V3H13v2H3V3zM13 13H3V6h10z"
    />
  </svg>
);
export default SvgCalendar;
