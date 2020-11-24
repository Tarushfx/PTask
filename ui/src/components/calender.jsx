import React from "react";
import CalenderDay from "./CalendarDay.jsx";

function getCalendarArray(props) {
  const thisMonthArray = [];
  const prevMonthArray = [];
  const nextMonthArray = [];
  const day = props.date.getDay();
  const date = props.date.getDate();
  const month = props.date.getMonth();
  const year = props.date.getFullYear();
  const startDay = new Date(new Date().setDate(0)).getDay();
  // console.log(startDay);
  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
  // console.log(daysInMonth(month, year));
  const daysInPrevMonth = daysInMonth(
    month === 0 ? 12 : month - 1,
    month === 0 ? year - 1 : year
  );
  for (let i = daysInPrevMonth - startDay; i < daysInPrevMonth; i++) {
    prevMonthArray.push(i + 1);
  }
  for (let i = 0; i < daysInMonth(month, year); i++) {
    thisMonthArray.push(i + 1);
  }
  const currentLength = thisMonthArray.length + prevMonthArray.length;
  const arrayLength = currentLength > 35 ? 42 : 35;

  for (let i = 0; i < arrayLength - currentLength; i++) {
    nextMonthArray.push(i + 1);
  }
  return [prevMonthArray, thisMonthArray, nextMonthArray];
}

const Calender = (props) => {
  function changeStyleButtonActive() {
    const element = document.getElementById("addTaskButton");
    element.classList.add("active");
  }

  function changeStyleButtonUnactive() {
    const element = document.getElementById("addTaskButton");
    element.classList.remove("active");
  }

  const array = getCalendarArray(props);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="calendar-container">
      <div className="calender-tab anim-y">
        <div className="month-change">
          <div className="current-month">
            {monthNames[props.date.getMonth()]}
          </div>
          <div className="current-year">{props.date.getFullYear()}</div>
        </div>
        <div className="week-month">
          <button
            className=" button button-task"
            data-toggle="modal"
            data-target="#taskModal"
            onMouseEnter={changeStyleButtonActive}
            onMouseLeave={changeStyleButtonUnactive}
            id="addTaskButton"
          >
            Add task
          </button>
          {/* use this button */}
        </div>
      </div>
      <div className="calendar-wrapper anim-y">
        <div className="calendar">
          {daysArray.map((dayOfWeek) => (
            <div className="days">{dayOfWeek}</div>
          ))}
          {array[0].map((day, index, array) => (
            // db read
            <CalenderDay day={day} work={false} thisMonth={false} />
          ))}
          {array[1].map((day, index, array) => (
            // db read
            <CalenderDay day={day} work thisMonth />
          ))}
          {array[2].map((day, index, array) => (
            // db read
            <CalenderDay day={day} work={false} thisMonth={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calender;
