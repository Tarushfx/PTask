import React from "react";

const MsgDesc = (props) => {
  const clockSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-clock"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
  return (
    <React.Fragment>
      <div className="mail-contents hide">
        <div className="msg-desc">
          <div className="mail-contents-subject">
            {/* <input
              type="checkbox"
              name="msg"
              id={props.buttonID}
              className="mail-choice"
            ></input>
            <label htmlFor={props.buttonID}></label> */}
            <div className="mail-contents-title">{props.task.title}</div>
          </div>
          <div className="mail">
            <div className="mail-time">
              Deadline:&nbsp;
              {clockSVG}
              {new Date(Date.parse(props.task.deadline)).toDateString()}
            </div>
            <div className="mail-inside">{props.task.description}</div>
            <div className="mail-assign">
              <div className="assignee mail-time">
                <strong>You &nbsp;</strong> created this task on:&nbsp;
                {clockSVG}
                <span className="assign-date">
                  {new Date(Date.parse(props.task.created)).toDateString()}
                </span>
              </div>
            </div>
            <div className="mail-checklist">
              <input
                type="checkbox"
                name="msg"
                id="disabled-button"
                className="mail-choice"
                checked
                disabled
              ></input>
              {props.task.state == "Completed" && (
                <label htmlFor="disabled-button">
                  You completed this task.
                </label>
              )}
              <div className="mail-checklist-date"></div>
            </div>
          </div>
        </div>
        <div className="edit-msg-desc">
          <button className="add-button">Edit Task Description</button>
          <button className="add-button">Create Notification</button>
        </div>
        <div className="msg-desc-bottom"></div>
      </div>
    </React.Fragment>
  );
};

export default MsgDesc;
