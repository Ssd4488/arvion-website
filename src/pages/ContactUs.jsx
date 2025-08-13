import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import '../csssection/ContactUs.css'; // Make sure to create this CSS file

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Please reach out with any questions or inquiries.</p>
      </div>
      <div className="contact-container">
        {/* Contact Form */}
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Send us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="contact-info-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Contact Information</h2>
          <div className="contact-info-item">
            <FaBuilding className="contact-icon" />
            <div>
              <h4>General Inquiries</h4>
              <p>contact@arvion.com</p>
            </div>
          </div>
          <div className="contact-info-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Careers</h4>
              <p>careers@arvion.com</p>
            </div>
          </div>
          <div className="contact-info-item">
            <FaPhone className="contact-icon" />
            <div>
              <h4>Phone</h4>
              {/* ADDED: Your phone number */}
              <p>+91 9740484570</p>
            </div>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Our Office</h4>
              <p>123 Business Street, Mumbai, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
