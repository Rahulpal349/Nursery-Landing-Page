import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-hero-section">
      <div className="about-hero-container">
        
        {/* Left Content Side */}
        <div className="about-hero-content">
          <div className="about-hero-header">
            <h1 className="serif-heading">
              About Us
              <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--primary-green)" className="title-leaf"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </h1>
            <p className="about-subtitle">Growing Green, Growing Better</p>
          </div>

          <p className="about-intro">
            Hi, I'm <strong>Sayantan Das</strong>, a final-year B.Sc. Agriculture student with a deep passion for agriculture, environmental sustainability, and nature conservation.
          </p>

          <div className="about-bullets">
            
            <div className="bullet-item">
              <div className="bullet-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <p>I believe that a <strong>greener planet</strong> leads to a healthier future, and I am committed to promoting sustainable farming practices and increasing greenery through tree plantation and environmental awareness.</p>
            </div>

            <div className="bullet-item">
              <div className="bullet-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M12 22v-7l-3-3m6 0l-3 3M12 15a4 4 0 0 0-4-4V7a4 4 0 0 1 8 0v4a4 4 0 0 0-4 4z"></path><path d="M3 15h18"></path></svg>
              </div>
              <p>My goal is to contribute to a <strong>cleaner, healthier</strong>, and more <strong>sustainable world</strong> by combining scientific agricultural knowledge with practical solutions that benefit both people and the environment.</p>
            </div>

            <div className="bullet-item">
              <div className="bullet-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M12 2v2m5.66 1.34l-1.41 1.41M22 12h-2m-1.34 5.66l-1.41-1.41M12 22v-2m-5.66-1.34l1.41-1.41M2 12h2m1.34-5.66l1.41 1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path></svg>
              </div>
              <p>I am always eager to <strong>learn, grow</strong>, and make a positive impact on society through agriculture.</p>
            </div>

          </div>
        </div>

        {/* Right Image Side */}
        <div className="about-hero-image-side">
          <div className="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1596766099307-2ebdd4c23db1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Sayantan Das - B.Sc. Agriculture Student" 
              className="profile-img"
            />
            {/* Soft Edge Overlay */}
            <div className="soft-edge-overlay"></div>
            
            {/* Wooden Sign Overlay */}
            <div className="wooden-sign">
              <h3 className="cursive-text">Sayantan Das</h3>
              <p>B.Sc. Agriculture<br/>Final Year Student</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
