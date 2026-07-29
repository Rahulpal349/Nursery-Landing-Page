import React, { useState } from 'react';
import './ProductTabs.css';

const ProductTabs = ({ plant }) => {
  const [activeTab, setActiveTab] = useState('Description');

  const tabs = [
    { id: 'Description', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg> },
    { id: 'Care Guide', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
    { id: 'Shipping & Returns', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg> },
    { id: 'Reviews (24)', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> }
  ];

  return (
    <section className="product-tabs-section">
      <div className="container">
        <div className="tabs-container">
          
          {/* Left Tabs */}
          <div className="tabs-menu">
            {tabs.map(tab => (
              <button 
                key={tab.id} 
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                {tab.id}
              </button>
            ))}
          </div>

          {/* Middle Content */}
          <div className="tab-content">
            {activeTab === 'Description' && (
              <>
                <h3 className="tab-title serif-heading">About {plant.name}</h3>
                <p>
                  {plant.careInstructions || 'No description available for this plant.'}
                </p>
              </>
            )}
            {activeTab !== 'Description' && (
              <div>
                <h3 className="tab-title serif-heading">{activeTab}</h3>
                <p>Content for {activeTab} is currently being updated.</p>
              </div>
            )}
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
