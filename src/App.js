import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Services from './components/Services';
import CTABanner from './components/CTABanner';
import Partners from './components/Partners';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Partners />
      <Services />
      <CoreValues />
      <CTABanner />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
