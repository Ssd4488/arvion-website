import React, { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaCheckCircle, FaChartBar, FaShieldAlt, FaCalculator, FaFileContract, FaGlobe, FaPuzzlePiece, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../csssection/HorizontalScroll.css';

import schoolImg from '../assets/service-school.png';
import payrollImg from '../assets/service-payroll.png';
import outsourcingImg from '../assets/service-outsourcing.png';

const services = [
  {
    title: 'School Management',
    description: 'A unified platform to streamline all your school’s administrative and academic activities.',
    image: schoolImg,
    stats: [
      { icon: <FaCalendarAlt />, text: 'Effortless Scheduling' },
      { icon: <FaCheckCircle />, text: 'Automated Attendance' },
      { icon: <FaChartBar />, text: 'Real-time Reporting' },
    ],
  },
  {
    title: 'Payroll Application',
    description: 'Ensure accurate, timely, and compliant payroll processing for your entire organization.',
    image: payrollImg,
    stats: [
      { icon: <FaShieldAlt />, text: 'Secure Transactions' },
      { icon: <FaCalculator />, text: 'Accurate Calculations' },
      { icon: <FaFileContract />, text: 'Compliance Ready' },
    ],
  },
  {
    title: 'Outsourcing',
    description: 'Access a global talent pool to scale your operations and drive productivity.',
    image: outsourcingImg,
    stats: [
      { icon: <FaGlobe />, text: 'Global Talent Pool' },
      { icon: <FaPuzzlePiece />, text: 'Seamless Integration' },
      { icon: <FaClock />, text: '24/7 Productivity' },
    ],
  },
];

const HorizontalScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoScrollInterval = useRef(null);

  // Create an extended list for the infinite loop: [last, 1, 2, 3, first]
  const extendedServices = [services[services.length - 1], ...services, services[0]];

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Effect for auto-scrolling
  useEffect(() => {
    if (!isHovering) {
      autoScrollInterval.current = setInterval(handleNext, 4000);
    }
    return () => clearInterval(autoScrollInterval.current);
  }, [isHovering, isTransitioning]);

  // Effect to handle the "jump" for the infinite loop
  useEffect(() => {
    if (currentIndex === 0 || currentIndex === extendedServices.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex === 0 ? services.length : 1);
      }, 500); // This must match the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, services.length, extendedServices.length]);

  // Effect to re-enable the transition after the "jump"
  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  }, [isTransitioning]);

  return (
    <section className="interactive-services-v2">
      <div 
        className="carousel-wrapper-v2"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div 
          className="cards-container-v2" 
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }}
        >
          {extendedServices.map((service, index) => (
            <div className="card-wrapper-v2" key={index}>
              <div className="service-card-v2">
                <div className="card-background-v2" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="card-overlay-v2">
                  <div className="card-content-v2">
                    <h3 className="card-title-v2">{service.title}</h3>
                    <p className="card-description-v2">{service.description}</p>
                    <div className="stats-container-v2">
                      {service.stats.map((stat, statIndex) => (
                        <div className="stat-item-v2" key={statIndex}>
                          <span className="stat-icon-v2">{stat.icon}</span>
                          <span className="stat-text-v2">{stat.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-arrow-v2 prev-v2" onClick={handlePrev} aria-label="Previous Slide">
          <FaChevronLeft />
        </button>
        <button className="nav-arrow-v2 next-v2" onClick={handleNext} aria-label="Next Slide">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default HorizontalScroll;
