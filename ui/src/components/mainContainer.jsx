import React, { useState } from "react";
import Calender from "./calender.jsx";
import Inbox from "./inbox.jsx";
import InboxQuote from "./inboxQuote.jsx";
import "../css/quote.css";
import MessageArea from "./messageArea.jsx";
import { Chat } from "./chat.jsx";
const MainContainer = (props) => {
  const [taskState, setTaskState] = useState({});

  // let taskArray = props.user.tasks ? props.user.tasks : [];

  const getCompleted = () => {
    let user = props.user;
    let tasks = user.tasks ? user.tasks : [];
    return tasks.filter((task) => task.state === "Completed");
  };
  const getIncomplete = () => {
    let user = props.user;
    let tasks = user.tasks ? user.tasks : [];
    return tasks.filter((task) => task.state === "InProgress");
  };
  // console.log(props.user.tasks, taskArray);
  let filterArray = props.taskFilter == true ? getCompleted() : getIncomplete();
  console.log(filterArray);
  let taskViewState = false;
  let buttonID = "";
  let onMessageSelect = ({ currentTarget: input }) => {
    console.log(input.id.split("-")[1]);
    if (!taskViewState) taskViewState = true;
    if (taskViewState) {
      const taskTarget = { ...filterArray[input.id.split("-")[1]] };
      setTaskState(taskTarget);
      $(".mail-contents").removeClass("hide");
      $("#quote-inbox-content").addClass("hide");
      $(".message-area").addClass("hide");
      console.log(taskTarget);
      buttonID = input.parentElement.children[0].id.split("-")[1];
      console.log(buttonID);
    }
  };
  return (
    <div className="main-container">
      <Inbox
        user={props.user}
        onMessageSelect={onMessageSelect}
        loadData={props.loadData}
        navbarTaskChange={props.navbarTaskChange}
        filterArray={filterArray}
        // handleChangeCheckbox={handleChangeCheckbox}
      />
      <Chat user={props.user} />
      <InboxQuote
        loadData={props.loadData}
        quote={props.quote}
        task={taskState}
        user={props.user}
        buttonID={buttonID}
      />

      <Calender date={new Date()} user={props.user} />
    </div>
  );
};

export default MainContainer;
