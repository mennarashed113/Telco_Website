import React from 'react';
import './Partnerships.css';

const Partnerships = () => {
  const partners = {
    technology: ['Cisco', 'Microsoft', 'Dell', 'HP', 'Oracle', 'VMware'],
    solution: ['SAP', 'IBM', 'Huawei', 'Fortinet', 'Palo Alto', 'AWS'],
    infrastructure: ['Lenovo', 'HPE', 'NetApp', 'Juniper', 'Aruba', 'Commscope']
  };

  return (
    <section className="partnerships" id="partners">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR PARTNERS</span>
          <h2 className="section-title">Strategic Partnerships</h2>
        </div>

        <div className="partners-category">
          <div className="category-header">
            <div className="category-icon">
              <i className="fas fa-microchip"></i>
            </div>
            <h3>Technology Partners</h3>
          </div>
          <div className="partners-logos">
            {partners.technology.map((partner, index) => (
              <div key={index} className="partner-logo">
                <span className="partner-name">{partner}</span>
                <div className="partner-badge">Certified</div>
              </div>
            ))}
          </div>
        </div>

        <div className="partners-category">
          <div className="category-header">
            <div className="category-icon">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <h3>Solution Partners</h3>
          </div>
          <div className="partners-logos">
            {partners.solution.map((partner, index) => (
              <div key={index} className="partner-logo">
                <span className="partner-name">{partner}</span>
                <div className="partner-badge">Certified</div>
              </div>
            ))}
          </div>
        </div>

        <div className="partners-category">
          <div className="category-header">
            <div className="category-icon">
              <i className="fas fa-network-wired"></i>
            </div>
            <h3>Infrastructure Partners</h3>
          </div>
          <div className="partners-logos">
            {partners.infrastructure.map((partner, index) => (
              <div key={index} className="partner-logo">
                <span className="partner-name">{partner}</span>
                <div className="partner-badge">Certified</div>
              </div>
            ))}
          </div>
        </div>

        <button className="btn-primary-outline">Become a Partner</button>
      </div>
    </section>
  );
};

export default Partnerships;
