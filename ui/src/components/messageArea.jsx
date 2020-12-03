import React, { useState } from "react";
import ChatBox from "./chatBox.jsx";
import ChatList from "./chatList.jsx";
import { Messages } from "./chat.jsx";
import "../css/message.css";

const MessageArea = (props) => {
  const [chatListBox, setChatListBox] = useState(false);
  const [teamState, setTeamState] = useState({});
  const handleChange = (e, team) => {
    setChatListBox(!chatListBox);
    setTeamState(team);
  };
  const backIcon = <i className="fas fa-arrow-left"></i>;
  let chat = Messages();
  return (
    <div className="message-area hide">
      {!chatListBox && (
        <ChatList handleChange={handleChange} user={props.user} chat={chat} />
      )}
      {chatListBox && (
        <ChatBox
          icon={backIcon}
          handleChange={handleChange}
          team={teamState}
          user={props.user}
          chat={chat}
        />
      )}
    </div>
  );
};

export default MessageArea;
