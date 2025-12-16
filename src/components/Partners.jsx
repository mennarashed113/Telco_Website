import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: 'ATEÏS', logo: '/img/ATEIS.png' },
    { name: 'R&M', logo: '/img/R&M.png' },
    { name: 'Polytron', logo: '/img/Polytron.png' },
    { name: 'Ankaro', logo: '/img/Ankaro.png' },
    { name: 'TriplePlay', logo: '/img/Tripelplay.png' },
    { name: 'Otrum', logo: '/img/otrum.png' }
  ];

  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR PARTNERS</span>
          <h2 className="section-title">Strategic Partnerships</h2>
        </div>

        <div className="partners-logos-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo-card">
              <img src={partner.logo} alt={`${partner.name} - Telco Egypt Strategic Partner`} className="partner-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
