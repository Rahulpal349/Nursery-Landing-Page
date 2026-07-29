import React from 'react';
import './PlantGrid.css';

const plants = [
  { id: 1, name: 'Fiddle Leaf Fig', price: '₹999', isNew: true, image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Areca Palm', price: '₹599', isNew: false, image: '/images/plants/areca_palm.png' },
  { id: 3, name: 'Peace Lily', price: '₹499', isNew: true, image: '/images/plants/peace_lily.png' },
  { id: 4, name: 'Jade Plant', price: '₹399', isNew: false, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Snake Plant', price: '₹449', isNew: true, image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Bougainvillea', price: '₹499', isNew: false, image: '/images/plants/bougainvillea.png' },
  { id: 7, name: 'Hibiscus', price: '₹399', isNew: true, image: '/images/plants/hibiscus.png' },
  { id: 8, name: 'Aloe Vera', price: '₹299', isNew: false, image: '/images/plants/aloe_vera.png' },
  { id: 9, name: 'Mint Plant', price: '₹199', isNew: false, image: '/images/plants/mint_plant.png' },
  { id: 10, name: 'Rubber Plant', price: '₹699', isNew: true, image: '/images/plants/rubber_plant.png' },
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
