
import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import Main from "./Main.jsx";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

const element = <App />;

ReactDOM.render(element, document.getElementById("content"));

if (module.hot) {
  module.hot.accept();
}
