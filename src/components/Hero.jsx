import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroBg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-gradient-overlay"></div>
      <div className="container hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-tagline">
            <span className="tagline-line"></span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--primary-green)" className="tagline-icon">
              <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" />
            </svg>
            <span className="tagline-text">NURTURE. GROW. THRIVE.</span>
          </div>

          <h1 className="hero-title serif-heading">
            Bringing Nature <br/>
            Closer to <span className="text-highlight">You<svg width="28" height="28" viewBox="0 0 24 24" fill="var(--primary-green)" className="highlight-leaf"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" /></svg></span>
          </h1>
          
          <p className="hero-description">
            Explore a wide variety of healthy, vibrant plants<br/>
            that bring life, beauty, and positivity to your space.
          </p>
          
          <div className="hero-actions">
            <Link to="/plants" className="hero-btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.26 4.26 0 0012 22c5 0 9-4.89 9-10V4zM12 20a2.26 2.26 0 01-2-1.25 15.65 15.65 0 005.1-4.11L13.7 13.2a13.3 13.3 0 01-4 3.73 17.58 17.58 0 011.66-8C13 9.4 16.2 9.15 19 8.84v3.16C19 15.89 15.89 20 12 20z"/></svg>
              Explore Plants
            </Link>
            <Link to="/about" className="hero-btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="play-icon"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              About Us
            </Link>
          </div>
        </div>

        {/* Right - Floating Card */}
        <div className="hero-visual">
          <div className="floating-card card-organic">
            <div className="card-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary-green)" className="organic-icon"><path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z"/></svg>
              <strong>100% Organic</strong>
            </div>
            <div className="card-body">
              <span>Healthy Plants</span><br/>
              <span>for a Better Tomorrow</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
