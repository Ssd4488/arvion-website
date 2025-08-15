import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../csssection/ServicePage.css';

// Import all your service images to be used in the new section
import schoolImg from '../assets/service-school.png';
import payrollImg from '../assets/service-payroll.png';
import outsourcingImg from '../assets/service-outsourcing.png';
import registrationsImg from '../assets/service-registrations.png';
import accountingImg from '../assets/service-accounting.png';


const SchoolManagementPage = () => {
  // This is the new, detailed feature showcase data
  const detailedFeatures = [
    {
      title: 'Comprehensive Student Profiles',
      description: 'Maintain a complete 360-degree view of every student, from initial admission and enrollment to academic progress, attendance records, and extracurricular activities. Our system provides a centralized, secure database, making it easy for administrators and teachers to access the information they need, when they need it.',
      image: schoolImg, // Using one of your existing images
    },
    {
      title: 'Automated Timetable & Scheduling',
      description: 'Effortlessly create, manage, and distribute complex academic schedules. Our intelligent timetabling tool helps you avoid conflicts, manage teacher allocations, and publish schedules directly to student and parent portals, saving countless hours of administrative work.',
      image: payrollImg, // Using one of your existing images
    },
    {
      title: 'Integrated Grade & Exam Management',
      description: 'Streamline the entire examination process, from creating exam schedules to entering grades and generating detailed report cards. Our platform provides powerful analytics to track student performance over time, helping educators identify trends and provide targeted support.',
      image: accountingImg, // Using one of your existing images
    },
    {
      title: 'Seamless Parent-Teacher Communication',
      description: 'Foster a strong school-home partnership with our dedicated communication portals. Teachers can share updates, assignments, and feedback, while parents can stay informed about their child’s progress, attendance, and upcoming events, all through a secure and user-friendly interface.',
      image: outsourcingImg, // Using one of your existing images
    },
    {
      title: 'Fee Management & Online Payments',
      description: 'Simplify your fee collection process with automated invoicing, online payment gateways, and real-time tracking of payments. Our system reduces manual errors, improves cash flow, and provides parents with a convenient and secure way to manage school fees.',
      image: registrationsImg, // Using one of your existing images
    },
  ];
  
  const benefits = [
    'Increase Administrative Efficiency',
    'Enhance Parent-Teacher Collaboration',
    'Improve Student Performance Tracking',
    'Ensure Data Security and Compliance',
    'Reduce Paperwork and Manual Errors',
    'Provide a Better Experience for All Stakeholders',
  ];

  return (
    <div className="service-page">
      {/* 1. Hero Section */}
      <section className="service-hero" style={{ backgroundImage: `url(${schoolImg})` }}>
        <div className="hero-overlay">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            School Management System
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A unified platform to streamline your institution's success.
          </motion.p>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="service-intro">
        <div className="service-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Transforming Education Through Technology</h2>
            <p>Our School Management ERP is a comprehensive solution designed to streamline every facet of your institution. From student admissions and attendance tracking to grade management and parent communication, our platform provides a centralized hub for all your data. This not only enhances operational efficiency but also fosters a more connected and collaborative educational environment for students, teachers, and parents alike. We empower educators to focus on what matters most: teaching.</p>
          </motion.div>
        </div>
      </section>

      {/* NEW: Detailed Feature Showcase Section */}
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

      {/* Benefits Section (Will be fixed by CSS update) */}
      <section className="service-benefits-section">
        <div className="service-container benefits-container">
          <motion.div 
            className="benefits-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Unlock Key Benefits</h2>
            <p>Implementing our solution provides tangible benefits that enhance every aspect of your institution's operations and community engagement.</p>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="benefits-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img src={schoolImg} alt="School Management Benefits" />
          </motion.div>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="service-cta">
        <div className="service-container cta-container">
          <h2>Ready to Streamline Your School's Operations?</h2>
          <p>Let's discuss how Arvion Technologies can tailor a solution for your institution.</p>
          <Link to="/contact" className="cta-button">
            Request a Demo <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SchoolManagementPage;
