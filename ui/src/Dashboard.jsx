import React from 'react';
import MainArea from './components/mainArea.jsx';
import ProfileBar from './components/profileBar.jsx';
import './css/index.css';

const Dashboard = props => (
  <div className="Container">
    <ProfileBar />
    <MainArea />
  </div>
);

export default Dashboard;
