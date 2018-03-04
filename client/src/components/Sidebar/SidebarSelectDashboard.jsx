import React from 'react';
import '../styles/Sidebar.css';

const SidebarSelectDashboard = (props) => (
  <div className="sidebar-select-dashboard sidebar-menu-item sidebar-active" onClick={props.selectActiveComponent}>
    <p onClick={e => e.stopPropagation()}>DASHBOARD</p>
  </div>
);

export default SidebarSelectDashboard;
