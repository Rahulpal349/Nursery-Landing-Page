import React from 'react';
import './AboutMission.css';

const AboutMission = () => {
  return (
    <section className="about-mission-section">
      <div className="container">
        
        <div className="mission-grid">
          
          {/* Left Collage Side */}
          <div className="collage-wrapper">
            
            <div className="collage-images">
              <img src="https://images.unsplash.com/photo-1416879572808-154df6660fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Hands holding soil" className="img-top-left" />
              <img src="https://images.unsplash.com/photo-1585247226801-bc613c441316?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Greenhouse" className="img-right-tall" />
              <img src="https://images.unsplash.com/photo-1596547609652-9cb5d8d8ceb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Small pots" className="img-bottom-left" />
            </div>

            {/* Circular Badge */}
            <div className="collage-badge">
              <div className="badge-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div className="badge-text-circular">
                  {/* Simplification: Just regular text for standard CSS implementation, or we can use SVG text paths. Using standard text for layout. */}
                  <span>Plant Today</span>
                  <span>Better Tomorrow</span>
                </div>
              </div>
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
                <div className="stat-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
                </div>
                <div className="stat-info">
                  <h3>500+</h3>
                  <p>Varieties of Plants</p>
                </div>
              </div>

              <div className="mission-stat-item">
                <div className="stat-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="stat-info">
                  <h3>2000+</h3>
                  <p>Happy Customers</p>
                </div>
              </div>

              <div className="mission-stat-item">
                <div className="stat-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                </div>
                <div className="stat-info">
                  <h3>5+</h3>
                  <p>Years of Experience</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMission;
