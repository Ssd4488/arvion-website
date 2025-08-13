import React, { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../csssection/HorizontalScroll.css';

import schoolImg from '../assets/school-management1.png';
import payrollImg from '../assets/payroll-app1.png';
import outsourcingImg from '../assets/outsourcing1.png';

const services = [
  {
    title: 'School Management',
    description: 'Comprehensive solutions to manage all aspects of your educational institution effortlessly.',
    image: schoolImg,
  },
  {
    title: 'Payroll Application',
    description: 'Automate your payroll with our secure, accurate, and data-driven application.',
    image: payrollImg,
  },
  {
    title: 'Outsourcing',
    description: 'Connect with a global network of professionals to scale your business operations.',
    image: outsourcingImg,
  },
];

const Tilt = (props) => {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const HorizontalScroll = () => {
  const tiltOptions = {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.4,
    scale: 1.05,
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const autoScrollInterval = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  // Effect for auto-scrolling
  useEffect(() => {
    if (!isHovering) {
      autoScrollInterval.current = setInterval(handleNext, 4000); // Change slide every 4 seconds
    }
    return () => clearInterval(autoScrollInterval.current);
  }, [isHovering]);

  // Effect for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
        clearInterval(autoScrollInterval.current); // Reset timer on manual navigation
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
        clearInterval(autoScrollInterval.current); // Reset timer on manual navigation
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Effect to scroll the container to the active card
  useEffect(() => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.children[currentIndex].offsetLeft;
      containerRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [currentIndex]);

  return (
    <section className="interactive-services">
      <h2 className="section-title"></h2>
      <div 
        className="carousel-wrapper"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="cards-container" ref={containerRef}>
          {services.map((service, index) => (
            <div className="card-wrapper" key={index}>
              <Tilt className="card" options={tiltOptions}>
                <img src={service.image} alt={service.title} className="card-background" />
                <div className="card-overlay">
                  <div className="card-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
        <button className="nav-arrow prev" onClick={handlePrev} aria-label="Previous Slide">
          <FaChevronLeft />
        </button>
        <button className="nav-arrow next" onClick={handleNext} aria-label="Next Slide">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default HorizontalScroll;

