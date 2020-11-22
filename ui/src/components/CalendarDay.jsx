import React from "react";

const CalendarDay = (props) => {
  const data = (
    <React.Fragment>
      <div className="hover-title">{props.title}</div>
      <div className="project-detail">{props.description}</div>
      <div className="popup-check">{props.deadline}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-check-square"
      ></svg>
    </React.Fragment>
  );
  let classes = props.work ? "day project-market" : "day";
  if (!props.thisMonth) classes = classes + "not-work";
  return (
    <div className={classes}>
      {props.day}
      {props.work && data}
    </div>
  );
};

export default CalendarDay;
