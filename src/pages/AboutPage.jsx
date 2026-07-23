import React from 'react';
import About from '../components/About';
import CoreValues from '../components/CoreValues';
import AboutMission from '../components/AboutMission';

const AboutPage = () => {
  return (
    <div className="about-page">
      <About />
      <CoreValues />
      <AboutMission />
    </div>
  );
};

export default AboutPage;
