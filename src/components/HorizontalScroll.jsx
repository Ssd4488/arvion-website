import React, { useEffect, useState } from 'react';
import '../csssection/HorizontalScroll.css';
import { Element } from 'react-scroll'; // <-- added

import image1 from '../assets/outsourcing.png';
import image2 from '../assets/payroll.png';
import image3 from '../assets/school.png';

const slides = [
  {
    image: image1,
    text: 'Boost productivity by outsourcing your tech needs. Focus on growth while we handle your software engineering.',
  },
  {
    image: image2,
    text: 'We build scalable, responsive, and modern websites tailored for your business and audience.',
  },
  {
    image: image3,
    text: 'Leverage the power of cloud infrastructure with our secure, reliable, and scalable cloud solutions.',
  },
];

const HorizontalScroll = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Element name="home"> {/* <-- now it can be targeted */}
      <div className="carousel-full-container">
        <div className="carousel-container">
          <div
            className="carousel-wrapper"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          >
            {slides.map((slide, index) => (
              <div className="slide" key={index}>
                <div className="slide-image">
                  <img src={slide.image} alt={`Slide ${index + 1}`} />
                </div>
                <div className="slide-content">
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="indicators">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HorizontalScroll;
