import React from 'react';
import './PlantCTA.css';

const PlantCTA = () => {
  return (
    <section className="plant-cta-section">
      <div className="container">
        
        <div className="cta-banner">
          
          <div className="cta-content">
            <div className="cta-subtitle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
              LET'S GROW TOGETHER
            </div>
            
            <h2 className="serif-heading cta-title">Bring Greenery to Your Life Today!</h2>
            
            <p className="cta-desc">
              Whether you're a beginner or a plant lover, we have the perfect plant for you. Start your green journey with us.
            </p>

            <button className="cta-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
              Get in Touch
            </button>
          </div>

          <div className="cta-image-wrapper">
            <img src="https://images.unsplash.com/photo-1416879572808-154df6660fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hands holding a plant" className="cta-bg-image" />
            <div className="cta-fade-overlay"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PlantCTA;
