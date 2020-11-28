import React, { useState } from "react";
import Calender from "./calender.jsx";
import Inbox from "./inbox.jsx";
import InboxQuote from "./inboxQuote.jsx";
import quotes from "../../public/quote.js";
import "../css/quote.css";

const MainContainer = (props) => {
  const [taskState, setTaskState] = useState({});
  const likesArray = [
    "motivation",
    "life",
    "positivity",
    "optimism",
    "inspiration",
  ];
  let quotetmp = quotes.filter((quote) => {
    let common = likesArray.filter((value) => quote.tags.includes(value));
    return common.legth !== 0;
  });
  let quote = quotetmp[Math.floor(Math.random() * quotetmp.length)];
  // console.log(quote);
  let taskArray = props.user.tasks ? props.user.tasks : [];
  // console.log(taskArray);
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
      <Inbox
        user={props.user}
        onMessageSelect={onMessageSelect}
        loadData={props.loadData}
      />
      <InboxQuote quote={quote} task={taskState} />

      <Calender date={new Date()} user={props.user} />
    </div>
  );
};

export default MainContainer;
