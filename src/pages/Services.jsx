import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaSchool, FaUsers, FaStamp, FaBook, FaFileInvoiceDollar } from 'react-icons/fa';
import '../csssection/services.css';

const servicesData = [
  {
    id: 'school',
    icon: <FaSchool />,
    title: 'School Management System',
    summary: 'An integrated ERP solution to manage all academic and administrative operations seamlessly.',
    path: '/services/school-management', // Path to the dedicated page
  },
  {
    id: 'outsourcing',
    icon: <FaUsers />,
    title: 'Outsourcing',
    summary: 'Access a global talent pool to scale your team and drive business growth efficiently.',
    path: '/services/outsourcing', // Path to the dedicated page
  },
  {
    id: 'registrations',
    icon: <FaStamp />,
    title: 'Statutory Registrations',
    summary: 'Navigate complex legal frameworks with our expert guidance for all your business registration needs.',
    path: '/services/registrations', // Path to the dedicated page
  },
  {
    id: 'accounting',
    icon: <FaBook />,
    title: 'Accounting',
    summary: 'Ensure financial accuracy and gain valuable insights with our comprehensive accounting solutions.',
    path: '/services/accounting', // Path to the dedicated page
  },
  {
    id: 'payroll',
    icon: <FaFileInvoiceDollar />,
    title: 'Payroll',
    summary: 'An efficient and secure application to manage all aspects of your company’s payroll and compliance.',
    path: '/services/payroll', // Path to the dedicated page
  },
];

const Services = () => {
  // The smooth-scrolling logic is no longer needed here

  return (
    <div className="services-page">
      <section className="services-grid-section">
        <div className="services-container">
          <h1 className="services-main-title">Our Comprehensive Solutions</h1>
          <p className="services-main-subtitle">We provide a full suite of services to streamline your operations and drive success. Click on any service to learn more.</p>
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <motion.div 
                className="service-card-summary" 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="summary-icon">{service.icon}</div>
                <h3 className="summary-title">{service.title}</h3>
                <p className="summary-text">{service.summary}</p>
                {/* MODIFIED: The button is now a Link */}
                <Link to={service.path} className="summary-btn">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* The detailed sections are no longer needed on this page */}
    </div>
  );
};

export default Services;
