import React from "react";
import MainArea from "./components/mainArea.jsx";
import ProfileBar from "./components/profileBar.jsx";
import AddTaskModal from "./Modal/AddTaskModal.jsx";
import SettingModal from "./Modal/SettingModal.jsx";
import jwt from "jsonwebtoken";

import "./css/index.css";
import Notifications from "./components/Notification/Notifications.jsx";
import graphQLFetch from "./graphQLFetch.js";
import authservice from "../services/authservice.js";

class Dashboard extends React.Component {
  // state = { user: {} };
  constructor() {
    super();
    this.state = { user: {} };
    this.loadData = this.loadData.bind(this);
  }

  async loadData() {
    const query = `query userdata($user: getData!) {
      userData(user :$user){
        _id name email projects {
          title created state description
        }
        tasks{
          title created state description
        }
        team{
          title description members
        }
      }
    }`;

    const token = authservice.getToken();
    const decodedToken = jwt.decode(token);
    const id = { _id: decodedToken._id };
    const data = await graphQLFetch(query, { user: id });
    if (data) {
      this.setState({ user: data.userData });
      console.log(this.state.user);
    }
  }

  async componentDidMount() {
    await this.loadData();
  }

  render() {
    return (
      <div className="Container">
        {/* <SimpleNotif /> */}
        <ProfileBar user={this.state.user} />
        <MainArea user={this.state.user} />
        <AddTaskModal loadData={this.loadData}/>
        <SettingModal loadData={this.loadData}/>
      </div>
    );
  }
}

export default Dashboard;
