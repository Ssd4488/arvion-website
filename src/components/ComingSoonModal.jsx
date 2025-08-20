import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import '../csssection/ComingSoonModal.css';
// Import Firestore database and functions
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ComingSoonModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    try {
      // Add the email to a new "waitlist" collection in your database
      await addDoc(collection(db, "waitlist"), {
        email: email,
        service: "Payroll (Paybooks)",
        submittedAt: serverTimestamp(),
      });
      setIsSubmitted(true); // Show the success message
      // Automatically close the modal after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error adding to waitlist: ", error);
      alert("There was an error. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 15 }}
          >
            <button className="modal-close-btn" onClick={onClose}>
              <FaTimes />
            </button>

            {isSubmitted ? (
              <div className="modal-success-content">
                <FaCheckCircle className="modal-success-icon" />
                <h2>You're on the list!</h2>
                <p>Thank you for your interest. We'll notify you as soon as Payroll  is available.</p>
              </div>
            ) : (
              <>
                <h2>Payroll  is Coming Soon!</h2>
                <p>Our new, state-of-the-art payroll solution is just around the corner. Enter your email below to join our exclusive waitlist and be the first to know when we launch.</p>
                <form className="notify-form" onSubmit={handleSubmit}>
                  <input 
                    type="email" 
                    placeholder="Enter your official email-id" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" disabled={isSubmitting}>
                    <FaPaperPlane /> {isSubmitting ? 'Submitting...' : 'Notify Me'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;
