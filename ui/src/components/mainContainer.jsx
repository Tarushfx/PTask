import React from "react";
import Calender from "./calender.jsx";
import Inbox from "./inbox.jsx";
import Mail from "./mail.jsx";

const MainContainer = (props) => {
  return (
    <div className="main-container">
      <Inbox />
      <Mail />
      <Calender date={new Date("2020-08-01")} />
    </div>
  );
};

export default MainContainer;
