import React from "react";

const MsgItem = (props) => {
  return (
    <div className={props.classes}>
      <input
        type="checkbox"
        name="msg"
        id={`mail-${props.index}`}
        className="mail-choice"
      />
      <label htmlFor={`mail-${props.index}`}></label>
      <div className="msg-content">
        <div className="msg-title">{props.title}</div>
        <div className="msg-title">{props.state}</div>
        <div className="msg-date">{props.created}</div>
      </div>
      <img src="images/User-Icon.jpg" alt="" className="members mail-members" />
    </div>
  );
};

export default MsgItem;
