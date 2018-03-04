import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Summary from './DashboardSubComponents/Summary/Summary';
import './styles/Dashboard.css';

const Dashboard = () => (
  <div className="dashboard-container">
    <Sidebar />
    <Summary />
  </div>
);

export default Dashboard;
