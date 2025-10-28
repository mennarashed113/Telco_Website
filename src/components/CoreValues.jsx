import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  const values = [
    {
      icon: 'fa-lightbulb',
      title: 'Innovation',
      description: 'Continuously adopting cutting-edge technologies to deliver state-of-the-art solutions that drive business transformation.'
    },
    {
      icon: 'fa-award',
      title: 'Excellence',
      description: 'Committed to delivering superior quality in every project through best practices and rigorous standards.'
    },
    {
      icon: 'fa-handshake',
      title: 'Partnership',
      description: 'Building long-term relationships with clients based on trust, transparency, and mutual success.'
    }
  ];

  return (
    <section className="core-values">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR VALUES</span>
          <h2 className="section-title">Our Core Values</h2>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="icon-wrapper blue">
                <i className={`fas ${value.icon}`}></i>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
