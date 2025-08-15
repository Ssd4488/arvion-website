import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../csssection/Footer.css'; // This will use the new CSS file

const Footer = () => {
  const services = [
    { name: 'School Management', path: '/services/school-management' },
    { name: 'Outsourcing', path: '/services/outsourcing' },
    { name: 'Statutory Registrations', path: '/services/registrations' },
    { name: 'Accounting', path: '/services/accounting' },
    { name: 'Payroll', path: '/services/payroll' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo + About */}
        <div className="footer-column">
          <img src={logo} alt="Arvion Logo" className="footer-logo" />
          <p className="footer-about">
            Providing innovative solutions to streamline your business operations
            with cutting-edge technology and expert support.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            {services.map((service) => (
              <li key={service.name}>
                <Link to={service.path}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Social */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Arvion Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
