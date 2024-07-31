import React from 'react';
import FiltersBtn from '../assets/FiltersBtn';

const FiltersBtnGroup = () => {
  return (
    <div className="filters">
      <FiltersBtn label="Sort by" />
      <FiltersBtn label="Budget" />
      <FiltersBtn label="More Filters" />
    </div>
  );
};

export default FiltersBtnGroup;
