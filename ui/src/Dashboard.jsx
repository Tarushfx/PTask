import React from "react";
import MainArea from "./components/mainArea.jsx";
import ProfileBar from "./components/profileBar.jsx";
import AddTaskModal from "./Modal/AddTaskModal.jsx";
import SettingModal from "./Modal/SettingModal.jsx";

import "./css/index.css";
import Notifications from "./components/Notification/Notifications.jsx";

const Dashboard = (props) => (
  <div className="Container">
    {/* <SimpleNotif /> */}
    <ProfileBar />
    <MainArea />
    <AddTaskModal />
    <SettingModal />
  </div>
);

export default Dashboard;
