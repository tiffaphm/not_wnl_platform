import React from 'react';
import './styles/Nav.css';

const Nav = () => (
  <div className="nav-container">
    <div className="nav-title">
      wonolo
    </div>
    <div className="nav-buttons">
      <a href="/"><i className="fas fa-home"></i></a>
      <a href="/"><i className="fas fa-cog"></i></a>
    </div>
  </div>
);

export default Nav;
