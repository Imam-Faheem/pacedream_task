import React from 'react';
import MainTab from '../assets/MainTab';
import Tabs from '../assets/Tabs';
import SearchBar from '../assets/SearchBar';
import '../styles/style.css';

const Header = ({ handleSearchClick, handleTabChange }) => {
  return (
    <header className="header">
      <MainTab />
      <div className="tabs-container">
        <Tabs handleTabChange={handleTabChange} />
        <SearchBar handleSearchClick={handleSearchClick} />
      </div>
    </header>
  );
};

export default Header;
