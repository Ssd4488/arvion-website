import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your main components directly
import Header from './components/Header';
import HorizontalScroll from "./components/HorizontalScroll"; // Renamed for clarity
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

// Import the page components we created
import About from './pages/AboutUs'; // The About Us page component
import ServicesAndPricing from './pages/Services'; // The Services page component
import Contact from './pages/ContactUs'; // Assuming you have a Contact.jsx

import './App.css';

function App() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HorizontalScroll />
                <FeaturesSection />
              </>
            }
          />
          {/* CORRECTED PATHS */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesAndPricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;