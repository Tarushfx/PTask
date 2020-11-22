import "babel-polyfill";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";

import Main from "./Main.jsx";

const element = <Main />;

ReactDOM.render(element, document.getElementById("content"));

if (module.hot) {
  module.hot.accept();
}
