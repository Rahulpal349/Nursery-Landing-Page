import React from 'react';
import Hero from '../components/Hero';
import PlantGallery from '../components/PlantGallery';

const Home = () => {
  return (
    <div className="page">
      <Hero />
      <PlantGallery limit={4} showViewMore={true} />
    </div>
  );
};

export default Home;
