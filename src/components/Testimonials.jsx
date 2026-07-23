import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "The plants I received were fresh, healthy, and beautifully packed. Highly recommended!",
    name: "Ananya D.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    text: "Amazing variety and excellent customer service. My go-to nursery now!",
    name: "Rohit S.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    text: "Beautiful plants, reasonable prices, and timely delivery. Very happy!",
    name: "Priya M.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        
        <div className="section-header center">
          <h2 className="serif-heading">What Our Customers Say</h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)" className="header-leaf"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"/></svg>
        </div>

        <div className="testimonials-wrapper">
          <button className="nav-btn prev-btn" aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div className="testimonials-grid">
            {testimonials.map(item => (
              <div className="testimonial-card" key={item.id}>
                <div className="quote-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)" opacity="0.2"><path d="M14.017 21v-7.391c0-5.714 4.137-9.539 9.983-9.539h.034v3.136h-.066c-2.455 0-4.992.836-4.992 4.143v2.859h5v6.791h-9.959v.001zm-14.017 0v-7.391c0-5.714 4.137-9.539 9.983-9.539h.034v3.136h-.066c-2.455 0-4.992.836-4.992 4.143v2.859h5v6.791h-9.959v.001z"/></svg>
                </div>
                <p className="testimonial-text">{item.text}</p>
                
                <div className="customer-info">
                  <img src={item.avatar} alt={item.name} className="avatar" />
                  <div className="customer-details">
                    <h4>{item.name}</h4>
                    <div className="stars">
                      {[1,2,3,4,5].map(star => (
                         <svg key={star} width="12" height="12" viewBox="0 0 24 24" fill="#f5b800" stroke="#f5b800" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-btn next-btn" aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
