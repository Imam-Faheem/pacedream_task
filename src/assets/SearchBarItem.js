import React from 'react';

const SearchBarItem = ({ icon, label, text }) => {
  return (
    <div className="search-bar-item">
      <label>
        <i className={icon}></i>
      </label>
      <div className="label-text">
        <h5>{label}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SearchBarItem;
