import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="section-label">About the Founder</span>
            <h2>Cultivating a Greener Future</h2>
            <p className="lead">
              Hi, I'm <strong>Sayantan Das</strong>, a final-year B.Sc. Agriculture student with a deep passion for agriculture, environmental sustainability, and nature conservation.
            </p>
            <p>
              I believe that a greener planet leads to a healthier future, and I am committed to promoting sustainable farming practices and increasing greenery through tree plantation and environmental awareness.
            </p>
            <p>
              My goal is to contribute to a cleaner, healthier, and more sustainable world by combining scientific agricultural knowledge with practical solutions that benefit both people and the environment. I am always eager to learn, grow, and make a positive impact on society through agriculture.
            </p>
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🎓</span>
                <span>B.Sc. Agriculture</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌱</span>
                <span>Sustainable Practices</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌍</span>
                <span>Nature Conservation</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-frame">
              {/* Replace with a more appropriate local context image if needed, or keeping a nice agricultural field/nursery image */}
              <img src="https://images.unsplash.com/photo-1599839619722-39751411ea63?w=600&h=700&fit=crop" alt="Agriculture and nature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
