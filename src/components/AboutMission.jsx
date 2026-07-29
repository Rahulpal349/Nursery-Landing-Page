import React from 'react';
import './AboutMission.css';

const AboutMission = () => {
  return (
    <section className="about-mission-section">
      <div className="container">
        
        <div className="mission-grid">
          
          {/* Left Collage Side */}
          <div className="collage-wrapper">
            {/* The single collage image is applied via CSS as a background image */}
            <div className="collage-center-text">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 2C16 6 16 18 12 22C8 18 8 6 12 2Z"/></svg>
              <span>Plant Today</span>
              <span>Better Tomorrow</span>
            </div>
          </div>

          {/* Right Text & Stats Side */}
          <div className="mission-content">
            
            <div className="mission-header">
              <div className="mission-subtitle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                TOGETHER FOR A GREENER TOMORROW
              </div>
              <h2 className="serif-heading mission-title">
                Every Plant<br/>
                Makes a <span className="text-highlight-green">Difference</span>
              </h2>
              <p className="mission-text">
                At Srijoni Nursery, we believe that every plant has the power to change the environment and the lives around us. Let's work together to create a cleaner, healthier, and more sustainable world.
              </p>
            </div>

            {/* Stats Row */}
            <div className="mission-stats">
              
              <div className="mission-stat-item">
                <div className="stat-top">
                  <div className="stat-icon-wrap">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#3a5a22">
                      <rect x="4" y="20" width="16" height="2" rx="1" />
                      <rect x="11" y="6" width="2" height="14" rx="1" />
                      <path d="M12 2 Q14.5 7 12 12 Q9.5 7 12 2 Z" />
                      <path d="M11 16 Q5 16 3.5 10 Q8 10 11 16 Z" />
                      <path d="M13 13 Q19 13 20.5 7 Q16 7 13 13 Z" />
                    </svg>
                  </div>
                  <h3>500+</h3>
                </div>
                <p>Varieties of Plants</p>
              </div>

              <div className="mission-stat-item">
                <div className="stat-top">
                  <div className="stat-icon-wrap">
                    <svg width="44" height="32" viewBox="0 0 24 24" fill="#3a5a22">
                      <circle cx="6.5" cy="9.5" r="2.5" />
                      <path d="M6.5 13.5C4 13.5 2 15.5 2 18v2h6v-6.5z" />
                      <circle cx="17.5" cy="9.5" r="2.5" />
                      <path d="M17.5 13.5C20 13.5 22 15.5 22 18v2h-6v-6.5z" />
                      <circle cx="12" cy="7" r="3.5" stroke="#fdfdfd" strokeWidth="1.5" />
                      <path d="M12 12C8.5 12 5.5 14.5 5.5 18.5V21h13v-2.5C18.5 14.5 15.5 12 12 12Z" stroke="#fdfdfd" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3>2000+</h3>
                </div>
                <p>Happy Customers</p>
              </div>

              <div className="mission-stat-item">
                <div className="stat-top">
                  <div className="stat-icon-wrap">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C7.5 2 4 5.5 4 10C4 11.3 4.4 12.5 5 13.5C3.8 14 3 15.3 3 16.8C3 18.5 4.5 20 6.2 20H17.8C19.5 20 21 18.5 21 16.8C21 15.3 20.2 14 19 13.5C19.6 12.5 20 11.3 20 10C20 5.5 16.5 2 12 2Z" fill="#3a5a22"/>
                      <path d="M11.5 16L10.5 22H9.5V23H14.5V22H13.5L12.5 16Z" fill="#e0e5c1"/>
                    </svg>
                  </div>
                  <h3>5+</h3>
                </div>
                <p>Years of Experience</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMission;
