
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Dashboard from './Dashboard.jsx';


import Login from './Login.jsx';


// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.route = localStorage.getItem('token') ? '/dashboard' : '/auth';
  }

  // eslint-disable-next-line react/require-render-return
  render() {
    return (

      <Switch>
        <Route path="/auth" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect path="/" to={this.route} />
      </Switch>

    );
  }
}
