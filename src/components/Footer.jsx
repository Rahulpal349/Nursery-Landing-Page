import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-text serif-heading" style={{ color: '#fff' }}>Srijoni</span>
              <span className="logo-dot" style={{ color: 'var(--primary-green)' }}>.</span>
            </Link>
            <p>Cultivating nature's beauty and promoting environmental sustainability through every plant we nurture.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/plants">Our Plants</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>📍 Srijoni Nursery</p>
            <p>📞 +917384934653</p>
            <p>✉️ sayantan@gmail.com</p>
          </div>
          <div className="footer-hours">
            <h4>Visiting Hours</h4>
            <p>Monday - Saturday: 8am - 6pm</p>
            <p>Sunday: 9am - 2pm</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Srijoni Nursery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
