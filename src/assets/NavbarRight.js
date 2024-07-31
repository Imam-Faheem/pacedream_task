import React from 'react';
import '../styles/style.css';

const NavbarRight = ({ hide }) => {
  return (
    <div className={`navbar-right ${hide ? 'hide' : ''}`}>
      <a href="#" className="navbar-button">List Your Property</a>
      <a href="#" className="navbar-icon">
        {hide ? '👤' : <i className="fas fa-user"></i>}
      </a>
    </div>
  );
};

export default NavbarRight;
