import React, { useState } from 'react';
import './Clients.css';

const Clients = () => {
  const [logoIsDragging, setLogoIsDragging] = useState(false);
  const [logoStartX, setLogoStartX] = useState(0);
  const [logoScrollLeft, setLogoScrollLeft] = useState(0);
  const logoSliderRef = React.useRef(null);

  const clients = [
    { name: "Al-Waly Admin Building", logo: "/img/Logos_Clients/Al-Waly Admin Bulding.jfif" },
    { name: "Arabisc Mall", logo: "/img/Logos_Clients/Arabisc Mall.jpeg" },
    { name: "ARC Business Park", logo: "/img/Logos_Clients/ARC Business Park.png" },
    { name: "Cairo Metro Line 3", logo: "/img/Logos_Clients/Cairo Metro Line 3.png" },
    { name: "Cleopatra Marsa Allam", logo: "/img/Logos_Clients/Cleopatra Marsa Allam.png" },
    { name: "Dar El Fouad", logo: "/img/Logos_Clients/Dar el fouad.png" },
    { name: "District 5", logo: "/img/Logos_Clients/District 5.png" },
    { name: "EITAT", logo: "/img/Logos_Clients/EITAT.jfif" },
    { name: "Cleopatra Mkady", logo: "/img/Logos_Clients/Cleopatra Mkady.png" },
    { name: "Eyad Palace", logo: "/img/Logos_Clients/Eyad Palace.png" },
    { name: "Galala Resort", logo: "/img/Logos_Clients/Galala Resort.png" },
    { name: "Grand Ocean Hotel", logo: "/img/Logos_Clients/Grand Ocean Hotle.jfif" },
    { name: "Haram Hospital", logo: "/img/Logos_Clients/Haram Hospital.png" },
    { name: "Cleopatra Sedi Henesh", logo: "/img/Logos_Clients/Cleopatra Sedi Henesh.png" },
    { name: "Helnan Mamoura Hotel", logo: "/img/Logos_Clients/Helnan Mamoura Hotel.png" },
    { name: "Helnan Port Fouad Hotel", logo: "/img/Logos_Clients/Helnan Port Fouad Hotel.png" },
    { name: "Ismalia Medical Center", logo: "/img/Logos_Clients/Ismalia Medical Center.jfif" },
    { name: "KHUFUS Buildings 1&2", logo: "/img/Logos_Clients/KHUFUS Budlings 1&2.png" },
    { name: "Leven Square", logo: "/img/Logos_Clients/Leven Square.png" },
    { name: "Cleopatra Sharm", logo: "/img/Logos_Clients/Cleopatra Sharm.png" },
    { name: "Madinety Medical Center", logo: "/img/Logos_Clients/Madienty Medical Center.png" },
    { name: "Marassi COVA North Coast", logo: "/img/Logos_Clients/Marassi COVA North coast.png" },
    { name: "Ministry of Tourism", logo: "/img/Logos_Clients/Minstry of tourism.png" },
    { name: "Moon City Residence", logo: "/img/Logos_Clients/Moon City Residence.png" },
    { name: "New Alamein Hotel", logo: "/img/Logos_Clients/New Alamen Hotel.png" },
    { name: "P&C Labs", logo: "/img/Logos_Clients/P&C Labs.png" },
    { name: "Pyramids Hills", logo: "/img/Logos_Clients/Pyramids Hills.webp" },
    { name: "Regent's Park", logo: "/img/Logos_Clients/Regent's park.png" },
    { name: "San Stefano Sea View", logo: "/img/Logos_Clients/San Stefano Sea View.png" },
    { name: "Shifaa El Orman", logo: "/img/Logos_Clients/Shifaa El Orman.png" },
    { name: "The Gate Plaza", logo: "/img/Logos_Clients/The Gate Plaza.png" }
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
    <section className="clients" id="clients">
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
                <img src={client.logo} alt={`${client.name} - Telco Egypt Client`} className="client-logo" />
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
