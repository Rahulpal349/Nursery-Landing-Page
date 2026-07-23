import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-header" style={{ paddingTop: '160px', paddingBottom: '60px', backgroundColor: '#f4f6f1', textAlign: 'center' }}>
        <div className="container">
          <h1 className="serif-heading" style={{ fontSize: '48px', color: '#1a2b22', marginBottom: '15px' }}>Contact <span style={{ color: 'var(--primary-green)' }}>Us</span></h1>
          <p style={{ color: '#556b5f', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>We'd love to hear from you. Get in touch with us for any plant-related questions!</p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
