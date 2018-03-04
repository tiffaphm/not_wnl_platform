import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SidebarUserWelcome from './SidebarUserWelcome';
import SidebarSelectDashboard from './SidebarSelectDashboard';
import SidebarSelectJobListings from './SidebarSelectJobListings';
import '../styles/Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'sidebar-select-dashboard',
    };
  }

  selectActiveComponent = (event) => {
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
      </div>
    );
  }
}

export default Sidebar;
