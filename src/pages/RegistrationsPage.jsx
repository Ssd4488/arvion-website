import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../csssection/ServicePage.css';

// MODIFIED: Updated image imports to match your new filenames
import heroImg from '../assets/service-registrations.png'; // Assuming the main hero image stays the same
import featureIncorpImg from '../assets/Registrations Page-image-1.png';
import featureGstImg from '../assets/Registrations Page-image2.png';
import featureIecImg from '../assets/Registrations Page-image-3.png';
import featureTrademarkImg from '../assets/Registrations Page-image-4.png';
import benefitSummaryImg from '../assets/Registrations Page-benefits-image.png';

const RegistrationsPage = () => {
  const detailedFeatures = [
    { title: 'Company Incorporation', description: 'Navigate the complete process of registering your business, whether it’s a private limited company, LLP, or one-person company. We handle all documentation, name approval, and filings to ensure a smooth and timely incorporation, setting your venture up for success from day one.', image: featureIncorpImg },
    { title: 'GST & Tax ID Application', description: 'Ensure your business is fully compliant with all Goods and Services Tax (GST) regulations. We manage the entire application process for your GSTIN and other essential tax identification numbers, making sure your business is ready for seamless transactions and accurate tax filing.', image: featureGstImg },
    { title: 'Import Export Code (IEC)', description: 'Obtain the necessary codes to operate your business on a global scale. Our experts streamline the IEC application process, handling all the required documentation to enable you to participate in international trade and expand your market reach without legal hurdles.', image: featureIecImg },
    { title: 'Trademark & IP Registration', description: 'Protect your brand identity, logos, and intellectual property with official trademarking. We manage the comprehensive search, application, and registration process to safeguard your most valuable assets from infringement and build a strong, defensible brand.', image: featureTrademarkImg },
  ];

  const benefits = [ 'Ensure Full Legal Compliance', 'Protect Your Brand and Assets', 'Build Credibility with Customers', 'Avoid Penalties and Legal Issues', 'Enable Business Expansion', 'Streamline the Registration Process' ];

  return (
    <div className="service-page">
      <section className="service-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Statutory Registrations</motion.h1>
          <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>Building your business on a solid legal foundation.</motion.p>
        </div>
      </section>

      <section className="service-intro">
        <div className="service-container">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2>Navigate Compliance with Confidence</h2>
            <p>Ensure your business is built on a solid legal foundation with our expert statutory registration services. We guide you through the complexities of company incorporation, GST registration, and more, allowing you to launch and operate your business with confidence.</p>
          </motion.div>
        </div>
      </section>
      
      <section className="detailed-features-section">
        <div className="service-container">
          <h2 className="section-title">A Closer Look at Our Features</h2>
          {detailedFeatures.map((feature, index) => (
            <div className="detailed-feature-row" key={index}>
              <motion.div className="detailed-feature-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
              <motion.div className="detailed-feature-image" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
                <img src={feature.image} alt={feature.title} />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="service-benefits-section">
        <div className="service-container benefits-container">
          <motion.div className="benefits-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2>Unlock Key Benefits</h2>
            <p>Our registration services provide the essential framework for your business to operate legally, build trust, and grow sustainably.</p>
            <ul>{benefits.map((benefit, index) => (<li key={index}>{benefit}</li>))}</ul>
          </motion.div>
          <motion.div className="benefits-image" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <img src={benefitSummaryImg} alt="Statutory Registrations Benefits" />
          </motion.div>
        </div>
      </section>

      <section className="service-cta">
        <div className="service-container cta-container">
          <h2>Ready to Get Your Business Registered?</h2>
          <p>Let's discuss how we can help you navigate the legal landscape with ease.</p>
          <Link to="/contact" className="cta-button">Consult an Expert <FaArrowRight /></Link>
        </div>
      </section>
    </div>
  );
};

export default RegistrationsPage;
