import React from 'react';
import { Link } from 'react-router-dom';
import './PlantCollection.css';

const collections = [
  {
    id: 1,
    title: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1477554193778-9562c28588c0?auto=format&fit=crop&w=400&q=80',
    link: '/plants?category=indoor'
  },
  {
    id: 2,
    title: 'Outdoor Plants',
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=400&q=80',
    link: '/plants?category=outdoor'
  },
  {
    id: 3,
    title: 'Flowering Plants',
    image: 'https://images.unsplash.com/photo-1508022057371-4f937727e447?auto=format&fit=crop&w=400&q=80',
    link: '/plants?category=flowering'
  },
  {
    id: 4,
    title: 'Succulents & Cacti',
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=400&q=80',
    link: '/plants?category=succulents'
  },
  {
    id: 5,
    title: 'Herbal Plants',
    image: 'https://images.unsplash.com/photo-1595180425712-4eb2e3919e1c?auto=format&fit=crop&w=400&q=80',
    link: '/plants?category=herbal'
  },
  {
    id: 6,
    title: 'Air Purifying Plants',
    image: 'https://images.unsplash.com/photo-1599320294139-4dffeb3de9d6?auto=format&fit=crop&w=400&q=80',
    link: '/plants?category=air-purifying'
  }
];

const PlantCollection = () => {
  return (
    <section className="plant-collection-section">
      <div className="container">
        
        <div className="collection-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)" className="header-leaf"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
          <h2 className="serif-heading">Our Plants Collection</h2>
          <p>Find the perfect plants for your home, garden, or office.</p>
        </div>

        <div className="collection-grid">
          {collections.map(item => (
            <div className="collection-card" key={item.id}>
              <div className="collection-img-wrap">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="collection-info">
                <h3>{item.title}</h3>
                <Link to={item.link} className="explore-link">
                  Explore <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlantCollection;
