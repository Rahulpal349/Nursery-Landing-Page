import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Visit Our Nursery</h2>
          <p className="section-subtitle">Come explore our greenery in person</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3 className="serif-heading">Location</h3>
              <p className="serif-heading" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Srijoni Nursery</p>
              <p>We are located at the heart of the community. Use the map to find us!</p>
              <a href="https://www.google.com/maps/place/%E0%A6%B8%E0%A7%83%E0%A6%9C%E0%A6%A8%E0%A7%80+%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A6%BF/@22.117839,88.1093455,18z/data=!4m11!1m4!7m3!1m1!1s113753421053000119624!2e2!3m5!1s0x3a02f71bf1f0cfcf:0x5e5cbc645e5b59cb!8m2!3d22.118061!4d88.1102486!16s%2Fg%2F11k4yq8_d5?entry=ttu" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '16px' }}>Open in Google Maps</a>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Contact Us</h3>
              <p>Have questions about a plant or need care advice? We're here to help.</p>
              <p style={{ marginTop: '16px', fontWeight: 'bold' }}>Phone: +917384934653</p>
            </div>
          </div>
          
          <div className="contact-map">
            <iframe 
              src="https://maps.google.com/maps?q=22.118061,88.1102486&hl=en&z=15&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Srijoni Nursery Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
