import React from 'react';
import './ProductRelated.css';

const relatedPlants = [
  { id: 1, name: 'ZZ Plant', price: '₹499', image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Peace Lily', price: '₹499', image: 'https://images.unsplash.com/photo-1595180425712-4eb2e3919e1c?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Aloe Vera', price: '₹299', image: 'https://images.unsplash.com/photo-1555393081-377038f40776?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Pothos (Money Plant)', price: '₹199', image: 'https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Areca Palm', price: '₹599', image: 'https://images.unsplash.com/photo-1599320294139-4dffeb3de9d6?auto=format&fit=crop&w=400&q=80' },
];

const ProductRelated = () => {
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
                <div className="rel-img-wrapper">
                  <img src={plant.image} alt={plant.name} />
                </div>
                <div className="rel-details">
                  <div className="rel-info">
                    <h3 className="rel-name">{plant.name}</h3>
                  </div>
                  <div className="rel-actions">
                    <button className="icon-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </button>
                    <button className="icon-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
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
