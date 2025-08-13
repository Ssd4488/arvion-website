import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaMoneyCheckAlt, FaUserTie, FaBalanceScale } from "react-icons/fa";
import "../csssection/services.css";
import "../csssection/pricing.css";

const services = [
  {
    icon: <FaMoneyCheckAlt size={70} color="#ff7f50" />,
    title: "Payroll Management",
    description: "Accurate and timely payroll processing for your business.",
  },
  {
    icon: <FaUserTie size={70} color="#ff7f50" />,
    title: "HR Services",
    description: "Comprehensive HR solutions for employee lifecycle management.",
  },
  {
    icon: <FaBalanceScale size={70} color="#ff7f50" />,
    title: "Compliance",
    description: "Ensure statutory compliance and regulatory adherence effortlessly.",
  },
];

const plans = [
  {
    title: "Basic Plan",
    price: "$49/month",
    features: ["Payroll processing", "Basic HR tools", "Email support"],
  },
  {
    title: "Standard Plan",
    price: "$99/month",
    features: [
      "Everything in Basic",
      "Advanced HR analytics",
      "Compliance management",
      "Priority support",
    ],
  },
  {
    title: "Premium Plan",
    price: "$149/month",
    features: [
      "Everything in Standard",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 phone & chat support",
    ],
  },
];

const ServicesAndPricing = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Services Section */}
      <section className="services-section">
        <motion.h2
          className="services-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Arvion?
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.button
                className="get-started-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                Start Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <motion.h2
          className="pricing-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Pricing Plans
        </motion.h2>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              className="pricing-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <motion.button
                className="pricing-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                Start Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesAndPricing;
