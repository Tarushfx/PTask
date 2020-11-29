import React from "react";
import MsgItem from "./msgItem.jsx";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Example from "../test.jsx";

const Inbox = (props) => {
  let taskArray = props.user.tasks ? props.user.tasks : [];
  console.log(taskArray);
  const getTotal = () => {
    let user = props.user;
    let tasks = user.tasks ? user.tasks : [];
    return tasks ? tasks.length : 0;
  };

  function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }

  return (
    <div className="inbox-container">
      <div className="inbox">
        {props.filterArray.length !== 0 &&
          reverseArray(props.filterArray).map((task, index, array) => (
            <MsgItem
              classes="msg selected-bg anim-y"
              key={array.length - 1 - index}
              index={array.length - 1 - index}
              {...task}
              onMessageSelect={props.onMessageSelect}
              loadData={props.loadData}
              // handleChangeCheckbox={props.handleChangeCheckbox}
            />
          ))}

        {props.filterArray.length === 0 && (
          <div className="msg selected-bg anim-y">
            <input type="checkbox" name="msg" className="mail-choice" />
            <div className="msg-title">
              {document.querySelector("#taskCheckBox") &&
              document.querySelector("#taskCheckBox").checked
                ? "No Tasks Completed yet!"
                : "Wow so Empty! Add some Tasks!"}
            </div>
          </div>
        )}
        {/* <Example /> */}
      </div>

      <div className="add-task">
        <button
          className="add-button"
          data-toggle="modal"
          data-target="#taskModal"
        >
          Add task
        </button>
      </div>
    </div>
  );
};

export default Inbox;
