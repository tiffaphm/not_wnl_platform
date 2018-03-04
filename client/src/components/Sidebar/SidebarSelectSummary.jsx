import React from 'react';
import '../styles/Sidebar.css';

const SidebarSelectDashboard = (props) => (
  <div className="sidebar-select-summary sidebar-menu-item sidebar-active" onClick={props.selectActiveComponent}>
    <p onClick={e => e.stopPropagation()}><i className="fas fa-columns"></i>SUMMARY</p>
  </div>
);

export default SidebarSelectSummary;
