import React from 'react';
import RecipeReviewCard from './components/Card';

export function getCards(length) {
  let list = [];
  for (let i = 0; i < length; i++) {
    list.push({
      index: i,
      card: <RecipeReviewCard />
    });
  }
  return list;
}

export function getImages(length) {
  let list = [];
  for (let i = 0; i < length; i++) {
    list.push({
      index: i,
      image: 'static/paella.jpg'
    });
  }
  return list;
}
