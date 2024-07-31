import React from 'react';

const Tab = ({ category, handleTabChange, defaultChecked }) => {
  return (
    <label className="tab">
      <input
        type="radio"
        name="category"
        value={category}
        className="tab-input"
        onChange={handleTabChange}
        defaultChecked={defaultChecked}
      />
      <span className="custom-radio"></span>
      <span className="vertical-line"></span>
      <span className="tab-text">{category}</span>
    </label>
  );
};

export default Tab;
