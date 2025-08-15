import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../csssection/ServicePage.css';

// Import all your service images
import accountingImg from '../assets/service-accounting.png';
import schoolImg from '../assets/service-school.png';
import payrollImg from '../assets/service-payroll.png';
import outsourcingImg from '../assets/service-outsourcing.png';
import registrationsImg from '../assets/service-registrations.png';

const AccountingPage = () => {
  const detailedFeatures = [
    {
      title: 'Bookkeeping & General Ledger',
      description: 'Maintain accurate and up-to-date records of all your financial transactions, including sales, purchases, and payments. Our meticulous bookkeeping ensures your general ledger is always balanced and audit-ready.',
      image: accountingImg,
    },
    {
      title: 'Financial Statement Preparation',
      description: 'Generate key financial reports, including the balance sheet, income statement, and cash flow statement. These documents provide a clear and accurate picture of your company’s financial health.',
      image: payrollImg,
    },
    {
      title: 'Expense Management & Tracking',
      description: 'Track and categorize all your business expenses to optimize your budget and identify potential savings. We provide tools and reports to help you manage spending and improve your bottom line.',
      image: registrationsImg,
    },
    {
      title: 'Budgeting & Financial Forecasting',
      description: 'Plan for the future with data-driven financial forecasting and strategic budgeting. We help you set realistic financial goals and create a roadmap to achieve them, ensuring long-term stability and growth.',
      image: outsourcingImg,
    },
  ];

  const benefits = [
    'Gain Clear Financial Visibility',
    'Make Data-Driven Business Decisions',
    'Ensure Tax and Regulatory Compliance',
    'Improve Cash Flow Management',
    'Identify Opportunities for Growth',
    'Save Time on Financial Administration',
  ];

  return (
    <div className="service-page">
      <section className="service-hero" style={{ backgroundImage: `url(${accountingImg})` }}>
        <div className="hero-overlay">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Accounting Services
          </motion.h1>
          <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Clarity, accuracy, and insight for your business finances.
          </motion.p>
        </div>
      </section>

      <section className="service-intro">
        <div className="service-container">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2>Your Partner in Financial Accuracy</h2>
            <p>Maintain pristine financial records and gain critical business insights with our end-to-end accounting services. From daily bookkeeping and expense tracking to the preparation of financial statements and budgeting, our team of experts ensures your finances are accurate, compliant, and organized. We provide you with the clear financial visibility you need to make informed strategic decisions.</p>
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
            <p>Our accounting services provide the financial intelligence you need to navigate challenges and seize opportunities with confidence.</p>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="benefits-image" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <img src={accountingImg} alt="Accounting Benefits" />
          </motion.div>
        </div>
      </section>

      <section className="service-cta">
        <div className="service-container cta-container">
          <h2>Ready to Take Control of Your Finances?</h2>
          <p>Let's discuss how our accounting services can provide the clarity your business needs.</p>
          <Link to="/contact" className="cta-button">
            Schedule a Consultation <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AccountingPage;
