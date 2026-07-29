import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ plant }) => {
  const [activeImage, setActiveImage] = useState(plant.image);

  useEffect(() => {
    setActiveImage(plant.image);
  }, [plant]);

  const handleBuyNow = () => {
    const phoneNumber = "917384934653"; // The number from the footer
    const message = `I want to buy this ${plant.name}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderFeatureIcon = (type) => {
    switch (type) {
      case 'air':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M12 22v-7l-3-3m6 0l-3 3M12 15a4 4 0 0 0-4-4V7a4 4 0 0 1 8 0v4a4 4 0 0 0-4 4z"></path></svg>;
      case 'maintenance':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
      case 'light':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
      case 'wellbeing':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
      case 'medicinal':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>;
      default:
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"></circle></svg>;
    }
  };

  const renderCareGuide = (visibilityClass) => (
    <div className={`product-care-guide-section ${visibilityClass}`} style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e0e6e2' }}>
      <div className="care-guide-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3 className="serif-heading" style={{ fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
          Care Guide
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
        </h3>
      </div>

      <div className="care-guide-grid">
        
        <div className="care-item">
          <div className="care-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </div>
          <div className="care-text">
            <h4>Light</h4>
            <p>{plant.sunlightRequirement || 'Thrives in low to bright indirect light.'}</p>
          </div>
        </div>

        <div className="care-item">
          <div className="care-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <div className="care-text">
            <h4>Water</h4>
            <p>{plant.wateringFrequency || 'Water sparingly. Allow soil to dry completely.'}</p>
          </div>
        </div>

        <div className="care-item">
          <div className="care-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
          </div>
          <div className="care-text">
            <h4>Temperature</h4>
            <p>{plant.temperatureRange ? `${plant.temperatureRange}°C` : '18°C to 30°C. Keep away from drafts.'}</p>
          </div>
        </div>

        <div className="care-item">
          <div className="care-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </div>
          <div className="care-text">
            <h4>Soil</h4>
            <p>{plant.soilType || 'Well-draining soil mix.'}</p>
          </div>
        </div>

        <div className="care-item">
          <div className="care-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><rect x="7" y="3" width="10" height="18" rx="2" ry="2"></rect><line x1="7" y1="7" x2="17" y2="7"></line><line x1="7" y1="17" x2="17" y2="17"></line></svg>
          </div>
          <div className="care-text">
            <h4>Growth Rate</h4>
            <p>{plant.growthRate || 'Moderate'}</p>
          </div>
        </div>

      </div>
    </div>
  );

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
          <span className="current">{plant.name}</span>
        </div>

        <div className="product-main-grid">
          
          {/* Left: Images */}
          <div className="product-images-col">
            <div className="main-image-wrapper">
              <span className="badge-bestseller">Best Seller</span>
              <button className="zoom-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              </button>
              <img src={activeImage || 'https://images.unsplash.com/photo-1599320294139-4dffeb3de9d6?auto=format&fit=crop&w=800&q=80'} alt={plant.name} />
            </div>
            


          </div>

          {/* Right: Info */}
          <div className="product-info-col">
            <h1 className="product-title serif-heading">
              {plant.name}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
            </h1>
            {plant.scientificName && <p className="product-scientific">{plant.scientificName}</p>}

            <div className="product-features-row">
              {plant.keyFeatures ? plant.keyFeatures.map((feature, idx) => (
                <div className="pd-feature" key={idx}>
                  <div className="pd-icon">{renderFeatureIcon(feature.iconType)}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              )) : (
                <>
                  <div className="pd-feature">
                    <div className="pd-icon">{renderFeatureIcon('air')}</div>
                    <h4>Air Purifying</h4>
                    <p>Improves indoor air quality</p>
                  </div>
                  <div className="pd-feature">
                    <div className="pd-icon">{renderFeatureIcon('maintenance')}</div>
                    <h4>Low Maintenance</h4>
                    <p>Easy to care for everyone</p>
                  </div>
                  <div className="pd-feature">
                    <div className="pd-icon">{renderFeatureIcon('light')}</div>
                    <h4>Low Light Tolerant</h4>
                    <p>Thrives in low to bright light</p>
                  </div>
                  <div className="pd-feature">
                    <div className="pd-icon">{renderFeatureIcon('wellbeing')}</div>
                    <h4>Enhances Wellbeing</h4>
                    <p>Brings peace and positivity</p>
                  </div>
                </>
              )}
            </div>

            <div className="product-actions-row">
              <button className="buy-now-btn" style={{flex: 1, backgroundColor: '#4a7536', color: 'white', padding: '15px 0'}} onClick={handleBuyNow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
                Buy via WhatsApp
              </button>
            </div>


            {/* About Section */}
            <div className="product-about-section" style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e0e6e2' }}>
              <h3 className="serif-heading" style={{ fontSize: '22px', marginBottom: '5px' }}>About the Plant:</h3>
              <p style={{ lineHeight: '1.8', color: '#555', fontSize: '15px', marginBottom: '20px', whiteSpace: 'pre-line' }}>
                {plant.careInstructions || 'No description available for this plant.'}
              </p>
              
              {renderCareGuide('mobile-care-guide')}

              <div className="benefits-box">
                <h4 className="benefits-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
                  Why You'll Love It
                </h4>
                <ul className="benefits-list">
                  {plant.benefits ? plant.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {benefit}
                    </li>
                  )) : (
                    <>
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
                    </>
                  )}
                </ul>
                <svg className="bg-leaf" width="100" height="100" viewBox="0 0 24 24" fill="currentColor" opacity="0.05"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
              </div>
            </div>

          </div>

          {/* Care Guide - Dynamic Positioning via CSS */}
          {renderCareGuide('desktop-care-guide')}

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
