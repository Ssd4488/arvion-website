import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Core Components
import Header from './components/Header';
import HorizontalScroll from "./components/HorizontalScroll";
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

// Import All Page Components
import AboutUs from './pages/AboutUs'; // Corrected name to match file
import ContactUs from './pages/ContactUs'; // Corrected name to match file
import Services from './pages/Services'; // Added import for the main services page
import SchoolManagementPage from './pages/SchoolManagementPage';
import OutsourcingPage from './pages/OutsourcingPage';
import RegistrationsPage from './pages/RegistrationsPage';
import AccountingPage from './pages/AccountingPage';
import PayrollPage from './pages/PayrollPage';

import './App.css';

function App() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow" style={{ paddingTop: '80px' }}> {/* Added padding for fixed header */}
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
          {/* ADDED: Route for the main services hub page */}
          <Route path="/services" element={<Services />} />

          {/* Routes for all 5 dedicated service pages */}
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
