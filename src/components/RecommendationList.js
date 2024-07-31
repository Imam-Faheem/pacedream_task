import React from 'react';

const RecommendationList = ({suggestions, activeTab  }) => {
const listHeadings = {
    Photography: {
      title: "Photography Gear Available",
      description: "Explore a wide range of photography equipment available for rent in and around Los Angeles."
    },
    'Sports & Outdoor': {
      title: "Sports & Outdoor Equipment",
      description: "Find the best sports and outdoor equipment for your adventures."
    },
    Musical: {
      title: "Musical Instruments",
      description: "Rent high-quality musical instruments for your next performance."
    },
    'Tools and Equipment': {
      title: "Tools and Equipment",
      description: "Browse through our selection of tools and equipment available for rent."
    },
    Fitness: {
      title: "Fitness Equipment",
      description: "Get fit with our range of fitness equipment available for rent."
    }
  };

  const { title, description } = listHeadings[activeTab];
  return (
    <div className="suggestions">
      <div className='content-s'>
      <h3>{title}</h3>
      <p>{description}</p>
      </div>
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="card">
              <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.69444 0.0626221H1.37839C0.860902 0.0626221 0.4375 0.533597 0.4375 1.10923V10.2409C0.4375 10.4895 0.566873 10.725 0.766813 10.8296C0.978514 10.9343 1.21374 10.9081 1.39015 10.7511L1.40192 10.738L4.03642 8.26543L6.67092 10.738L6.68268 10.7511C6.78853 10.8427 6.91791 10.895 7.04728 10.895C7.12961 10.895 7.2237 10.8689 7.30602 10.8165C7.50596 10.7119 7.63534 10.4764 7.63534 10.2278V1.10923C7.63534 0.533597 7.21193 0.0626221 6.69444 0.0626221Z" fill="white"/>
    </svg>
          <img className="card-image" src={suggestion.imageUrl} alt={suggestion.title} />

          <div className="card-content">

            <div className='card-header-text'>
              <div className='card-header'>
                <h3 className="card-title">{suggestion.title}</h3>
                <i className="fas fa-ellipsis-v"></i>
              </div> 
              <div className='card-txt'>
                <p className="card-deposit">{suggestion.deposit}</p>
                <p className="card-rent"><strong>{suggestion.rent}</strong>/hour</p>
              </div>
            </div>

          
            <div>
              <button className="rent-button">Rent Now</button>
              <span className="stock-status">{suggestion.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationList;
