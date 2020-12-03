import React from "react";
import authservice from "../../services/authservice.js";
import jwt from "jsonwebtoken";

const Message = (props) => {
  const user = jwt.decode(authservice.getToken()).name;
  const email = jwt.decode(authservice.getToken()).email;
  console.log(user);
  return (
    <React.Fragment>
      <div className={`${props.email === email ? "sent" : "received"} px-3`}>
        <div className={`message-name`}>{props.user}</div>
        <span className="justify-content-end">{props.content}</span>
        <div className="message-time">{new Date().getFullYear()}</div>
      </div>
    </React.Fragment>
  );
};

export default Message;
