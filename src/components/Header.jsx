import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../csssection/Header.css';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const services = [
    { name: 'School Management', path: '/services/school-management' },
    { name: 'Outsourcing', path: '/services/outsourcing' },
    { name: 'Statutory Registrations', path: '/services/registrations' },
    { name: 'Accounting', path: '/services/accounting' },
    { name: 'Payroll', path: '/services/payroll' },
  ];

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Arvion Technologies Logo" className="logo-image" />
          <span className="brand-name">Arvion Technologies</span>
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
                About Us
              </NavLink>
            </li>
            {/* MODIFIED: Services link is now a dropdown */}
            <li 
              className="nav-item-dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
                Services <FaChevronDown className="dropdown-arrow" />
              </NavLink>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {services.map((service) => (
                    <Link 
                      key={service.name} 
                      to={service.path} 
                      className="dropdown-link" 
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
                ContactUs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
