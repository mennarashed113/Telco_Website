import React from 'react';
import './CTABanner.css';

const CTABanner = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-banner">
      <div className="container">
        <h2>Ready to Transform Your Business?</h2>
        <p>Let's discuss how our ICT solutions can help you achieve your digital transformation goals</p>
        <button className="btn-white" onClick={scrollToContact}>Schedule a Consultation</button>
      </div>
    </section>
  );
};

export default CTABanner;
