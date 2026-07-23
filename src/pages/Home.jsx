import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PlantCollection from '../components/PlantCollection';
import AboutStats from '../components/AboutStats';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <PlantCollection />
      <AboutStats />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
