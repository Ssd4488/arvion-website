import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaBuilding, FaPhone, FaArrowRight, FaArrowLeft, FaBriefcase, FaGlobeAmericas } from 'react-icons/fa';
import '../csssection/ContactUs.css';

const ContactUs = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    country: '',
    services: [],
    // New state for specific service details
    studentRange: '',
    outsourcingTeamSize: '',
    registrationType: '',
    accountingVolume: '',
    date: '',
    timeSlot: '',
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newServices = checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value);
      
      // Reset sub-option if its parent is unchecked
      const updatedData = { ...prev, services: newServices };
      if (!checked) {
        if (value === 'School Management') updatedData.studentRange = '';
        if (value === 'Outsourcing') updatedData.outsourcingTeamSize = '';
        if (value === 'Statutory Registrations') updatedData.registrationType = '';
        if (value === 'Accounting') updatedData.accountingVolume = '';
      }
      return updatedData;
    });
  };

  const stepContent = [
    { title: "Let's Get Acquainted", description: "Start by telling us a bit about yourself and your company." },
    { title: "Define Your Needs", description: "Select the services you're interested in to help us understand your requirements." },
    { title: "Schedule a Consultation", description: "Choose a preferred date and time for us to connect and discuss your goals." },
  ];

  const timeSlots = ["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"];

  return (
    <div className="contact-page-v2">
      <div className="contact-container-v2">
        {/* Left Side (Decorative) */}
        <div className="contact-left-panel">
          <motion.div key={step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="progress-bar">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`progress-step ${step >= num ? 'active' : ''}`}>{num}</div>
                  {num < 3 && <div className={`progress-line ${step > num ? 'active' : ''}`}></div>}
                </React.Fragment>
              ))}
            </div>
            <h2>{stepContent[step - 1].title}</h2>
            <p>{stepContent[step - 1].description}</p>
          </motion.div>
        </div>

        {/* Right Side (Form) */}
        <div className="contact-right-panel">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="form-step">
                <h3>Your Contact Information</h3>
                <div className="input-group"><FaUser /><input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} /></div>
                <div className="input-group"><FaEnvelope /><input type="email" name="email" placeholder="Work Email" value={formData.email} onChange={handleChange} /></div>
                <div className="input-group"><FaBuilding /><input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} /></div>
                <div className="input-group"><FaPhone /><input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} /></div>
                <div className="input-group"><FaBriefcase /><input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} /></div>
                <div className="input-group"><FaGlobeAmericas /><input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} /></div>
                <button className="nav-btn next-btn" onClick={handleNext}>Next Step <FaArrowRight /></button>
              </motion.div>
            )}

            {step === 2 && (
               <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="form-step">
                <h3>Which services are you interested in?</h3>
                <div className="checkbox-group">
                  {/* School Management */}
                  <label><input type="checkbox" value="School Management" onChange={handleCheckboxChange} checked={formData.services.includes('School Management')} /> School Management</label>
                  <AnimatePresence>
                    {formData.services.includes('School Management') && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="sub-options">
                        <h4>Number of Students</h4>
                        <select name="studentRange" value={formData.studentRange} onChange={handleChange} className="select-input">
                          <option value="">Select a range</option><option value="1-200">1-200</option><option value="201-500">201-500</option><option value="501-1000">501-1000</option><option value="1000+">1000+</option>
                        </select>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Outsourcing */}
                  <label><input type="checkbox" value="Outsourcing" onChange={handleCheckboxChange} checked={formData.services.includes('Outsourcing')} /> Outsourcing</label>
                  <AnimatePresence>
                    {formData.services.includes('Outsourcing') && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="sub-options">
                        <h4>Number of Roles to Fill</h4>
                        <select name="outsourcingTeamSize" value={formData.outsourcingTeamSize} onChange={handleChange} className="select-input">
                          <option value="">Select a number</option><option value="1-5">1-5 Roles</option><option value="6-15">6-15 Roles</option><option value="15+">15+ Roles</option>
                        </select>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Statutory Registrations */}
                  <label><input type="checkbox" value="Statutory Registrations" onChange={handleCheckboxChange} checked={formData.services.includes('Statutory Registrations')} /> Statutory Registrations</label>
                  <AnimatePresence>
                    {formData.services.includes('Statutory Registrations') && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="sub-options">
                        <h4>Type of Entity</h4>
                        <select name="registrationType" value={formData.registrationType} onChange={handleChange} className="select-input">
                          <option value="">Select a type</option><option value="New Company">New Company</option><option value="Existing Company">Existing Company</option><option value="Sole Proprietorship">Sole Proprietorship</option>
                        </select>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Accounting */}
                  <label><input type="checkbox" value="Accounting" onChange={handleCheckboxChange} checked={formData.services.includes('Accounting')} /> Accounting</label>
                  <AnimatePresence>
                    {formData.services.includes('Accounting') && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="sub-options">
                        <h4>Monthly Transaction Volume</h4>
                        <select name="accountingVolume" value={formData.accountingVolume} onChange={handleChange} className="select-input">
                          <option value="">Select a volume</option><option value="<100">Under 100</option><option value="101-500">101-500</option><option value="500+">Over 500</option>
                        </select>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Payroll */}
                  <label className="disabled"><input type="checkbox" value="Payroll" disabled /> Payroll (Paybooks)<span className="coming-soon-flash">Coming Soon</span></label>
                </div>
                <div className="form-nav-buttons"><button className="nav-btn prev-btn" onClick={handlePrev}><FaArrowLeft /> Back</button><button className="nav-btn next-btn" onClick={handleNext}>Next Step <FaArrowRight /></button></div>
               </motion.div>
            )}

            {step === 3 && (
               <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="form-step">
                <h3>Book a Preferred Date & Time</h3>
                <p className="step-description">Select a date and a time slot that works best for you. We will confirm the final meeting details via email.</p>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="date-input" />
                <div className="timeslot-grid">
                  {timeSlots.map(slot => (
                    <button 
                      key={slot} 
                      className={`timeslot-btn ${formData.timeSlot === slot ? 'active' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot }))}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <div className="form-nav-buttons"><button className="nav-btn prev-btn" onClick={handlePrev}><FaArrowLeft /> Back</button><button className="nav-btn submit-final-btn">Submit Request</button></div>
               </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
