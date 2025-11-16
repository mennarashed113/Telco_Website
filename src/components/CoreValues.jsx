import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  const values = [
    {
      image: '/img/consulting.jpg',
      title: 'Consulting and Design',
      description: 'Expert consulting services and comprehensive design solutions tailored to meet your specific telecommunications and ICT requirements.'
    },
    {
      image: '/img/deploy.jpg',
      title: 'Deploy and Test',
      description: 'Professional deployment services with rigorous testing procedures to ensure optimal performance and reliability.'
    },
    {
      image: '/img/training.jpg',
      title: 'Technical Training',
      description: 'Comprehensive training programs to empower your team with the knowledge and skills needed to maximize system efficiency.'
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
              <div className="image-wrapper">
                <img src={value.image} alt={value.title} />
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
