import React from "react";
import MsgItem from "./msgItem.jsx";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Inbox = (props) => {
  const taskArray = props.user ? props.user.tasks : [];
  const array = [1, 2, 3, 4];
  return (
    <div className="inbox-container">
      <div className="inbox">
        {array.map((msgItem, index) => (
          <MsgItem
            classes="msg selected-bg anim-y"
            key={index}
            index={index}
            title="Hello"
          />
        ))}
        {array.map((task, index) => (
          <MsgItem
            classes="msg selected-bg anim-y"
            key={index}
            index={index}
            {...task}
          />
        ))}
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
