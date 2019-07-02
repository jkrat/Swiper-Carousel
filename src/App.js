import React from 'react';
import './App.css';
import Swiper from './components/swiper';
import FunctionalThumbs from './components/swiper/FunctionalThumbs';
import RecipeReviewCard from './components/Card';

function App() {
  const getCards = length => {
    let list = [];
    for (let i = 0; i < length; i++) {
      list.push({
        index: i,
        card: <RecipeReviewCard />
      });
    }
    return list;
  };
  const getImages = length => {
    let list = [];
    for (let i = 0; i < length; i++) {
      list.push({
        index: i,
        image: 'static/paella.jpg'
      });
    }
    return list;
  };

  return (
    <div className="App">
      <FunctionalThumbs items={getImages(8)} />
      <div style={{ height: 100, backgroundColor: 'green' }} />
      <Swiper items={getCards(8)} />
      <div style={{ height: 100, backgroundColor: 'green' }} />
    </div>
  );
}

export default App;
