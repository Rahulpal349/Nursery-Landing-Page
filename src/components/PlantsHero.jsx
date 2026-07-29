import React from 'react';
import { Link } from 'react-router-dom';
import './PlantsHero.css';
import plantsHeroBg from '../assets/plants_hero.jpg';

const PlantsHero = () => {
  return (
    <section className="plants-hero-section" style={{ backgroundImage: `url(${plantsHeroBg})` }}>
      <div className="plants-hero-gradient-overlay"></div>
      <div className="container plants-hero-container">
        
        <div className="plants-hero-content">
          <h1 className="serif-heading">
            Our <span className="text-highlight-green">Plants</span>
          </h1>
          

          <p className="plants-hero-desc">
            Explore a wide variety of healthy, high-quality plants<br/>
            that bring life, beauty, and positivity to your space.
          </p>

          <div className="breadcrumb">
            <Link to="/">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Home
            </Link>
            <span className="separator">&gt;</span>
            <span className="current">Our Plants</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlantsHero;
