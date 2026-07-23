import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background-overlay"></div>
      <div className="container hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-tagline">
            <span className="tagline-line"></span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="tagline-icon" stroke="currentColor" strokeWidth="2">
              <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="tagline-text">NURTURE. GROW. THRIVE.</span>
          </div>

          <h1 className="hero-title serif-heading">
            Bringing Nature <br/>
            Closer to <span className="text-highlight">You<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="highlight-leaf"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </h1>
          
          <p className="hero-description">
            Explore a wide variety of healthy, vibrant plants<br/>
            that bring life, beauty, and positivity to your space.
          </p>
          
          <div className="hero-actions">
            <Link to="/plants" className="hero-btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Explore Plants
            </Link>
            <Link to="/about" className="hero-btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="play-icon"><circle cx="12" cy="12" r="10" fill="none" strokeWidth="2"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              About Us
            </Link>
          </div>
        </div>

        {/* Right Image with Floating Cards */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1416879572808-154df6660fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Beautiful Potted Plants" 
              className="hero-main-img" 
            />
            
            {/* Decorative orbit/circle line */}
            <div className="orbit-ring"></div>
            
            {/* Floating Organic Card */}
            <div className="floating-card card-organic">
              <div className="card-header">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#76b852" strokeWidth="2" className="organic-icon"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <strong>100% Organic</strong>
              </div>
              <div className="card-body">
                <span>Healthy Plants</span><br/>
                <span>for a Better Tomorrow</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
