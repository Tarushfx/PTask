import React from "react";
import ChatHeader from "./chatHeader.jsx";
import Message from "./message.jsx";

const ChatBox = (props) => {
  const chats = [
    { text: "Hi!!!", type: "sent" },
    { text: "Hello!", type: "received" },
    { text: "What's up?", type: "sent" },
    { text: "Nm wbu?", type: "received" },
  ];
  return (
    <React.Fragment>
      <ChatHeader icon={props.icon} goBack={props.handleChange} />

      <div className="chat-list container-fluid">
        {chats.map((chat, index) => (
          <div className="chat row" id={index} key={index}>
            <Message {...chat} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ChatBox;
