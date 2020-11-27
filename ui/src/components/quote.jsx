import React from "react";
import "../css/quote.css";

const Quote = (props) => (
  <React.Fragment>
    <div id="quote-box">
      <p id="text">{props.quote["quote"]}</p>
      <p id="by">- {props.quote["by"]}</p>
    </div>
  </React.Fragment>
);
export default Quote;
