import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../csssection/ServicePage.css';

// Import all your service images
import outsourcingImg from '../assets/service-outsourcing.png';
import schoolImg from '../assets/service-school.png';
import payrollImg from '../assets/service-payroll.png';
import registrationsImg from '../assets/service-registrations.png';
import accountingImg from '../assets/service-accounting.png';

const OutsourcingPage = () => {
  const detailedFeatures = [
    {
      title: 'Access to a Global Talent Pool',
      description: 'Connect with a vetted network of professionals from around the world. We provide access to specialized skills and expertise that may not be available locally, allowing you to build a world-class team without geographical limitations.',
      image: outsourcingImg,
    },
    {
      title: 'Flexible and Scalable Teams',
      description: 'Flexibly scale your team up or down to meet your project’s changing needs. Our model allows you to quickly adapt to market demands, ensuring you have the right resources at the right time without the overhead of permanent hiring.',
      image: schoolImg, 
    },
    {
      title: 'Managed Services & Project Delivery',
      description: 'We handle the administrative and operational overhead so you can focus on your core business. From recruitment and onboarding to project management, we ensure a seamless and efficient workflow for your outsourced teams.',
      image: payrollImg, 
    },
    {
      title: 'Performance Analytics & Reporting',
      description: 'Track team productivity and project milestones with our detailed reporting and analytics. We provide transparent insights into performance, ensuring your outsourced projects are on track and delivering the expected results.',
      image: accountingImg, 
    },
  ];

  const benefits = [
    'Reduce Operational Costs',
    'Access Specialized Skills and Expertise',
    'Increase Business Flexibility and Scalability',
    'Improve Focus on Core Business Functions',
    'Enhance Productivity and Efficiency',
    'Mitigate Risks Associated with Hiring',
  ];

  return (
    <div className="service-page">
      <section className="service-hero" style={{ backgroundImage: `url(${outsourcingImg})` }}>
        <div className="hero-overlay">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Outsourcing Solutions
          </motion.h1>
          <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Your strategic partner for global talent and operational excellence.
          </motion.p>
        </div>
      </section>

      <section className="service-intro">
        <div className="service-container">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2>Extend Your Team, Amplify Your Results</h2>
            <p>Leverage our global network of vetted professionals to scale your operations on demand. Whether you need to augment your existing team for a specific project or build a dedicated remote workforce, our outsourcing solutions provide the flexibility and expertise you need to succeed. We handle the administrative overhead, allowing you to focus on your core business objectives and drive innovation.</p>
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
            <p>Partnering with us for your outsourcing needs provides tangible benefits that drive efficiency, reduce costs, and accelerate growth.</p>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="benefits-image" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <img src={outsourcingImg} alt="Outsourcing Benefits" />
          </motion.div>
        </div>
      </section>

      <section className="service-cta">
        <div className="service-container cta-container">
          <h2>Ready to Build Your Global Team?</h2>
          <p>Let's discuss how our outsourcing solutions can help you achieve your business goals.</p>
          <Link to="/contact" className="cta-button">
            Get Started <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OutsourcingPage;
