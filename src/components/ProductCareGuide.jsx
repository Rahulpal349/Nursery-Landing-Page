import React from 'react';
import './ProductCareGuide.css';

const ProductCareGuide = () => {
  return (
    <section className="product-care-guide-section">
      <div className="container">
        
        <div className="care-guide-header">
          <h2 className="serif-heading">Care Guide</h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
        </div>

        <div className="care-guide-grid">
          
          <div className="care-item">
            <div className="care-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </div>
            <div className="care-text">
              <h4>Light</h4>
              <p>Thrives in low to bright indirect light. Can tolerate low light conditions.</p>
            </div>
          </div>

          <div className="care-item">
            <div className="care-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <div className="care-text">
              <h4>Water</h4>
              <p>Water sparingly. Allow soil to dry completely between waterings.</p>
            </div>
          </div>

          <div className="care-item">
            <div className="care-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
            </div>
            <div className="care-text">
              <h4>Temperature</h4>
              <p>Best grows in 18°C to 30°C. Keep away from cold drafts and extreme heat.</p>
            </div>
          </div>

          <div className="care-item">
            <div className="care-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </div>
            <div className="care-text">
              <h4>Soil</h4>
              <p>Well-draining soil mix with sand or perlite for best results.</p>
            </div>
          </div>

          <div className="care-item">
            <div className="care-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><rect x="7" y="3" width="10" height="18" rx="2" ry="2"></rect><line x1="7" y1="7" x2="17" y2="7"></line><line x1="7" y1="17" x2="17" y2="17"></line></svg>
            </div>
            <div className="care-text">
              <h4>Fertilizer</h4>
              <p>Feed once a month during growing season (spring and summer).</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductCareGuide;
