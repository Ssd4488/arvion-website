import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../csssection/ServicePage.css'; // Added this import
import ComingSoonModal from '../components/ComingSoonModal';
import heroImg from '../assets/service-payroll.png';

const PayrollPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <>
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="service-page">
        <section className="service-hero" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="hero-overlay">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              Payroll (Coming Soon!!!)
            </motion.h1>
            <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              Get ready for the future of effortless payroll management.
            </motion.p>
          </div>
        </section>

        <section className="service-intro">
          <div className="service-container">
            <motion.div style={{ fontsize: "28px", fontWeight: "700"}} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
              <h2>A Sneak Peek at What's Coming</h2>
              <p style={{ fontsize: "22px", }}> We are working hard to bring you a state-of-the-art payroll application that will automate and simplify your entire payroll process. From accurate salary calculations to seamless compliance, our new platform is designed to save you time and empower your business. Stay tuned for the official launch!</p>
            </motion.div>
          </div>
        </section>

        <section className="service-cta">
          <div className="service-container cta-container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Want to be the first to know?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join our waitlist, and we'll notify you as soon as Payroll (Paybooks) is live.
            </motion.p>
            <motion.button 
              className="cta-button" 
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(255, 127, 50, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Notify Me <FaArrowRight />
            </motion.button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PayrollPage;
