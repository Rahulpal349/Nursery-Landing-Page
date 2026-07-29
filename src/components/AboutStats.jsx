import React from 'react';
import { Link } from 'react-router-dom';
import './AboutStats.css';

const AboutStats = () => {
  return (
    <section className="about-stats-section">
      <div className="container">
        <div className="about-stats-grid">
          
          {/* Left Dark Green Box */}
          <div className="about-box">
            <div className="about-box-content">
              <div className="about-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
                About Us
              </div>
              <h2 className="serif-heading about-title">
                Growing Green,<br/>
                Growing <span className="text-highlight-light">Together.</span>
              </h2>
              <p className="about-text">
                At Srijoni Nursery, we believe that plants bring happiness, health, and harmony. We are committed to providing the best quality plants and promoting environmental sustainability.
              </p>
              <Link to="/about" className="btn-outline-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
                Know More About Us
              </Link>
            </div>
          </div>

          {/* Right Light Green Box (Stats) */}
          <div className="stats-box">
            <div className="stats-grid">
              
              <div className="stat-item">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#3b6641" className="stat-icon">
                  <path d="M12 2C16 6 16 18 12 22C8 18 8 6 12 2Z"/>
                </svg>
                <h3>100+</h3>
                <p>Varieties of Plants</p>
              </div>

              <div className="stat-item">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#3b6641" className="stat-icon">
                  <path d="M11 2A10 10 0 0 0 11 22C12 16 12 8 11 2Z"/>
                  <path d="M13 2A10 10 0 0 1 13 22C12 16 12 8 13 2Z"/>
                </svg>
                <h3>500+</h3>
                <p>Happy Customers</p>
              </div>

              <div className="stat-item">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#3b6641" className="stat-icon">
                  <path d="M12 2C16 6 16 18 12 22C8 18 8 6 12 2Z"/>
                </svg>
                <h3>5+</h3>
                <p>Years of Experience</p>
              </div>

              <div className="stat-item">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#3b6641" className="stat-icon">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0A12 12 0 1 0 12 24A12 12 0 1 0 12 0ZM12 3C16 7 16 17 12 21C8 17 8 7 12 3Z"/>
                </svg>
                <h3>100%</h3>
                <p>Organic & Natural</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStats;
