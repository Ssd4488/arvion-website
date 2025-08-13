import React from "react";
import "../csssection/Footer.css";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"; // Removed useLocation as it's no longer needed here
import { motion } from "framer-motion";

const Footer = () => {
  // The scrollToHome function is no longer needed with the standard Link component

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-container">
        {/* Logo + About */}
        <div className="footer-column">
          <img src={logo} alt="Arvion Logo" className="footer-logo" />
          <p className="footer-about">
            Arvion Technologies provides innovative ERP, Payroll, and Outsourcing
            solutions to streamline your business processes with efficiency and ease.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              {/* MODIFIED: Changed the button to a standard Link for simplicity */}
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              {/* NOTE: This links to /pricing. Your services page is at /services */}
              <Link to="/services" className="footer-link">
                Plans
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>
              {/* MODIFIED: Text updated and state kept for linking */}
              <Link to="/services" state={{ tab: 'school' }} className="footer-link">
                School Management
              </Link>
            </li>
            <li>
              {/* MODIFIED: Text updated and state kept for linking */}
              <Link to="/services" state={{ tab: 'payroll' }} className="footer-link">
                Payroll Application
              </Link>
            </li>
            <li>
              {/* MODIFIED: Text updated and state kept for linking */}
              <Link to="/services" state={{ tab: 'outsourcing' }} className="footer-link">
                Outsourcing
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>123 Business Street, Mumbai, India</p>
          <p>Email: contact@arvion.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Arvion Technologies. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
