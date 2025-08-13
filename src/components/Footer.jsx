import React from "react";
import "../csssection/Footer.css";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const location = useLocation();

  const scrollToHome = () => {
    if (location.pathname === "/") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

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
              <button onClick={scrollToHome} className="footer-link-btn">
                Home
              </button>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="footer-link">
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
              <Link to="/services" className="footer-link">
                ERP Solutions
              </Link>
            </li>
            <li>
              <Link to="/services" className="footer-link">
                Payroll Management
              </Link>
            </li>
            <li>
              <Link to="/services" className="footer-link">
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
