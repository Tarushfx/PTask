import React from "react";
import Calender from "./calender.jsx";
import Inbox from "./inbox.jsx";
import Mail from "./mail.jsx";

const MainContainer = (props) => {
  return (
    <div className="main-container">
      <Inbox user={props.user} />
      <Mail user={props.user} />
      <Calender date={new Date()} user={props.user} />
    </div>
  );
};

export default MainContainer;
