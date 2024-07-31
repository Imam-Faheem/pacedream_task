import React from 'react';
import SearchBarItem from './SearchBarItem';
import '../styles/style.css';

const SearchBar = ({ handleSearchClick }) => {
  const items = [
    { icon: 'fas fa-map-marker-alt', label: 'Location', text: 'USA Canada' },
    { icon: 'fas fa-camera', label: 'Gear Type', text: 'DSLR Camera' },
    { icon: 'fas fa-calendar-alt', label: 'Availability', text: '08 Nov 2024' },
    { icon: 'fas fa-clock', label: 'Start Time', text: '02:00 PM' },
    { icon: 'fas fa-clock', label: 'End Time', text: '04:00 PM' },
  ];

  return (
    <div className="search-bar">
      {items.map((item, index) => (
        <SearchBarItem key={index} icon={item.icon} label={item.label} text={item.text} />
      ))}
      <div className="search-bar-item btn">
        <button onClick={handleSearchClick}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
