import React from 'react';
import './PlantCategories.css';

const categories = [
  { id: 1, name: 'Indoor Plants', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { id: 2, name: 'Outdoor Plants', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
  { id: 3, name: 'Flowering Plants', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg> },
  { id: 4, name: 'Succulents & Cacti', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> },
  { id: 5, name: 'Herbal Plants', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> },
  { id: 6, name: 'Air Purifying Plants', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="1.5"><path d="M12 2v2m5.66 1.34l-1.41 1.41M22 12h-2m-1.34 5.66l-1.41-1.41M12 22v-2m-5.66-1.34l1.41-1.41M2 12h2m1.34-5.66l1.41 1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path></svg> }
];

const PlantCategories = () => {
  return (
    <section className="plant-categories-section">
      <div className="container">
        
        <div className="section-title-wrapper">
          <div className="title-line"></div>
          <div className="title-content">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--primary-green)"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h2 className="serif-heading">Explore by Category</h2>
          </div>
          <div className="title-line"></div>
        </div>

        <div className="categories-grid">
          {categories.map(cat => (
            <div className="category-card" key={cat.id}>
              <div className="cat-icon-wrap">
                {cat.icon}
              </div>
              <h3 className="cat-name">{cat.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlantCategories;
