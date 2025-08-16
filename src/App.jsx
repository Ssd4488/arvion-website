import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Core Components
import Header from './components/Header';
import HorizontalScroll from "./components/HorizontalScroll";
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

// Import All Page Components from the correct 'pages' folder
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import SchoolManagementPage from './pages/SchoolManagementPage';
import OutsourcingPage from './pages/OutsourcingPage';
import RegistrationsPage from './pages/RegistrationsPage';
import AccountingPage from './pages/AccountingPage';
import PayrollPage from './pages/PayrollPage';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          {/* Homepage Route */}
          <Route
            path="/"
            element={
              <>
                <HorizontalScroll />
                <FeaturesSection />
              </>
            }
          />
          
          {/* Main Page Routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />

          {/* Dedicated Service Page Routes */}
          <Route path="/services/school-management" element={<SchoolManagementPage />} />
          <Route path="/services/outsourcing" element={<OutsourcingPage />} />
          <Route path="/services/registrations" element={<RegistrationsPage />} />
          <Route path="/services/accounting" element={<AccountingPage />} />
          <Route path="/services/payroll" element={<PayrollPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
