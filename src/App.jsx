import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import ImageCarousel from "./components/HorizontalScroll";
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

import AboutPage from './pages/AboutUs';
import PlansPage from './pages/Services';
import ContactPage from './pages/ContactUs';

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
                <ImageCarousel />
                <FeaturesSection />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
