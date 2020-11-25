import React from "react";

const MsgItem = (props) => {
  let date = new Date(Date.parse(props.deadline)).toDateString();
  date = date !== "Invalid Date" ? date : "";
  return (
    <div className={props.classes}>
      <input
        type="checkbox"
        name="msg"
        id={`mail-${props.index}`}
        className="mail-choice"
        onClick={(id) => {
          // change state in db
        }}
      />
      <label htmlFor={`mail-${props.index}`}></label>
      <div className="msg-content">
        <div className="msg-title">{props.title}</div>
        <div className="msg-title">{props.state}</div>
        <div className="msg-date">{date} </div>
      </div>
      <img src="images/User-Icon.jpg" alt="" className="members mail-members" />
    </div>
  );
};

export default MsgItem;
