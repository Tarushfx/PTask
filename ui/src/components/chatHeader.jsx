import React from "react";

const ChatHeader = (props) => {
  return (
    <div className="chat-header w-100">
      <div className="back-button" onClick={props.goBack}>
        {props.icon}
        &nbsp;
      </div>
      <div className="chat-header-text justify-self-center">
        {props.title ? props.title : "Teams"}
      </div>
    </div>
  );
};

export default ChatHeader;
