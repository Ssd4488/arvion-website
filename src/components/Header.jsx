import React, { useState } from 'react';
import '../csssection/Header.css';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="csssection-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Left side: Logo + Brand Name */}
      <div className="csssection-left">
        <img
          src="/logo192.png"
          alt="Arvion Technologies Logo"
          className="csssection-logo"
        />
        <h1 className="csssection-brand-name">ARVION TECHNOLOGIES</h1>
      </div>

      {/* Navigation */}
      <nav className={`csssection-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          onClick={handleLinkClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          onClick={handleLinkClick}
        >
          About Us
        </NavLink>
        <NavLink
          to="/plans"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          onClick={handleLinkClick}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          onClick={handleLinkClick}
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Mobile menu toggle */}
      <button
        className="csssection-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        type="button"
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </motion.header>
  );
};

export default Header;
