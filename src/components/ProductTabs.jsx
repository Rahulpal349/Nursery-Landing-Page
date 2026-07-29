import React from 'react';
import './ProductTabs.css';

const ProductTabs = ({ plant }) => {
  return (
    <section className="product-tabs-section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="container">
        <div className="tabs-container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'start' }}>
          
          {/* Main Content */}
          <div className="tab-content" style={{ padding: '0' }}>
            <h3 className="tab-title serif-heading">About {plant.name}</h3>
            <p style={{ lineHeight: '1.8', color: '#555', fontSize: '16px', marginBottom: '20px' }}>
              {plant.careInstructions || 'No description available for this plant.'}
            </p>
          </div>

          {/* Right Box */}
          <div className="benefits-box">
            <h4 className="benefits-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
              Why You'll Love It
            </h4>
            <ul className="benefits-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Super easy to maintain
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Purifies air naturally
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Grows in low light
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Perfect for busy people
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Stylish and modern look
              </li>
            </ul>
            {/* Background leaf decoration */}
            <svg className="bg-leaf" width="100" height="100" viewBox="0 0 24 24" fill="currentColor" opacity="0.05"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
