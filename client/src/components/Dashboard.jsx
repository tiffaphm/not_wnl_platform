import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Summary from './DashboardSubComponents/Summary/Summary';
import UserChart from './DashboardSubComponents/UserChart';
import './styles/Dashboard.css';

const Dashboard = () => (
  <div className="dashboard-container">
    <Sidebar />
    <Summary />
    <UserChart />
  </div>
);

export default Dashboard;
