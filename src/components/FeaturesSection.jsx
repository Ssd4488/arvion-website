import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../csssection/FeaturesSection.css';

// Import your service images
import schoolImg from '../assets/service-school.png';
import payrollImg from '../assets/service-payroll.png';
import outsourcingImg from '../assets/service-outsourcing.png';

const featuresData = {
  school: {
    title: 'ERP System',
    description: 'A powerful ERP solution designed to streamline school management, automate processes, and enhance productivity.',
    points: ['Student information management', 'Attendance tracking', 'Timetable automation'],
    image: schoolImg,
  },
  payroll: {
    title: 'Payroll Application',
    description: 'An efficient and secure application to manage all aspects of your company’s payroll and compliance.',
    points: ['Automated salary calculation', 'Secure data handling', 'Effortless compliance reporting'],
    image: payrollImg,
  },
  outsourcing: {
    title: 'Outsourcing Solutions',
    description: 'Leverage our global talent pool to scale your operations and achieve your business goals.',
    points: ['Access to vetted professionals', 'Flexible team scaling', 'Managed project delivery'],
    image: outsourcingImg,
  },
};

const FeaturesSection = () => {
  const [activeService, setActiveService] = useState('school');

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  const currentService = featuresData[activeService];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-main-title">Features</h2>
        
        <div className="features-content-wrapper">
          {/* Left Side: Text Content */}
          <div className="features-text-column">
            <div className="service-selector">
              <button 
                className={`service-btn ${activeService === 'school' ? 'active' : ''}`}
                onClick={() => handleServiceClick('school')}
              >
                ERP System
              </button>
              <button 
                className={`service-btn ${activeService === 'payroll' ? 'active' : ''}`}
                onClick={() => handleServiceClick('payroll')}
              >
                Payroll
              </button>
              <button 
                className={`service-btn ${activeService === 'outsourcing' ? 'active' : ''}`}
                onClick={() => handleServiceClick('outsourcing')}
              >
                Outsourcing
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="service-details"
              >
                <h3>{currentService.title}</h3>
                <p>{currentService.description}</p>
                <ul>
                  {currentService.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Image */}
          <div className="features-image-column">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService}
                src={currentService.image}
                alt={currentService.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
