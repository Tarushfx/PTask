import React from "react";
import authservice from "../../services/authservice.js";
import jwt from "jsonwebtoken";
import graphQLFetch from "../graphQLFetch";

const MsgItem = (props) => {
  async function removeTask() {
    $(".msg, .selected-bg, .anim-y").fadeOut(10000);
    const query = `mutation removeTask($task: TaskRemove!) {
      TaskRemove(task: $task)
    }`;
    const task = {
      _id: jwt.decode(authservice.getToken())._id,
      task_id: props._id,
    };

    const data = await graphQLFetch(query, { task: task });
    await props.loadData();
    // $(".msg, .selected-bg, .anim-y").addClass("close-button-slide");
    $("#quote-inbox-content").removeClass("hide");
    $(".mail-contents").addClass("hide");
  }

  async function handleChangeCheckbox() {
    const id = "mail-" + String(props._id);
    const checkbox = document.getElementById(id);
    if (checkbox.checked == true) {
      await updateTask(1);
    } else {
      await updateTask(0);
    }
    // on completion show quote
    $("#quote-inbox-content").removeClass("hide");
    $(".mail-contents").addClass("hide");
  }
  async function updateTask(status) {
    const query = `mutation updateTask($task: TaskUpdate!){
      TaskStateUpdate(task:$task)
    }`;
    const task = {
      _id: jwt.decode(authservice.getToken())._id,
      task_id: props._id,
    };

    if (status === 1) {
      task.state = "Completed";
    } else {
      task.state = "InProgress";
    }

    const data = await graphQLFetch(query, { task: task });
    // if(data.TaskStateUpdate === "Updated" && status === 1){
    //   props.state = "Completed";
    // }
    // else if(data.TaskStateUpdate === "Updated" && status === 0){
    //   props.state = "InProgress";
    // }
    await props.loadData();
  }

  let date = new Date(Date.parse(props.deadline)).toDateString();
  date = date !== "Invalid Date" ? date : "";
  return (
    <div className={props.classes} id={props.index}>
      <input
        type="checkbox"
        name="msg"
        id={`mail-${props._id}`}
        className="mail-choice"
        onClick={handleChangeCheckbox}
        checked={props.state === "Completed" ? true : false}
      />
      <label htmlFor={`mail-${props._id}`}></label>
      <div
        className="msg-content"
        onClick={props.onMessageSelect}
        id={`msg-${props.index}`}
      >
        <div className="msg-title">{props.title}</div>
        <div className="msg-title">{props.state}</div>
        <div className="msg-date">{date} </div>
      </div>
      <button className="crossbutton" onClick={removeTask}>
        <i className="far fa-times-circle fa-2x" />
      </button>
    </div>
  );
};

export default MsgItem;
