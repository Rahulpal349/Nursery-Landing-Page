import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PlantGallery.css';

const plants = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    scientific: 'Tropical Plant',
    category: 'indoor',
    price: '₹499',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
  },
  {
    id: 2,
    name: 'Calathea Orbifolia',
    scientific: 'Indoor Plant',
    category: 'indoor',
    price: '₹599',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=400&q=80',
  },
  {
    id: 3,
    name: 'Dracaena Reflexa',
    scientific: 'Air Purifier',
    category: 'indoor',
    price: '₹399',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1614594805320-e6f661ee97b9?w=400&q=80',
  },
  {
    id: 4,
    name: 'Dieffenbachia',
    scientific: 'Decorative',
    category: 'indoor',
    price: '₹449',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=400&q=80',
  },
  {
    id: 5,
    name: 'Snake Plant',
    scientific: 'Sansevieria',
    category: 'indoor',
    price: '₹299',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=400&q=80',
  },
  {
    id: 6,
    name: 'Fiddle Leaf Fig',
    scientific: 'Ficus lyrata',
    category: 'indoor',
    price: '₹799',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1604762512683-9b62fb92823a?w=400&q=80',
  },
  {
    id: 7,
    name: 'Peace Lily',
    scientific: 'Spathiphyllum',
    category: 'flowering',
    price: '₹349',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1599598425947-3300262174c4?w=400&q=80',
  },
  {
    id: 8,
    name: 'Aloe Vera',
    scientific: 'Succulent',
    category: 'succulent',
    price: '₹199',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1596547609652-9cb5d8d7b321?w=400&q=80',
  }
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
  ));
};

const PlantGallery = ({ limit, showViewMore }) => {
  const [filter, setFilter] = useState('all');

  let filteredPlants = filter === 'all' ? plants : plants.filter(p => p.category === filter);
  if (limit) {
    filteredPlants = filteredPlants.slice(0, limit);
  }

  return (
    <section id="plants" className="plant-gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title serif-heading">
            From <span className="text-highlight">Our Roots</span> to Your <br/>Home
          </h2>
          <p className="section-subtitle">
            At Livo, we believe every action counts. By nurturing trees today, we help create a greener, healthier planet for the years ahead.
          </p>
        </div>

        {!limit && (
          <div className="filter-buttons">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter-btn ${filter === 'indoor' ? 'active' : ''}`} onClick={() => setFilter('indoor')}>Indoor</button>
            <button className={`filter-btn ${filter === 'succulent' ? 'active' : ''}`} onClick={() => setFilter('succulent')}>Succulents</button>
            <button className={`filter-btn ${filter === 'flowering' ? 'active' : ''}`} onClick={() => setFilter('flowering')}>Flowering</button>
          </div>
        )}
        
        <div className="plants-grid">
          {filteredPlants.map(plant => (
            <article key={plant.id} className="plant-card">
              <div className="plant-image">
                <img src={plant.image} alt={plant.name} />
              </div>
              <div className="plant-content">
                <h3 className="plant-name">{plant.name}</h3>
                
                <div className="plant-meta">
                  <span className="plant-price">{plant.price}</span>
                  <div className="plant-rating">
                    {renderStars(plant.rating)}
                  </div>
                </div>

                <button className="btn btn-primary buy-btn">Buy Now</button>
              </div>
            </article>
          ))}
        </div>

        {showViewMore && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/plants" className="btn btn-secondary">View All Plants</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlantGallery;
