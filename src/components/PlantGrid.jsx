import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlants } from '../utils/plantStorage';
import './PlantGrid.css';

const PlantGrid = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch plants from localStorage when the component mounts
    const allPlants = getPlants();
    setPlants(allPlants);
  }, []);

  return (
    <section className="plant-grid-section">
      <div className="container">
        
        <div className="section-title-wrapper">
          <div className="title-line"></div>
          <div className="title-content text-center">
            <h2 className="serif-heading">Our Plant Collection</h2>
            <p className="grid-subtitle">Handpicked plants for your home, garden, and workspace.</p>
          </div>
          <div className="title-line"></div>
        </div>

        <div className="products-grid">
          {plants.map(plant => (
            <div className="product-card" key={plant.id}>
              <Link to={`/product/${plant.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="product-img-wrapper">
                  {plant.isNew && <span className="badge-new">New</span>}
                  <img src={plant.image || 'https://images.unsplash.com/photo-1599320294139-4dffeb3de9d6?auto=format&fit=crop&w=400&q=80'} alt={plant.name} />
                </div>
              </Link>
              <div className="product-details" style={{ padding: '15px' }}>
                <div className="product-info" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <h3 className="product-name" style={{ margin: 0, fontSize: '16px', fontWeight: '600', textAlign: 'center' }}>{plant.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlantGrid;
