import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-tagline">Welcome to</span>
        <h1 className="hero-title bengali-text">সৃজনী নার্সারি</h1>
        <p className="hero-subtitle">Cultivating Nature's Beauty</p>
        <p className="hero-description">
          Discover a vibrant collection of Indian plants, from sacred Tulsi to radiant Marigolds. 
          Let us help you bring the beauty and tradition of nature into your home and garden.
        </p>
        <a href="#plants" className="btn btn-primary">Explore Collection</a>
      </div>
      
      {/* Decorative elements representing traditional motifs */}
      <div className="hero-decoration">
        <div className="floating-flower flower-1">🌺</div>
        <div className="floating-flower flower-2">🌿</div>
        <div className="floating-flower flower-3">🪷</div>
      </div>
    </section>
  );
};

export default Hero;
