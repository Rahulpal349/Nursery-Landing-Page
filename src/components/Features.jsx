import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-bar">
          
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/>
                <path d="M12 22V12" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <div className="feature-text">
              <h4>Wide Variety</h4>
              <p>A wide range of indoor,<br/>outdoor & flowering plants.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 10v12"></path>
                <path d="M12 10a4 4 0 0 0-4-4h-2a6 6 0 0 1 6-6 6 6 0 0 1 6 6h-2a4 4 0 0 0-4 4z"></path>
                <path d="M7 22h10"></path>
                <path d="M5 14h14l-1 8H6z"></path>
              </svg>
            </div>
            <div className="feature-text">
              <h4>Healthy Plants</h4>
              <p>Well-nurtured plants<br/>for a greener life.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <path d="M3.27 6.96L12 12.01l8.73-5.05"></path>
                <path d="M12 22.08V12"></path>
                <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
              </svg>
            </div>
            <div className="feature-text">
              <h4>Eco Friendly</h4>
              <p>Sustainable practices for<br/>a better environment.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <div className="feature-text">
              <h4>Safe Delivery</h4>
              <p>Secure packaging and<br/>on-time delivery.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
