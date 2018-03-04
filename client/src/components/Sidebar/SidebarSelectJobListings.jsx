import React from 'react';
import '../styles/Sidebar.css';

const SidebarSelectJobListings = (props) => (
  <div className="sidebar-select-listings sidebar-menu-item" onClick={props.selectActiveComponent}>
    <p onClick={e => e.stopPropagation()}>JOB LISTINGS</p>
  </div>
);

export default SidebarSelectJobListings;
