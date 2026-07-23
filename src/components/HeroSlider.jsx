import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './HeroSlider.css';

const banners = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1596489370002-30040a1606ff?w=1920&q=80',
    subtitle: 'Welcome to',
    title: 'সৃজনী নার্সারি',
    description: 'Discover a vibrant collection of Indian plants, from sacred Tulsi to radiant Marigolds.',
    btnText: 'Explore Collection',
    btnLink: '/plants'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80',
    subtitle: 'Cultivating',
    title: 'Nature\'s Beauty',
    description: 'Transform your home into a green paradise with our handpicked indoor and outdoor plants.',
    btnText: 'View Plants',
    btnLink: '/plants'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?w=1920&q=80',
    subtitle: 'Traditional & Sacred',
    title: 'Medicinal Plants',
    description: 'Bring health and prosperity with our collection of traditional Indian medicinal plants like Neem and Tulsi.',
    btnText: 'Learn More',
    btnLink: '/about'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1920&q=80',
    subtitle: 'Your Local',
    title: 'Green Sanctuary',
    description: 'Visit our nursery to experience the tranquility and find the perfect green companion for your space.',
    btnText: 'Find Us',
    btnLink: '/'
  }
];

const HeroSlider = () => {
  return (
    <section className="hero-slider-section">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="hero-swiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div 
              className="slide-bg" 
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="slide-overlay"></div>
              <div className="slide-content container">
                <span className="slide-subtitle">{banner.subtitle}</span>
                <h1 className={`slide-title ${banner.id === 1 ? 'bengali-text' : ''}`}>{banner.title}</h1>
                <p className="slide-description">{banner.description}</p>
                <Link to={banner.btnLink} className="btn btn-primary slide-btn">
                  {banner.btnText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Decorative floating elements */}
      <div className="hero-decoration">
        <div className="floating-flower flower-1">🌺</div>
        <div className="floating-flower flower-2">🌿</div>
        <div className="floating-flower flower-3">🪷</div>
      </div>
    </section>
  );
};

export default HeroSlider;
