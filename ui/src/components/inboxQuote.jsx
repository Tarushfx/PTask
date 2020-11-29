import React from "react";
import Mail from "./mail.jsx";
import MsgDesc from "./msgDesc.jsx";
import Quote from "./quote.jsx";
const InboxQuote = (props) => {
  return (
    <React.Fragment>
      <MsgDesc task={props.task} user={props.user} buttonID={props.buttonID} loadData={props.loadData}/>
      <div className="w-100 quote-inbox-content" id="quote-inbox-content">
        <div className="quote-content">
          <Quote quote={props.quote} />
        </div>
        <div className="quote-bottom"></div>
      </div>
    </React.Fragment>
  );
};

export default InboxQuote;
