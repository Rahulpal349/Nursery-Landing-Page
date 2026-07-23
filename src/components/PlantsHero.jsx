import React from 'react';
import { Link } from 'react-router-dom';
import './PlantsHero.css';

const PlantsHero = () => {
  return (
    <section className="plants-hero-section">
      <div className="plants-hero-bg"></div>
      <div className="container plants-hero-container">
        
        <div className="plants-hero-content">
          <h1 className="serif-heading">
            Our <span className="text-highlight-green">Plants</span>
          </h1>
          
          <div className="hero-leaf-separator">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>

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
