import React from 'react';
import Tab from './Tab';

const Tabs = ({ handleTabChange }) => {
  const categories = [
    'Photography',
    'Sports & Outdoor',
    'Musical',
    'Tools and Equipment',
    'Fitness',
  ];

  return (
    <div className="tabs">
      {categories.map((category) => (
        <Tab
          key={category}
          category={category}
          handleTabChange={handleTabChange}
          defaultChecked={category === 'Photography'}
        />
      ))}
    </div>
  );
};

export default Tabs;
