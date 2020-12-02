import React, { useState } from "react";
import ChatHeader from "./chatHeader.jsx";
import ChatBox from "./chatBox.jsx";
import "../css/message.css";
import ChatList from "./chatList.jsx";
const MessageArea = (props) => {
  const [chatListBox, setChatListBox] = useState(false);
  const handleChange = () => {
    setChatListBox(!chatListBox);
  };
  const backIcon = <i className="fas fa-arrow-left"></i>;
  return (
    <div className="message-area hide">
      {!chatListBox && <ChatList handleChange={handleChange} />}
      {chatListBox && <ChatBox icon={backIcon} handleChange={handleChange} />}
    </div>
  );
};

export default MessageArea;
