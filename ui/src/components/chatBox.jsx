import React from "react";
import ChatHeader from "./chatHeader.jsx";
import Message from "./message.jsx";
import ChatInput from "./chatInput.jsx";
import graphQLFetch from "../graphQLFetch.js";
import ScrollToBottom from "react-scroll-to-bottom";
const ChatBox = (props) => {
  // let chats = [
  //   { text: "Hi!!!", type: "sent" },
  //   { text: "Hello!", type: "received" },
  //   { text: "What's up?", type: "sent" },
  //   { text: "Nm wbu?", type: "received" },
  // ];
  const sendMessage = async (message) => {
    const query = `mutation postMessage($message:MessageInput!){
      postMessage(message:$message)
    }`;
    await graphQLFetch(query, { message: message });
  };
  // const { messages: chat } = Messages();
  let chat = props.chat;
  console.log(chat && chat.messages);

  chat = chat && chat.messages;
  console.log(chat);
  return (
    <React.Fragment>
      <ChatHeader
        icon={props.icon}
        goBack={props.handleChange}
        title={props.team.title}
      />
      <div className="chat-list container-fluid">
        <ScrollToBottom>
          {chat &&
            chat
              .filter((chatMessage) => chatMessage._id === props.team._id)
              .map((chat, index) => (
                <div className="chat row" id={index} key={index}>
                  <Message {...chat} />
                </div>
              ))}
        </ScrollToBottom>
      </div>

      <ChatInput sendMessage={sendMessage} teamID={props.team._id} />
    </React.Fragment>
  );
};

export default ChatBox;
