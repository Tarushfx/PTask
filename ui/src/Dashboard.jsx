import React from "react";
import MainArea from "./components/mainArea.jsx";
import ProfileBar from "./components/profileBar.jsx";
import "./css/index.css";

const Dashboard = (props) => {
  return (
    <div className="container">
      <ProfileBar />
      <MainArea />
    </div>
  );
};

export default Dashboard;
