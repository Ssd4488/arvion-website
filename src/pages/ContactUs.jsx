import React from "react";
import { motion } from "framer-motion";
import "../csssection/ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Column */}
        <div className="contact-left">
          <h2 className="contact-heading">Need Help? We’re Here</h2>
          <p className="contact-subheading">
            Fill out the form and our team will get back to you as soon as possible.
          </p>
          <form className="contact-form">
            <input type="text" className="contact-input" placeholder="Your Name" required />
            <input type="email" className="contact-input" placeholder="Your Email" required />
            <input type="tel" className="contact-input" placeholder="Phone Number" />
            <input type="text" className="contact-input" placeholder="Company Name" />
            <input type="text" className="contact-input" placeholder="Designation" />
            <select className="contact-input">
              <option value="">Select Inquiry Type</option>
              <option>General Inquiry</option>
              <option>Sales</option>
              <option>Support</option>
              <option>Careers</option>
            </select>
            <motion.button
              type="submit"
              className="contact-button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit
            </motion.button>
          </form>
        </div>

        {/* Right Column */}
        <div className="contact-right">
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h4>Sales</h4>
              <p>sales@yourcompany.com</p>
            </div>
            <div>
              <h4>Support</h4>
              <p>support@yourcompany.com</p>
            </div>
            <div>
              <h4>Careers</h4>
              <p>hr@yourcompany.com</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
