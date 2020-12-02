import React from "react";
import ChatHeader from "./chatHeader.jsx";
const ChatList = (props) => {
  const array = [1, 2, 3];
  return (
    <React.Fragment>
      <ChatHeader />
      {array.map((item) => (
        <div className="chat-item w-100" onClick={props.handleChange}>
          10000000
        </div>
      ))}
    </React.Fragment>
  );
};
export default ChatList;
