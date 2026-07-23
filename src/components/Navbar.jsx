import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <span className="logo-icon">🌿</span>
          <span className="logo-text bengali-text">সৃজনী নার্সারি</span>
        </Link>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/plants" onClick={toggleMenu}>Our Plants</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
        </ul>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
