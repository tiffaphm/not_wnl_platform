import React from 'react';
import '../styles/Sidebar.css';

const SidebarUserWelcome = () => (
  <div className="sidebar-welcome-container">
    <div className="sidebar-welcome-content">
      <div className="sidebar-welcome-picture">
        <img src="../assets/puppy.jpg"></img>
      </div>
      <div className="sidebar-welcome-user-info">
        <p className="sidebar-welcome-message">
          WELCOME BACK
        </p>
        <p className="sidebar-username">
          DEFAULT USER
        </p>
      </div>
    </div>
  </div>
);

export default SidebarUserWelcome;
