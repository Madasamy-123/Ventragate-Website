import { useState } from 'react'
import { Toaster } from "react-hot-toast";
import './App.css'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TrustedBy from './components/TrustedBy';
import Solutions from './components/Solutions';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Industries from './components/Industries';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';





function App() {
  return (
    <div className="min-h-screen">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Solutions />
      <AboutUs />
      <Services />
      <Industries />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

