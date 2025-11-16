import React, { useState } from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
  const [logoIsDragging, setLogoIsDragging] = useState(false);
  const [logoStartX, setLogoStartX] = useState(0);
  const [logoScrollLeft, setLogoScrollLeft] = useState(0);
  const logoSliderRef = React.useRef(null);

  const clients = [
    { logo: "TELECOM EGYPT" },
    { logo: "NATIONAL BANK" },
    { logo: "MINISTRY OF HEALTH" },
    { logo: "CAIRO UNIVERSITY" },
    { logo: "EGYPTIAN PETROLEUM" }
  ];

  // Logo slider drag handlers
  const handleLogoMouseDown = (e) => {
    setLogoIsDragging(true);
    setLogoStartX(e.pageX - logoSliderRef.current.offsetLeft);
    setLogoScrollLeft(logoSliderRef.current.scrollLeft);
  };

  const handleLogoMouseMove = (e) => {
    if (!logoIsDragging) return;
    e.preventDefault();
    const x = e.pageX - logoSliderRef.current.offsetLeft;
    const walk = (x - logoStartX) * 2;
    logoSliderRef.current.scrollLeft = logoScrollLeft - walk;
  };

  const handleLogoMouseUp = () => {
    setLogoIsDragging(false);
  };

  const handleLogoTouchStart = (e) => {
    setLogoIsDragging(true);
    setLogoStartX(e.touches[0].pageX - logoSliderRef.current.offsetLeft);
    setLogoScrollLeft(logoSliderRef.current.scrollLeft);
  };

  const handleLogoTouchMove = (e) => {
    if (!logoIsDragging) return;
    const x = e.touches[0].pageX - logoSliderRef.current.offsetLeft;
    const walk = (x - logoStartX) * 2;
    logoSliderRef.current.scrollLeft = logoScrollLeft - walk;
  };

  const handleLogoTouchEnd = () => {
    setLogoIsDragging(false);
  };

  return (
    <section className="success-stories" id="clients">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR CLIENTS</span>
          <h2 className="section-title">Trusted by Leading Organizations</h2>
        </div>

        {/* Logo Slider */}
        <div
          className={`logo-slider ${logoIsDragging ? 'dragging' : ''}`}
          ref={logoSliderRef}
          onMouseDown={handleLogoMouseDown}
          onMouseMove={handleLogoMouseMove}
          onMouseUp={handleLogoMouseUp}
          onMouseLeave={handleLogoMouseUp}
          onTouchStart={handleLogoTouchStart}
          onTouchMove={handleLogoTouchMove}
          onTouchEnd={handleLogoTouchEnd}
        >
          <div className={`logo-track ${logoIsDragging ? 'dragging' : ''}`}>
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div key={index} className="logo-item">
                <div className="client-logo">{client.logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
