import React, { useState} from 'react';
import Layout from '../components/Layout';
import RecommendationList from '../components/RecommendationList';
import suggestions from '../data/suggestions';
import '../styles/style.css';

const Home = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeTab, setActiveTab] = useState('Photography');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);


  const handleSearchClick = () => {
    setFilteredSuggestions(suggestions.filter(item => item.category === activeTab));
    setShowSuggestions(true);
  };

  const handleTabChange = (event) => {
    setActiveTab(event.target.value);
    setShowSuggestions(false);
  };

  return (
    <Layout handleSearchClick={handleSearchClick} handleTabChange={handleTabChange}>
      {showSuggestions ? (
        <RecommendationList suggestions={filteredSuggestions} activeTab={activeTab} />
      ) : (
        <div className="empty-message">
          <p>Explore a wide range of photography equipment available for rent in and around Los Angeles.</p>
        </div>
      )}
    </Layout>
  );
};

export default Home;
