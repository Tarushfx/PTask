import React from "react";

const CalendarDay = (props) => {
  let tasksOnADay = props.tasksOnADay;
  let title = [],
    state = [],
    created = [],
    description = [],
    deadline = [];
  tasksOnADay.map((task) => {
    title.push(task.title);
    state.push(task.state);
    created.push(task.created);
    deadline.push(task.deadline);
    description.push(task.description);
  });
  // console.log(title);
  // console.log(title.map((t) => <div className="project-detail">{t}</div>));
  const data = (
    <React.Fragment>
      {title.map((t, index) => (
        <React.Fragment key={index}>
          <div className="project-detail">{t}</div>
          <div className="hover-title">{state[index]}</div>
        </React.Fragment>
      ))}
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
  let clasArray = ["project-market", "project-finance"];
  let classes =
    tasksOnADay.length !== 0
      ? clasArray[Math.floor(Math.random() * clasArray.length)]
      : "";
  if (!props.day.thisMonth) classes += "not-work";
  return (
    <div className={`day ${classes}`}>
      <span className="text-center">{props.day.day}</span>
      {tasksOnADay.length !== 0 && data}
    </div>
  );
};

export default CalendarDay;
