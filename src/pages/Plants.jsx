import React from 'react';
import PlantsHero from '../components/PlantsHero';
import PlantCategories from '../components/PlantCategories';
import PlantGrid from '../components/PlantGrid';
import PlantFeatures from '../components/PlantFeatures';


const Plants = () => {
  return (
    <div className="plants-page">
      <PlantsHero />
      <PlantCategories />
      <PlantGrid />
      <PlantFeatures />

    </div>
  );
};

export default Plants;
