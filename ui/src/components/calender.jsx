import React, { useState } from "react";
import CalenderDay from "./CalendarDay.jsx";

const Calender = (props) => {
  const [dateState, setDateState] = useState(new Date());
  console.log(dateState);

  function changeStyleButton({ currentTarget: button }) {
    button.classList.toggle("active");
  }

  function getCalendarArray(date) {
    const dayDate = new Date(date.getTime());
    const thisMonthArray = [];
    const prevMonthArray = [];
    const nextMonthArray = [];
    // const day = date.getDay();
    const month = dayDate.getMonth();
    const year = dayDate.getFullYear();
    const startDay = new Date(dayDate.setDate(1)).getDay();

    function daysInMonth(iMonth, iYear) {
      return 32 - new Date(iYear, iMonth, 32).getDate();
    }

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
    // return [prevMonthArray, thisMonthArray, nextMonthArray];
    let finalArray = [];
    prevMonthArray.map((day, index, array) => {
      finalArray.push({ day: day, thisMonth: false });
    });
    thisMonthArray.map((day, index, array) => {
      finalArray.push({ day: day, thisMonth: true });
    });
    nextMonthArray.map((day, index, array) => {
      finalArray.push({ day: day, thisMonth: false });
    });
    console.log(month, year, startDay, daysInPrevMonth);
    return finalArray;
  }

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

  const finalArray = getCalendarArray(dateState);

  let taskArray = props.user.tasks ? props.user.tasks : [];
  return (
    <div className="calendar-container">
      <div className="calender-tab anim-y">
        <div className="month-change">
          <div className="current-month">
            {monthNames[dateState.getMonth()]}
          </div>
          <div className="current-year">{dateState.getFullYear()}</div>
        </div>
        <div className="week-month">
          <button
            className="button button-task"
            onClick={() =>
              setDateState(
                new Date(
                  dateState.setFullYear(
                    dateState.getMonth() === 0
                      ? dateState.getFullYear() - 1
                      : dateState.getFullYear(),
                    dateState.getMonth() === 0 ? 11 : dateState.getMonth() - 1,
                    1
                  )
                )
              )
            }
            onMouseEnter={changeStyleButton}
            onMouseLeave={changeStyleButton}
            id="preMonthButton"
          >
            <i className="fas fa-angle-left"></i>
            Previous Month
          </button>
          <button
            className="button button-task"
            onMouseEnter={changeStyleButton}
            onMouseLeave={changeStyleButton}
            id="addTaskButton"
            onClick={() => {
              setDateState(new Date());
            }}
          >
            Reset Month
          </button>
          <button
            className="button button-task"
            onMouseEnter={changeStyleButton}
            onMouseLeave={changeStyleButton}
            onClick={() =>
              setDateState(
                new Date(
                  dateState.setFullYear(
                    dateState.getMonth() === 11
                      ? dateState.getFullYear() + 1
                      : dateState.getFullYear(),
                    dateState.getMonth() === 11 ? 0 : dateState.getMonth() + 1,
                    1
                  )
                )
              )
            }
            id="nextMonthButton"
          >
            Next Month
            <i className="fas fa-angle-right"></i>
          </button>
          {/* use this button */}

          <button
            className="button button-task"
            data-toggle="modal"
            data-target="#taskModal"
            onMouseEnter={changeStyleButton}
            onMouseLeave={changeStyleButton}
            id="addTaskButton"
          >
            Add task
          </button>

          {/* use this button */}
        </div>
      </div>
      <div className="calendar-wrapper anim-y">
        <div className="calendar">
          {daysArray.map((dayOfWeek, index) => (
            <div className="days" id={daysArray[index]} key={daysArray[index]}>
              {dayOfWeek}
            </div>
          ))}
          {finalArray.map((day, index) => {
            let tasksOnADay = taskArray.filter((task) => {
              let date = new Date(Date.parse(task.deadline)).getDate();
              let month = new Date(Date.parse(task.deadline)).getMonth();
              return (
                date === day.day &&
                day.thisMonth == true &&
                month === dateState.getMonth()
              );
            });
            return (
              <CalenderDay day={day} key={index} tasksOnADay={tasksOnADay} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calender;
