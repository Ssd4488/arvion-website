import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../csssection/ServicePage.css';

// Import all your service images to be used in this section
import payrollImg from '../assets/service-payroll.png';
import schoolImg from '../assets/service-school.png';
import outsourcingImg from '../assets/service-outsourcing.png';
import registrationsImg from '../assets/service-registrations.png';
import accountingImg from '../assets/service-accounting.png';

const PayrollPage = () => {
  // NEW: Detailed feature showcase data for Payroll
  const detailedFeatures = [
    {
      title: 'Automated Salary Calculation',
      description: 'Eliminate manual errors with our precise, automated system that handles complex salary structures, overtime, bonuses, and deductions for every pay cycle. Our platform ensures every employee is paid accurately and on time, every time.',
      image: payrollImg,
    },
    {
      title: 'Secure Data Handling & Confidentiality',
      description: 'Protect your most sensitive employee information with end-to-end encryption and secure, cloud-based servers. We prioritize data security to ensure confidentiality and build trust within your organization.',
      image: registrationsImg, // Using another one of your images
    },
    {
      title: 'Effortless Tax & Compliance Management',
      description: 'Stay up-to-date with the latest tax regulations and statutory requirements. Our application automatically generates compliance reports, tax filings, and other necessary documents, making audits and legal adherence stress-free.',
      image: accountingImg, // Using another one of your images
    },
    {
      title: 'Employee Self-Service Portal',
      description: 'Empower your team with a secure, user-friendly portal to access their payslips, tax statements, and manage personal information. This reduces the administrative burden on your HR department and improves employee satisfaction.',
      image: schoolImg, // Using another one of your images
    },
  ];

  const benefits = [
    'Save Time and Reduce Administrative Burden',
    'Ensure Accuracy and Avoid Costly Errors',
    'Guarantee Data Security and Confidentiality',
    'Stay Compliant with Changing Regulations',
    'Improve Employee Satisfaction and Trust',
    'Access Real-time Payroll Analytics',
  ];

  return (
    <div className="service-page">
      {/* 1. Hero Section */}
      <section className="service-hero" style={{ backgroundImage: `url(${payrollImg})` }}>
        <div className="hero-overlay">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Payroll Application
          </motion.h1>
          <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Accurate, compliant, and effortless payroll management.
          </motion.p>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="service-intro">
        <div className="service-container">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2>Simplify Your Payroll, Empower Your Business</h2>
            <p>Our advanced payroll application automates and simplifies your entire payroll process. From calculating salaries and deductions to ensuring tax compliance and generating payslips, our secure platform handles it all with precision. Empower your employees with a self-service portal and free up your HR team to focus on more strategic initiatives, knowing that your payroll is in expert hands.</p>
          </motion.div>
        </div>
      </section>

      {/* MODIFIED: Replaced Key Features with Detailed Showcase */}
      <section className="detailed-features-section">
        <div className="service-container">
          <h2 className="section-title">A Closer Look at Our Features</h2>
          {detailedFeatures.map((feature, index) => (
            <div className="detailed-feature-row" key={index}>
              <motion.div 
                className="detailed-feature-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
              <motion.div 
                className="detailed-feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <img src={feature.image} alt={feature.title} />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits-section">
        <div className="service-container benefits-container">
          <motion.div className="benefits-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2>Unlock Key Benefits</h2>
            <p>Our payroll solution delivers tangible benefits that save time, reduce risk, and improve the employee experience across your organization.</p>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="benefits-image" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <img src={payrollImg} alt="Payroll Benefits" />
          </motion.div>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="service-cta">
        <div className="service-container cta-container">
          <h2>Ready for Stress-Free Payroll?</h2>
          <p>Let's discuss how our application can transform your payroll process.</p>
          <Link to="/contact" className="cta-button">
            Request a Demo <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PayrollPage;
