import React from "react";

const Message = (props) => {
  return (
    <React.Fragment>
      <div className={props.type.toLowerCase()}>{props.text}</div>
      <div className="message-time">{new Date().getFullYear()}</div>
    </React.Fragment>
  );
};

export default Message;
