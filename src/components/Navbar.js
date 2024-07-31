import React from 'react';
import NavbarRight from '../assets/NavbarRight';
import Breadcrumb from '../assets/Breadcrumb';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarRight hide />
      <Breadcrumb />
      <NavbarRight />
    </nav>
  );
};

export default Navbar;
