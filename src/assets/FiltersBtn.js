import React from 'react';

const FiltersBtn = ({ label }) => {
  return (
    <button className="filter-button">
      {label} <span>&#9662;</span>
    </button>
  );
};

export default FiltersBtn;
