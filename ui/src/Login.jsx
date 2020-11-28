import React from 'react';
import UserAdd from './components/UserAdd.jsx';
import graphQLFetch from './graphQLFetch.js';
import authService from '../services/authservice.js';
import jwt from 'jsonwebtoken';

export default class Login extends React.Component {
  constructor() {
    super();
    this.createUser = this.createUser.bind(this);
    this.login = this.login.bind(this);
  }

  async createUser(user, likes) {
    const query = `mutation UserAdd($user: UserInputs!) {
      UserAdd(user: $user) {
        _id token
      }
    }`;
    const data = await graphQLFetch(query, { user });

    if (data.UserAdd) {
      authService.setTokenSignUp(data);

      const likesQuery = `mutation addLike($likes: LikesInput!){
        addLikes(likes: $likes)
      }`;

      const id = jwt.decode(authService.getToken())._id;
      const likevar = {
        _id: id,
        likes: likes
      };

      await graphQLFetch(likesQuery, {likes: likevar})
      console.log('User Created');
      window.location = '/';
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
