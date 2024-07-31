import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import FiltersBtnGroup from './FiltersBtnGroup';
import Footer from './Footer';
import CallToAction from './CallToAction';

const Layout = ({ children, handleSearchClick, handleTabChange }) => {
  return (
    <div className="page-container" style={{ minHeight: "100vh" }}>
      <div className="main-container">
        <Navbar />
        <Header handleSearchClick={handleSearchClick} handleTabChange={handleTabChange} />
        <FiltersBtnGroup/>
        {children}
      </div>
      <CallToAction/>
      <Footer />
    </div>
  );
};

export default Layout;
