import React from 'react';
import '../styles/Sidebar.css';

const SidebarSelectJobHistory = (props) => (
  <div className="sidebar-select-history sidebar-menu-item" onClick={props.selectActiveComponent}>
    <p onClick={e => e.stopPropagation()}><i className="fas fa-history"></i>JOB HISTORY</p>
  </div>
);

export default SidebarSelectJobHistory;
