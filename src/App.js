import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Solutions from './components/Solutions';
import CTABanner from './components/CTABanner';
import Partnerships from './components/Partnerships';
import SuccessStories from './components/SuccessStories';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <CoreValues />
      <Solutions />
      <CTABanner />
      <Partnerships />
      <SuccessStories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
