import React from 'react';
import '../styles/style.css';

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <a href="#">Find Roommate</a> <span className='slash'>/</span>
      <a href="#">About Us</a> <span className='slash'>/</span>
      <a href="#">Contact</a> <span className='slash'>/</span>
      <a href="#">USA</a>
    </div>
  );
};

export default Breadcrumb
