import React from 'react';

import UserTable from './UserTable.jsx';
import UserAdd from './UserAdd.jsx';
import graphQLFetch from './graphQLFetch.js';

export default class UserList extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
    this.createUser = this.createUser.bind(this);
  }

  async componentDidMount() {
    await this.loadData();
  }

  async loadData() {
    const query = `query{
      userList{
        name email password
      }
    }`;
    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ users: data.userList });
    }
  }

  async createUser(user) {
    const query = `mutation UserAdd($user: UserInputs!) {
      UserAdd(user: $user) {
        _id
      }
    }`;
    const data = await graphQLFetch(query, { user });
    if (data) {
      await this.loadData();
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1> USER TABLE</h1>
        <p>This is just to check the integration of the UI and the API servers</p>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <UserTable users={this.state.users} />
        <hr />
        <UserAdd createUser={this.createUser} />
      </React.Fragment>
    );
  }
}
