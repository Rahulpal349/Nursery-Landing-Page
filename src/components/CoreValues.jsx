import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="container">
        <div className="core-values-bar">
          
          <div className="value-item">
            <div className="value-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" stroke="var(--primary-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h4>Our Mission</h4>
            <p>To promote sustainable agriculture and increase greenery for a better future.</p>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <h4>Our Vision</h4>
            <p>To build a greener planet where nature and people grow together.</p>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/><path d="M12 22V12"/></svg>
            </div>
            <h4>What We Do</h4>
            <p>We grow healthy plants, promote tree plantation, and spread awareness.</p>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h4>Our Promise</h4>
            <p>Quality plants, eco-friendly practices, and a commitment to a greener tomorrow.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
