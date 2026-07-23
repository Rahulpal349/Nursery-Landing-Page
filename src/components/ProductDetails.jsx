import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedPot, setSelectedPot] = useState('Plastic Pot');
  const [selectedSize, setSelectedSize] = useState('Small (4-6 inch)');
  const [activeImage, setActiveImage] = useState('https://images.unsplash.com/photo-1599320294139-4dffeb3de9d6?auto=format&fit=crop&w=800&q=80');

  // Snake plant images placeholder
  const thumbnails = [
    'https://images.unsplash.com/photo-1599320294139-4dffeb3de9d6?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1595180425712-4eb2e3919e1c?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=400&q=80'
  ];

  return (
    <section className="product-details-section">
      <div className="container">
        
        <div className="product-breadcrumb">
          <Link to="/">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
            Home
          </Link>
          <span className="separator">&gt;</span>
          <Link to="/plants">Our Plants</Link>
          <span className="separator">&gt;</span>
          <Link to="/plants">Indoor Plants</Link>
          <span className="separator">&gt;</span>
          <span className="current">Snake Plant</span>
        </div>

        <div className="product-main-grid">
          
          {/* Left: Images */}
          <div className="product-images-col">
            <div className="main-image-wrapper">
              <span className="badge-bestseller">Best Seller</span>
              <button className="zoom-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              </button>
              <img src={activeImage} alt="Snake Plant" />
            </div>

            <div className="thumbnail-slider">
              <button className="thumb-nav-btn prev">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <div className="thumbnails-container">
                {thumbnails.map((thumb, index) => (
                  <div 
                    key={index} 
                    className={`thumb-item ${activeImage === thumb ? 'active' : ''}`}
                    onClick={() => setActiveImage(thumb)}
                  >
                    <img src={thumb} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button className="thumb-nav-btn next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>

          {/* Right: Info */}
          <div className="product-info-col">
            <h1 className="product-title serif-heading">
              Snake Plant
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
            </h1>
            <p className="product-scientific">Sansevieria trifasciata</p>



            <p className="product-short-desc">
              The Snake Plant is a hardy, low-maintenance indoor plant known for its tall, sword-like leaves and air-purifying qualities. Perfect for homes, offices, and beginners!
            </p>

            <div className="product-features-row">
              <div className="pd-feature">
                <div className="pd-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M12 22v-7l-3-3m6 0l-3 3M12 15a4 4 0 0 0-4-4V7a4 4 0 0 1 8 0v4a4 4 0 0 0-4 4z"></path></svg></div>
                <h4>Air Purifying</h4>
                <p>Improves indoor air quality</p>
              </div>
              <div className="pd-feature">
                <div className="pd-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M12 22v-7l-3-3m6 0l-3 3M12 15a4 4 0 0 0-4-4V7a4 4 0 0 1 8 0v4a4 4 0 0 0-4 4z"></path></svg></div>
                <h4>Low Maintenance</h4>
                <p>Easy to care for everyone</p>
              </div>
              <div className="pd-feature">
                <div className="pd-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></div>
                <h4>Low Light Tolerant</h4>
                <p>Thrives in low to bright light</p>
              </div>
              <div className="pd-feature">
                <div className="pd-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
                <h4>Enhances Wellbeing</h4>
                <p>Brings peace and positivity</p>
              </div>
            </div>

            <div className="product-options">
              <div className="option-group">
                <h4>Select Pot Type</h4>
                <div className="option-buttons">
                  {['Plastic Pot', 'Ceramic Pot', 'Terracotta Pot', 'Decorative Pot'].map(pot => (
                    <button 
                      key={pot} 
                      className={`opt-btn ${selectedPot === pot ? 'active' : ''}`}
                      onClick={() => setSelectedPot(pot)}
                    >
                      {pot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <h4>Select Size</h4>
                <div className="option-buttons">
                  {['Small (4-6 inch)', 'Medium (6-8 inch)', 'Large (8-10 inch)'].map(size => (
                    <button 
                      key={size} 
                      className={`opt-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="product-actions-row">
              <div className="qty-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              
              <button className="add-cart-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                Add to Cart
              </button>
              
              <button className="buy-now-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Buy Now
              </button>
            </div>

            <div className="trust-badges">
              <div className="badge-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Secure Packaging
              </div>
              <div className="badge-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                Fast Delivery
              </div>
              <div className="badge-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                Easy Returns
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
