import React from "react";
import ChatHeader from "./chatHeader.jsx";
const ChatList = (props) => {
  let array = props.user ? props.user.teams : [];
  console.log(array);
  let chat = props.chat;
  console.log(chat && chat.messages);
  chat = chat && chat.messages;

  return (
    <React.Fragment>
      <ChatHeader />
      {array &&
        array.map((item) => {
          let filtered = chat && chat.filter((c) => c._id == item._id);
          return (
            <div
              className="chat-item w-100"
              onClick={(e) => props.handleChange(e, item)}
            >
              <strong>{item.title}</strong>
              <span>
                {chat && filtered ? filtered[filtered.length - 1].user : ""}:
                {chat && filtered
                  ? filtered[filtered.length - 1].content
                  : "No Messages"}
              </span>
            </div>
          );
        })}
    </React.Fragment>
  );
};
export default ChatList;
