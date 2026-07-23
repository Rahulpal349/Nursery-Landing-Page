import React from 'react';
import './PlantGrid.css';

const plants = [
  { id: 1, name: 'Fiddle Leaf Fig', price: '₹999', isNew: true, image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Areca Palm', price: '₹599', isNew: false, image: 'https://images.unsplash.com/photo-1599320294139-4dffeb3de9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Peace Lily', price: '₹499', isNew: true, image: 'https://images.unsplash.com/photo-1595180425712-4eb2e3919e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Jade Plant', price: '₹399', isNew: false, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Snake Plant', price: '₹449', isNew: true, image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Bougainvillea', price: '₹499', isNew: false, image: 'https://images.unsplash.com/photo-1508022057371-4f937727e447?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 7, name: 'Hibiscus', price: '₹399', isNew: true, image: 'https://images.unsplash.com/photo-1524072962259-04f23a9acd1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 8, name: 'Aloe Vera', price: '₹299', isNew: false, image: 'https://images.unsplash.com/photo-1555393081-377038f40776?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 9, name: 'Mint Plant', price: '₹199', isNew: false, image: 'https://images.unsplash.com/photo-1628151241198-dff718107ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 10, name: 'Rubber Plant', price: '₹699', isNew: true, image: 'https://images.unsplash.com/photo-1620125712236-4177b9415668?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
];

const PlantGrid = () => {
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
              <div className="product-img-wrapper">
                {plant.isNew && <span className="badge-new">New</span>}
                <img src={plant.image} alt={plant.name} />
              </div>
              <div className="product-details">
                <div className="product-info">
                  <h3 className="product-name">{plant.name}</h3>
                  <span className="product-price">{plant.price}</span>
                </div>
                <div className="product-actions">
                  <button className="icon-btn cart-btn" aria-label="Add to cart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  </button>
                  <button className="icon-btn heart-btn" aria-label="Wishlist">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-container">
          <button className="view-more-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
            View More Plants
          </button>
        </div>

      </div>
    </section>
  );
};

export default PlantGrid;
