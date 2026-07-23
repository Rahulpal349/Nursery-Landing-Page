import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          
          <div className="newsletter-content">
            <h2 className="serif-heading">Stay Green. Stay Updated.</h2>
            <p>Subscribe to get the latest updates, offers, and planting tips.</p>
          </div>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="subscribe-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              Subscribe
            </button>
          </form>

          {/* Decorative Leaves */}
          <div className="leaf-decor left-decor">
            <img src="https://images.unsplash.com/photo-1596547609652-9cb5d8d8ceb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Plant Decoration" />
          </div>
          <div className="leaf-decor right-decor">
            <img src="https://images.unsplash.com/photo-1596547609652-9cb5d8d8ceb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Plant Decoration" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
