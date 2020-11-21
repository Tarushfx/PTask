import React from "react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import UserList from "./UserList.jsx";

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  // eslint-disable-next-line react/require-render-return
  render() {
    return (
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  }
}
