import React, { useState } from 'react';
import './PlantGallery.css';

const plants = [
  {
    id: 1,
    name: 'Tulsi (Holy Basil)',
    scientific: 'Ocimum tenuiflorum',
    category: 'sacred',
    tags: ['☀️ Full Sun', '💧 Daily'],
    description: 'A sacred plant in Hindu belief, revered for its medicinal properties and spiritual significance. Perfect for courtyards and sunny windowsills.',
    image: 'https://images.unsplash.com/photo-1627926188210-91c62f280a32?w=400&h=400&fit=crop',
    badge: 'Sacred',
    badgeClass: 'medicinal'
  },
  {
    id: 2,
    name: 'Marigold',
    scientific: 'Tagetes',
    category: 'flowering',
    tags: ['☀️ Full Sun', '💧 Moderate'],
    description: 'Vibrant and festive, Marigolds are deeply ingrained in Indian culture for decorations and pujas. Very easy to grow and bloom profusely.',
    image: 'https://images.unsplash.com/photo-1570535313936-2ee960613292?w=400&h=400&fit=crop',
    badge: 'Festive',
    badgeClass: 'popular'
  },
  {
    id: 3,
    name: 'Neem',
    scientific: 'Azadirachta indica',
    category: 'outdoor',
    tags: ['☀️ Full Sun', '💧 Weekly'],
    description: 'Known as the village pharmacy, Neem trees provide shade, pest control, and a multitude of health benefits. Best for outdoor gardens.',
    image: 'https://images.unsplash.com/photo-1681729377464-67253bbafe75?w=400&h=400&fit=crop',
    badge: 'Medicinal',
    badgeClass: 'medicinal'
  },
  {
    id: 4,
    name: 'Money Plant',
    scientific: 'Epipremnum aureum',
    category: 'indoor',
    tags: ['🌤 Indirect Light', '💧 Weekly'],
    description: 'A classic Indian household favorite, believed to bring prosperity. Exceptionally low maintenance and great for purifying indoor air.',
    image: 'https://images.unsplash.com/photo-1600129215037-1d6f54c93542?w=400&h=400&fit=crop',
    badge: 'Prosperity',
    badgeClass: 'easy-care'
  },
  {
    id: 5,
    name: 'Jasmine (Mogra)',
    scientific: 'Jasminum sambac',
    category: 'flowering',
    tags: ['☀️ Full Sun', '💧 Regular'],
    description: 'Renowned for its intoxicatingly sweet fragrance. The beautiful white flowers are often used in garlands and religious offerings.',
    image: 'https://images.unsplash.com/photo-1634563452425-451e05a8b79b?w=400&h=400&fit=crop',
    badge: 'Fragrant',
    badgeClass: 'fragrant'
  },
  {
    id: 6,
    name: 'Areca Palm',
    scientific: 'Dypsis lutescens',
    category: 'indoor',
    tags: ['🌤 Indirect Light', '💧 Moderate'],
    description: 'Adds a tropical feel to Indian living rooms. Excellent air purifier and safe for pets. Thrives in warm, humid conditions.',
    image: 'https://images.unsplash.com/photo-1620127252536-1e64627d3c33?w=400&h=400&fit=crop',
    badge: 'Air Purifier',
    badgeClass: 'air-purifier'
  },
  {
    id: 7,
    name: 'Hibiscus',
    scientific: 'Hibiscus rosa-sinensis',
    category: 'flowering',
    tags: ['☀️ Full Sun', '💧 Regular'],
    description: 'Produces large, striking flowers often offered to deities like Goddess Kali and Lord Ganesha. Requires plenty of sunlight.',
    image: 'https://images.unsplash.com/photo-1620986510309-8b80b271d187?w=400&h=400&fit=crop',
    badge: 'Beautiful',
    badgeClass: 'elegant'
  },
  {
    id: 8,
    name: 'Curry Leaf Plant',
    scientific: 'Murraya koenigii',
    category: 'sacred',
    tags: ['☀️ Full Sun', '💧 Moderate'],
    description: 'An essential herb in Indian cooking. This aromatic plant is relatively easy to grow in pots or in the ground.',
    image: 'https://images.unsplash.com/photo-1614761019688-6c84c1cc3db6?w=400&h=400&fit=crop',
    badge: 'Culinary',
    badgeClass: 'compact'
  }
];

const PlantGallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredPlants = filter === 'all' ? plants : plants.filter(p => p.category === filter);

  return (
    <section id="plants" className="plant-gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Plant Collection</h2>
          <p className="section-subtitle">Handpicked varieties rooted in Indian tradition</p>
        </div>

        <div className="filter-buttons">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn ${filter === 'indoor' ? 'active' : ''}`} onClick={() => setFilter('indoor')}>Indoor</button>
          <button className={`filter-btn ${filter === 'outdoor' ? 'active' : ''}`} onClick={() => setFilter('outdoor')}>Outdoor</button>
          <button className={`filter-btn ${filter === 'flowering' ? 'active' : ''}`} onClick={() => setFilter('flowering')}>Flowering</button>
          <button className={`filter-btn ${filter === 'sacred' ? 'active' : ''}`} onClick={() => setFilter('sacred')}>Sacred & Useful</button>
        </div>
        
        <div className="plants-grid">
          {filteredPlants.map(plant => (
            <article key={plant.id} className="plant-card">
              <div className="plant-image">
                <img src={plant.image} alt={plant.name} />
                <div className={`plant-badge ${plant.badgeClass}`}>{plant.badge}</div>
              </div>
              <div className="plant-content">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-scientific">{plant.scientific}</p>
                <div className="plant-tags">
                  {plant.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <p className="plant-description">{plant.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantGallery;
