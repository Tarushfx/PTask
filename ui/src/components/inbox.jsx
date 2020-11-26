import React from "react";
import MsgItem from "./msgItem.jsx";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Inbox = (props) => {
  let taskArray = props.user.tasks ? props.user.tasks : [];
  console.log(taskArray);

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
        {taskArray.length !== 0 &&
          reverseArray(taskArray).map((task, index) => (
            <MsgItem
              classes="msg selected-bg anim-y"
              key={index}
              index={index}
              {...task}
              onClick={props.onMessageSelect}
            />
          ))}
        {taskArray.length === 0 && (
          <MsgItem
            classes="msg selected-bg anim-y"
            key="0"
            index="0"
            title="No tasks added yet"
          />
        )}
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
