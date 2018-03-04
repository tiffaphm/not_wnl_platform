import React from 'react';
import '../styles/Sidebar.css';

const SidebarSelectProfile = (props) => (
  <div className="sidebar-select-profile sidebar-menu-item" onClick={props.selectActiveComponent}>
    <p onClick={e => e.stopPropagation()}><i className="fas fa-user"></i>VIEW PROFILE</p>
  </div>
);

export default SidebarSelectProfile;
