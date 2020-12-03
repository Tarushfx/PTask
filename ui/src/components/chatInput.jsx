import React from "react";
import authservice from "../../services/authservice.js";
import jwt from "jsonwebtoken";
const ChatInput = (props) => {
  const name = jwt.decode(authservice.getToken()).name;
  const email = jwt.decode(authservice.getToken()).email;
  const send = () => {
    const text = document.getElementById("chatInput").value;
    if (!text) return;
    props.sendMessage({
      content: text,
      user: name,
      _id: props.teamID,
      email: email,
    });
    document.getElementById("chatInput").value = "";
  };

  return (
    <div className="mail-textarea">
      <input
        type="text"
        placeholder="Type a Message"
        id="chatInput"
        onKeyPress={(e) => {
          if (e.key === "Enter") send();
        }}
      />
      <div className="textarea-icons">
        <button className="send" onClick={send}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-send"
            data-darkreader-inline-fill=""
            data-darkreader-inline-stroke=""
            // style="--darkreader-inline-fill:none; --darkreader-inline-stroke:currentColor;"
          >
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
