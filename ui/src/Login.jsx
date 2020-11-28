import React from "react";
import UserAdd from "./components/UserAdd.jsx";
import graphQLFetch from "./graphQLFetch.js";
import authService from "../services/authservice.js";

export default class Login extends React.Component {
  constructor() {
    super();
    this.createUser = this.createUser.bind(this);
    this.login = this.login.bind(this);
  }

  async createUser(user) {
    const query = `mutation UserAdd($user: UserInputs!) {
      UserAdd(user: $user) {
        _id token
      }
    }`;
    const data = await graphQLFetch(query, { user });
    if (data.UserAdd) {
      authService.setTokenSignUp(data);
      console.log("User Created");
      window.location = "/";
    }
  }

  async login(user) {
    const query = `query LogIn($user: UserLoginInputs!){
    UserSignIn(user: $user){
      _id token
    }
  }`;
    const data = await graphQLFetch(query, { user });
    if (data.UserSignIn) {
      authService.setTokenSignin(data);
      console.log("Sign in Done");
      window.location = "/";
    } else {
      authService.clearToken();
      console.log("Unsuccessful");
    }
  }

  render() {
    return (
      <React.Fragment>
        <UserAdd createUser={this.createUser} login={this.login} />
      </React.Fragment>
    );
  }
}
