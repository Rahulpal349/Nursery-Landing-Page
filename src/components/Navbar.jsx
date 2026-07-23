import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Left Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active-link' : ''} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/plants" className={isActive('/plants') ? 'active-link' : ''} onClick={toggleMenu}>Our Plants</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active-link' : ''} onClick={toggleMenu}>About Us</Link></li>
        </ul>

        {/* Center Logo */}
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <span className="logo-text">সৃজনী নার্সারি</span>
        </Link>
        
        {/* Right Space Placeholder (to keep center alignment) */}
        <div className="nav-icons" style={{ visibility: 'hidden' }}>
          <button aria-label="Placeholder" className="icon-btn">🔍</button>
        </div>

        {/* Mobile Menu Toggle */}
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
