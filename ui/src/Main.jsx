import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import UserList from './UserList.jsx';
import Login from './Login.jsx';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  // eslint-disable-next-line react/require-render-return
  render() {
    return (
      <Switch>
        <Redirect exact path="/" to="/auth" />
        <Route path="/auth" component={Login} />
        <Route path="/dashboard" component={UserList} />
      </Switch>
    );
  }
}
