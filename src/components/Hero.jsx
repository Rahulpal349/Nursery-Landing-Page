import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title serif-heading">
            Your Tree <br/>
            Our <span className="text-highlight">Future</span>
          </h1>
          <p className="hero-description">
            We make it easy to grow a future where nature and people thrive together. Start planting today, and watch tomorrow flourish.
          </p>
          <div className="hero-actions">
            <Link to="/plants" className="btn btn-primary hero-btn">
              Start Exploring
            </Link>
            <button className="play-btn" aria-label="Play Video">▶</button>
          </div>
        </div>

        {/* Right Image with Floating Cards */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800&q=80" 
              alt="Beautiful Potted Plant" 
              className="hero-main-img" 
            />
            
            {/* Decorative orbit line */}
            <div className="orbit-ring"></div>
            
            {/* Floating Card 1 */}
            <div className="floating-card card-wetness">
              <span className="icon">💧</span>
              <div className="info">
                <strong>Wetness</strong>
                <span>90%</span>
              </div>
            </div>
            
            {/* Floating Card 2 */}
            <div className="floating-card card-daylight">
              <span className="icon">☀️</span>
              <div className="info">
                <strong>DayLight</strong>
                <span>9 to hours 10 hours</span>
              </div>
            </div>

            {/* Small floating plant icons */}
            <div className="floating-plant-icon pos-1">🌱</div>
            <div className="floating-plant-icon pos-2">🌵</div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
