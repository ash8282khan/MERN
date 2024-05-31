import React from 'react';
import CategoryRow from './categoryRow';
import Carousel from './carousel';
import Cards from './cards';

function Homepage() {
  return (
    <div className="homepage">
      <Carousel />
      <CategoryRow title="Appliances for your home | Up to 55% off" />
      <CategoryRow title="Revamp your home in style" />
      <Cards />
    </div>
  );
}

export default Homepage;
