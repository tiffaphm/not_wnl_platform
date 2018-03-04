import React from 'react';
import '../styles/Sidebar.css';

const SidebarSelectMessages = (props) => (
  <div className="sidebar-select-messages sidebar-menu-item" onClick={props.selectActiveComponent}>
    <p onClick={e => e.stopPropagation()}><i className="fas fa-envelope"></i>MESSAGES</p>
  </div>
);

export default SidebarSelectMessages;
