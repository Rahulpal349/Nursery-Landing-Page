import React from 'react';
import HeroSlider from '../components/HeroSlider';
import PlantGallery from '../components/PlantGallery';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="page">
      <HeroSlider />
      <PlantGallery limit={4} showViewMore={true} />
      <Contact />
    </div>
  );
};

export default Home;
