import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPlants } from '../utils/plantStorage';
import './PlantGrid.css';

const PlantGrid = () => {
  const [plants, setPlants] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Fetch plants from localStorage when the component mounts
    const allPlants = getPlants();
    setPlants(allPlants);
  }, []);

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchQuery) ||
    plant.shortDescription?.toLowerCase().includes(searchQuery) ||
    plant.category?.toLowerCase().includes(searchQuery)
  );

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
          {filteredPlants.length > 0 ? filteredPlants.map(plant => (
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
          )) : (
            <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
              <h3 style={{ marginBottom: '20px' }}>No plants found matching "{searchParams.get('search')}"</h3>
              <Link to="/plants" className="primary-btn" style={{ display: 'inline-flex', width: 'auto' }}>View All Plants</Link>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default PlantGrid;
