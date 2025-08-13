import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaMoneyCheckAlt, FaUserTie, FaBalanceScale } from "react-icons/fa";
import "../csssection/services.css";
import "../csssection/pricing.css";

// --- DATA FOR SERVICES AND PRICING ---

const services = [
  {
    icon: <FaMoneyCheckAlt size={70} color="#ff7f50" />,
    title: "School Management Services",
    description: "Streamlining School operations, enhacing the edcation.",
  },
  {
    icon: <FaUserTie size={70} color="#ff7f50" />,
    title: "Payroll Applicaton",
    description: "Accurate and timely payrll processing for your business.",
  },
  {
    icon: <FaBalanceScale size={70} color="#ff7f50" />,
    title: "Outsourcing Solutions ",
    description: "Streamlining your oprations and elevate your business effiency.",
  },
];

// Pricing plans for School Management
const schoolManagementPlans = [
  {
    title: "Basic Plan",
    price: "₹10000",
    features: ["Payroll processing", "Basic HR tools", "Email support"],
  },
  {
    title: "Standard Plan",
    price: "₹15000",
    features: [
      "Everything in Basic",
      "Advanced HR analytics",
      "Compliance management",
      "Priority support",
    ],
  },
  {
    title: "Premium Plan",
    price: "₹20000",
    features: [
      "Everything in Standard",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 phone & chat support",
    ],
  },
];

// Expanded pricing plans for Payroll Application
const payrollApplicationPlans = [
  {
    title: "Starter Payroll",
    price: "₹1000/month",
    features: ["Up to 10 employees", "Automated salary slips", "Standard tax filings", "Email support"],
  },
  {
    title: "Growth Payroll",
    price: "₹1500/month",
    features: ["Up to 50 employees", "Everything in Starter", "Direct deposit options", "Basic reporting"],
  },
  {
    title: "Enterprise Payroll",
    price: "₹2000/month",
    features: ["Unlimited employees", "Everything in Growth", "Advanced integrations (HRIS, Accounting)", "Priority phone support"],
  },
];

// Expanded pricing plans for Outsourcing System
const outsourcingSystemPlans = [
  {
    title: "Task Outsourcing",
    price: "From ₹250/hr",
    features: ["Hire for specific tasks", "Vetted professionals", "Pay-as-you-go model", "Platform support"],
  },
  {
    title: "Part-Time Staff",
    price: "From ₹1200/month",
    features: ["Dedicated part-time staff (20 hrs/wk)", "Managed by Arvion", "Monthly performance reviews", "Seamless team integration"],
  },
  {
    title: "Full-Time Staff",
    price: "From ₹2200/month",
    features: ["Dedicated full-time staff (40 hrs/wk)", "Everything in Part-Time", "Custom onboarding & training", "Dedicated account manager"],
  },
];


// --- COMPONENT ---

const ServicesAndPricing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('school');

  const plansToShow = {
    school: schoolManagementPlans,
    payroll: payrollApplicationPlans,
    outsourcing: outsourcingSystemPlans,
  };

  const currentPlans = plansToShow[activeTab];

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
          Our Services
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

        <div className="pricing-tabs">
          <button
            onClick={() => setActiveTab('school')}
            className={activeTab === 'school' ? 'active' : ''}
          >
            School Management
          </button>
          <button
            onClick={() => setActiveTab('payroll')}
            className={activeTab === 'payroll' ? 'active' : ''}
          >
            Payroll Application
          </button>
          <button
            onClick={() => setActiveTab('outsourcing')}
            className={activeTab === 'outsourcing' ? 'active' : ''}
          >
            Outsourcing System
          </button>
        </div>

        <div className="pricing-grid">
          {currentPlans.map((plan, index) => (
            <motion.div
              className="pricing-card"
              key={plan.title + index} // Using a more unique key
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
