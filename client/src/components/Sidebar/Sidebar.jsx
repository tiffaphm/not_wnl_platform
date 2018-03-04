import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SidebarUserWelcome from './SidebarUserWelcome';
import SidebarSelectDashboard from './SidebarSelectDashboard';
import SidebarSelectJobListings from './SidebarSelectJobListings';
import SidebarSelectJobHistory from './SidebarSelectJobHistory';
import SidebarSelectMessages from './SidebarSelectMessages';
import SidebarSelectProfile from './SidebarSelectProfile';
import '../styles/Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'sidebar-select-dashboard',
    };
  }

  selectActiveComponent = (event) => {
    // DEBT: this function will only run if user clicks on the div, not the actual text
    const currentActive = ReactDOM.findDOMNode(this).getElementsByClassName(this.state.activeComponent)[0];

    if (event.target.className !== this.state.activeComponent) {
      currentActive.classList.remove('sidebar-active');
      event.target.classList.add('sidebar-active');

      this.setState({
        activeComponent: event.target.className
      })
    };
  }

  render() {
    return (
      <div className="sidebar-container">
        <SidebarUserWelcome />
        <SidebarSelectDashboard selectActiveComponent={this.selectActiveComponent} />
        <SidebarSelectJobListings selectActiveComponent={this.selectActiveComponent} />
        <SidebarSelectJobHistory selectActiveComponent={this.selectActiveComponent} />
        <SidebarSelectMessages selectActiveComponent={this.selectActiveComponent} />
        <SidebarSelectProfile selectActiveComponent={this.selectActiveComponent} />
      </div>
    );
  }
}

export default Sidebar;
