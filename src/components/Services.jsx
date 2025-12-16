import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const solutions = [
    {
      icon: 'fa-volume-up',
      title: 'PA/PAVA Systems',
      description: 'Professional Public Address and Voice Alarm systems for emergency communication and announcements.',
      color: 'orange',
      hasDetails: true,
      details: {
        subtitle: 'Power of Innovation',
        description: 'ATEÏS has created 30 years of experience in IP based equipment and IoT gateway for Radio Frequency IP based. Currently, ATEÏS has 3000+ success installations in over 70 countries worldwide with worldwide innovation, smart security and connectivity to the smart world over the IP/IoT world.',
        partnerLogos: ['/img/ATEIS.png'],
        subServices: [
          {
            icon: 'fa-volume-up',
            title: 'BOUTIQUE PA/VA System',
            description: 'Highly flexible and user-qualified PA/VA system'
          },
          {
            icon: 'fa-broadcast-tower',
            title: 'PA/PAVA Systems',
            description: 'Wide-ranging, comprehensive PA Systems'
          },
          {
            icon: 'fa-satellite-dish',
            title: 'Biamb Multi Ceiling Speakers - RCS Series',
            description: 'EN54 Sound Mount Ceiling/Wall/pendant speakers'
          }
        ]
      }
    },
    {
      icon: 'fa-network-wired',
      title: 'Infrastructure & Networks',
      description: 'Complete network infrastructure solutions including cabling, switching, and enterprise connectivity.',
      color: 'blue',
      hasDetails: true,
      details: {
        subtitle: 'Complete Network Solutions',
        description: 'Comprehensive infrastructure and network solutions designed to meet the demands of modern enterprises, data centers, and public networks.',
        partnerLogos: ['/img/R&M.png'],
        subServices: [
          {
            icon: 'fa-database',
            title: 'Data Center',
            description: 'Enterprise-grade data center infrastructure and solutions'
          },
          {
            icon: 'fa-network-wired',
            title: 'Local Area Networks',
            description: 'High-performance LAN solutions for seamless connectivity'
          },
          {
            icon: 'fa-globe',
            title: 'Public Networks',
            description: 'Scalable public network infrastructure and deployment'
          },
          {
            icon: 'fa-tools',
            title: 'Infrastructure Management',
            description: 'Comprehensive infrastructure monitoring and management'
          }
        ]
      }
    },
    {
      icon: 'fa-broadcast-tower',
      title: 'TV Signal Distribution Systems',
      description: 'Advanced television signal distribution and management systems for hospitality and commercial applications.',
      color: 'orange',
      hasDetails: true,
      details: {
        subtitle: 'Professional TV Distribution Solutions',
        description: 'POLYTRON headends – made in Germany – are the perfect devices for building community receiving systems. The compact headends are perfect for fast and trouble-free installation of digital receiving systems.',
        partnerLogos: ['/img/Polytron.png', '/img/Riosat.png', '/img/Ankaro.png'],
        subServices: [
          {
            icon: 'fa-server',
            title: 'Headends',
            description: 'POLYTRON headends for building community receiving systems with modular SPM series'
          },
          { 
            icon: 'fa-signal',
            title: 'Modulators',
            description: 'Outstanding modulators for feeding own contents into distribution systems'
          },
          {
            icon: 'fa-ethernet',
            title: 'Optical Devices',
            description: 'Reliable POLYTRON quality with the newest optical technology'
          },
          {
            icon: 'fa-project-diagram',
            title: 'Multiswitches',
            description: 'Efficient and flexible receiving and distribution systems based on SAT IF'
          },
          {
            icon: 'fa-broadcast-tower',
            title: 'Amplifiers',
            description: 'Perfect devices for any situation with reliable technical values'
          },
          {
            icon: 'fa-code-branch',
            title: 'Splitters, Taps',
            description: 'Great range of reliable splitters and taps for 5 MHz to 2.4 GHz in class A quality'
          },
          {
            icon: 'fa-filter',
            title: 'Filters, Combiners',
            description: 'Precise technical design for best results in signal processing'
          },
          {
            icon: 'fa-plug',
            title: 'Accessories',
            description: 'LNBs, antenna sockets, cables and plugs for easy installation'
          }
        ]
      }
    },
    {
      icon: 'fa-tv',
      title: 'Hospitality & Interactive TV Systems',
      description: 'Interactive television solutions and entertainment systems designed for hotels and hospitality industry.',
      color: 'green',
      hasDetails: true,
      details: {
        subtitle: 'Unified digital engagement for maximum impact',
        description: 'A comprehensive suite of digital engagement technologies, featuring Content Management, Digital Signage, Guest WiFi, interactive services and more. Whatever your need, Telco has the technology to turn every screen into an opportunity to connect, inform and impress.',
        partnerLogos: ['/img/Otrum-to-Hub-Rebrand.jpg','/img/Tripelplay.png', '/img/otrum.png'],
        subServices: [
          {
            icon: 'fa-desktop',
            title: 'Digital Signage',
            description: 'Dynamic content display solutions for engaging visual communication'
          },
          {
            icon: 'fa-play-circle',
            title: 'Interactive TV',
            description: 'Smart TV solutions with interactive features for enhanced guest experience'
          },
          {
            icon: 'fa-wifi',
            title: 'Casting',
            description: 'Wireless screen mirroring and content casting capabilities'
          },
          {
            icon: 'fa-door-open',
            title: 'Room Signage',
            description: 'Digital signage solutions for room information and wayfinding'
          },
          {
            icon: 'fa-map-marked-alt',
            title: 'Wayfinding',
            description: 'Interactive navigation and directory systems for large facilities'
          }
        ]
      }
    }
  ];

  const handleViewMore = (solution) => {
    if (solution.hasDetails) {
      setSelectedService(solution);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR SERVICES</span>
          <h2 className="section-title">Comprehensive ICT Solutions</h2>
        </div>
        <div className="services-grid">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="solution-card"
            >
              <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
              <div className={`solution-icon ${solution.color}`}>
                <i className={`fas ${solution.icon}`}></i>
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              {solution.hasDetails && (
                <button className="view-more-btn" onClick={() => handleViewMore(solution)}>
                  View More <i className="fas fa-arrow-right"></i>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Service Details */}
      {showModal && selectedService && (
        <div className="service-modal-overlay" onClick={closeModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <div className={`modal-icon ${selectedService.color}`}>
                <i className={`fas ${selectedService.icon}`}></i>
              </div>
              <h2>{selectedService.title}</h2>
              <p className="modal-subtitle">{selectedService.details.subtitle}</p>
              <p className="modal-description">{selectedService.details.description}</p>

              {selectedService.details.partnerLogos && (
                <div className="modal-partner-logos">
                  {selectedService.details.partnerLogos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt={`${logo.split('/').pop().replace(/\.(png|jpg|jpeg|svg)$/i, '').replace(/-/g, ' ')} - Telco Egypt Partner`}
                      className={`modal-partner-logo ${logo.includes('Riosat') ? 'logo-larger' : ''}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className={`sub-services-grid ${
              selectedService.details.subServices.length === 3 ? 'grid-3' :
              selectedService.details.subServices.length === 5 ? 'grid-5' :
              selectedService.details.subServices.length === 8 ? 'grid-8' : ''
            }`}>
              {selectedService.details.subServices.map((subService, index) => (
                <div key={index} className="sub-service-card">
                  <div className="sub-service-icon">
                    <i className={`fas ${subService.icon}`}></i>
                  </div>
                  <h4>{subService.title}</h4>
                  <p>{subService.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
