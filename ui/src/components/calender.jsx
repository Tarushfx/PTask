import React from "react";
function getCalendarArray(props, dayArray) {
  const day = props.date.getDay();
  const date = props.date.getDate();
  const month = props.date.getMonth();
  const year = props.date.getFullYear();
  const startDay = new Date(new Date().setDate(0)).getDay();
  console.log(startDay);
  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
  console.log(daysInMonth(month, year));
  const daysInPrevMonth = daysInMonth(
    month === 0 ? 12 : month - 1,
    month === 0 ? year - 1 : year
  );
  for (let i = daysInPrevMonth - startDay; i < daysInPrevMonth; i++) {
    dayArray.push(i + 1);
  }
  for (let i = 0; i < daysInMonth(month, year); i++) {
    dayArray.push(i + 1);
  }
  const arrayLength = dayArray.length > 35 ? 42 : 35;
  const currentLength = dayArray.length;
  // console.log(arrayLength, dayArray.length, arrayLength - dayArray.length);
  for (let i = 0; i < arrayLength - currentLength; i++) {
    console.log(i + 1);
    dayArray.push(i + 1);
  }
  return dayArray;
}

const Calender = (props) => {
  let dayArray = [];
  dayArray = getCalendarArray(props, dayArray);

  console.log(dayArray);
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
        <div className="week-month">
          <button className=" button active">Week</button>
          <button className=" button button-month">Month</button>
        </div>
        <div className="month-change">
          <div className="current-month">{props.date.getMonth()}</div>
          <div className="current-year">{props.date.getFullYear()}</div>
        </div>
        <div className="week-month">
          <button className=" button button-weekends">Weekends</button>
          <button className=" button button-task active">Add task</button>
        </div>
      </div>
      <div className="calendar-wrapper anim-y">
        <div className="calendar">
          {daysArray.map((dayOfWeek) => (
            <div className="days">{dayOfWeek}</div>
          ))}
          {dayArray.map((day, index) => (
            <div className="day">{day}</div>
          ))}
          <div className="day project-market">
            1<div className="hover-title">Marketing</div>
            <div className="project-detail">Lorem ipsum</div>
            <div className="project-detail">Dolor Amet</div>
            <div className="popup-check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check-square"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          {/* 
            not-work

           */}
          <div className="day not-work">31</div>
          <div className="day project-market">
            1<div className="hover-title">Marketing</div>
            <div className="project-detail">Lorem ipsum</div>
            <div className="project-detail">Dolor Amet</div>
            <div className="popup-check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check-square"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">2</div>
          <div className="day project-design">
            3<div className="project-detail design">Lorem ipsum dolor amet</div>
          </div>
          <div className="day">4</div>
          <div className="day">5</div>
          <div className="day">6</div>
          <div className="day project-develop">
            7<div className="project-detail develop">Lorem ipsum</div>
          </div>
          <div className="day">8</div>
          <div className="day">9</div>
          <div className="day">10</div>
          <div className="day">11</div>
          <div className="day">12</div>
          <div className="day">13</div>
          <div className="day">14</div>
          <div className="day project-market">
            15
            <div className="hover-title">Marketing</div>
            <div className="project-detail">Lorem ipsum dolor</div>
            <div className="popup-check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check-square"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">16</div>
          <div className="day project-market">
            17
            <div className="hover-title">Marketing</div>
            <div className="project-detail">Lorem ipsum</div>
            <div className="project-detail">Dolor Amet Elit</div>
            <div className="popup-check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check-square"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">18</div>
          <div className="day">19</div>
          <div className="day">20</div>
          <div className="day">21</div>
          <div className="day">22</div>
          <div className="day project-finance">
            23
            <div className="hover-title">Management</div>
            <div className="project-detail finance">Lorem ipsum dolor</div>
            <div className="popup-check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check-square"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
          </div>
          <div className="day">24</div>
          <div className="day">25</div>
          <div className="day">26</div>
          <div className="day">27</div>
          <div className="day">28</div>
          <div className="day">29</div>
          <div className="day">30</div>
          <div className="day not-work">1</div>
          <div className="day not-work">2</div>
          <div className="day not-work">3</div>
          <div className="day not-work">4</div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
