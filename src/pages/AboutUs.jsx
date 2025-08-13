import React from "react";
import "../csssection/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-container">
      <div className="about-header">
        <h1 className="about-title">About Us</h1>
        <div className="about-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-image-wrapper">
          <img
            className="about-image"
            src="https://via.placeholder.com/400x300?text=About+Us+Image"
            alt="About Arvion Technologies"
          />
        </div>

        <div className="about-text">
          <p>
            Arvion Technologies Pvt. Ltd. is an all-in-one payroll platform for
            small and medium businesses. We empower millions of customers
            around the world to grow their business with our efficient payroll
            technology. Founded in 2025 and headquartered in Bangalore, we are
            committed to delivering reliable payroll services with
            cost-effectiveness to our customers.
          </p>
          <p>
            Our services cover everything from employee recruitment,
            onboarding, and payroll processing to statutory deliverables. We
            ensure HR process regularization for any industry, guaranteeing
            <b> worry-free month ends</b> for our clients.
          </p>
          <p>
            We pride ourselves on partnering with our clients to build
            workplaces employees love.
            <b> Arvion Technologies Pvt. Ltd. believes in growing together.</b>
          </p>

          <ul className="about-points">
            <li>
              <img
                src="https://via.placeholder.com/20x20?text=•"
                alt="bullet"
              />
              We enable HR process regularization for all industries.
            </li>
            <li>
              <img
                src="https://via.placeholder.com/20x20?text=•"
                alt="bullet"
              />
              Swift action in handling customer requests.
            </li>
            <li>
              <img
                src="https://via.placeholder.com/20x20?text=•"
                alt="bullet"
              />
              Reliable and customer-delightful service.
            </li>
            <li>
              <img
                src="https://via.placeholder.com/20x20?text=•"
                alt="bullet"
              />
              "Worry-free month ends."
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
