import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPlants } from '../utils/plantStorage';
import './ProductRelated.css';

const ProductRelated = ({ currentPlantId }) => {
  const [relatedPlants, setRelatedPlants] = useState([]);

  useEffect(() => {
    const allPlants = getPlants();
    // Filter out the current plant and get up to 5 other plants
    const filtered = allPlants.filter(p => p.id !== currentPlantId).slice(0, 5);
    setRelatedPlants(filtered);
  }, [currentPlantId]);

  if (relatedPlants.length === 0) {
    return null;
  }

  return (
    <section className="product-related-section">
      <div className="container">
        
        <div className="related-header">
          <h2 className="serif-heading">You May Also Like</h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
        </div>

        <div className="related-carousel-container">
          
          <button className="carousel-nav-btn prev">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div className="related-grid">
            {relatedPlants.map(plant => (
              <div className="related-card" key={plant.id}>
                <Link to={`/product/${plant.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="rel-img-wrapper">
                    <img src={plant.image} alt={plant.name} />
                  </div>
                </Link>
                <div className="rel-details" style={{justifyContent: 'center', textAlign: 'center'}}>
                  <div className="rel-info">
                    <h3 className="rel-name" style={{fontSize: '15px'}}>{plant.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-nav-btn next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

        </div>

      </div>
    </section>
  );
};

export default ProductRelated;
