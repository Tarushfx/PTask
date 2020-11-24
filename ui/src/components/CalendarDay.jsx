import React from "react";

const CalendarDay = (props) => {
  let tasksOnADay = props.tasksOnADay;
  let title = [];
  tasksOnADay.map((task) => {
    title.push(task.title);
  });
  console.log(title.join("<br>"));
  console.log(title.map((t) => <div className="project-detail">{t}</div>));
  const data = (
    <React.Fragment>
      {/* <div className="hover-title">xyz</div> */}
      {title.map((t) => {
        <div className="project-detail">{t}</div>;
      })}
      {/* <div className="project-detail">{title}</div> */}
      <div className="popup-check">{props.created}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-check-square"
      />
    </React.Fragment>
  );

  let classes = tasksOnADay.length !== 0 ? "project-market" : "";
  if (!props.day.thisMonth) classes += "not-work";
  return (
    <div className={`day ${classes}`}>
      <span className="text-center">{props.day.day}</span>
      {tasksOnADay.length !== 0 && data}
    </div>
  );
};

export default CalendarDay;
