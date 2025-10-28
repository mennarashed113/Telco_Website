import React from 'react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      icon: 'fa-network-wired',
      title: 'Network Infrastructure',
      description: 'Design, deployment, and management of enterprise-grade network solutions including LAN, WAN, and wireless networks.',
      color: 'orange'
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services including migration, hybrid cloud, and cloud-native application development.',
      color: 'blue'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your infrastructure from evolving cyber threats and ensure compliance.',
      color: 'orange'
    },
    {
      icon: 'fa-phone-alt',
      title: 'Unified Communications',
      description: 'Integrated communication platforms including VoIP, video conferencing, and collaboration tools.',
      color: 'orange'
    },
    {
      icon: 'fa-cube',
      title: 'IoT & Smart Solutions',
      description: 'Internet of Things implementations for smart cities, buildings, and industrial automation.',
      color: 'green'
    },
    {
      icon: 'fa-users-cog',
      title: 'Managed Services',
      description: '24/7 monitoring, maintenance, and support services to ensure optimal performance of your IT infrastructure.',
      color: 'orange'
    }
  ];

  return (
    <section className="solutions" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR SERVICES</span>
          <h2 className="section-title">Comprehensive ICT Solutions</h2>
        </div>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
              <div className={`solution-icon ${solution.color}`}>
                <i className={`fas ${solution.icon}`}></i>
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <div className="card-hover-effect">
                <span className="learn-more">Learn More <i className="fas fa-arrow-right"></i></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
