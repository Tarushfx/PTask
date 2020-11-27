import React, { useState } from "react";
import Calender from "./calender.jsx";
import Inbox from "./inbox.jsx";
import Mail from "./mail.jsx";
import MsgDesc from "./msgDesc.jsx";
import Quote from "./quote.jsx";
import "../css/quote.css";
import InboxQuote from "./inboxQuote.jsx";

const MainContainer = (props) => {
  const [taskState, setTaskState] = useState({});
  const quote = {
    quote:
      "The bad news is time flies. The good news is you\u2019re the pilot.",
    by: "Michael Altshuler",
    tags: [],
  };
  let taskArray = props.user.tasks ? props.user.tasks : [];
  console.log(taskArray);
  let taskViewState = false;
  const onMessageSelect = ({ currentTarget: input }) => {
    console.log(input.id);
    if (!taskViewState) taskViewState = true;
    if (taskViewState) {
      const taskTarget = { ...taskArray[input.id] };
      $(".mail-contents").removeClass("hide");
      $("#quote-inbox-content").addClass("hide");
      console.log(taskTarget);
      setTaskState(taskTarget);
    }
  };
  return (
    <div className="main-container">
      <Inbox user={props.user} onMessageSelect={onMessageSelect} />
      <InboxQuote quote={quote} task={taskState} />
      <Calender date={new Date()} user={props.user} />
    </div>
  );
};

export default MainContainer;
