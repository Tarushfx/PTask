import React from "react";
import ChatHeader from "./chatHeader.jsx";
import Message from "./message.jsx";
import { Chat, Messages } from "./chat.jsx";
import ChatInput from "./chatInput.jsx";
import graphQLFetch from "../graphQLFetch.js";
const ChatBox = (props) => {
  let chats = [
    { text: "Hi!!!", type: "sent" },
    { text: "Hello!", type: "received" },
    { text: "What's up?", type: "sent" },
    { text: "Nm wbu?", type: "received" },
  ];
  const sendMessage = async (message) => {
    const query = `mutation postMessage($message:MessageInput!){
      postMessage(message:$message)
    }`;
    await graphQLFetch(query, { message: message });
  };
  // const { messages: chat } = Messages();
  let chat = Messages();
  console.log(chat && chat.messages);

  chat = chat && chat.messages;
  console.log(chat);
  return (
    <React.Fragment>
      <ChatHeader icon={props.icon} goBack={props.handleChange} />

      <div className="chat-list container-fluid">
        {chat &&
          chat.map((chat, index) => (
            <div className="chat row" id={index} key={index}>
              <Message {...chat} />
            </div>
          ))}
      </div>

      <ChatInput sendMessage={sendMessage} />
    </React.Fragment>
  );
};

export default ChatBox;
