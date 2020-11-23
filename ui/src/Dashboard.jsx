import React from 'react';
import MainArea from './components/mainArea.jsx';
import ProfileBar from './components/profileBar.jsx';
import AddTaskModal from './Modal/AddTaskModal.jsx';
import SettingModal from './Modal/SettingModal.jsx'

import './css/index.css';

const Dashboard = props => (
  <div className="Container">
    <ProfileBar />
    <MainArea />
    <AddTaskModal />
    <SettingModal />
  </div>
);

export default Dashboard;
