import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">WHO WE ARE</span>
          <h2 className="section-title">Leading ICT Solutions Provider in Egypt </h2>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                alt="Telecommunications Technology"
              />
              <div className="image-overlay"></div>
              <div className="image-decoration decoration-1"></div>
              <div className="image-decoration decoration-2"></div>
            </div>
          </div>

          <div className="about-content">
            <p className="about-description">
              With over two decades of experience, we've established ourselves as
              Egypt's premier telecommunications and ICT solutions provider. Our
              commitment to innovation and excellence has helped hundreds of
              organizations transform their digital infrastructure.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div>
                  <h4>Industry Expertise</h4>
                  <p>
                    Deep knowledge across telecommunications, IT infrastructure, and
                    enterprise solutions.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div>
                  <h4>Certified Professionals</h4>
                  <p>
                    Team of highly skilled engineers and consultants with
                    international certifications.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <div>
                  <h4>End-to-End Solutions</h4>
                  <p>
                    Complete lifecycle support from planning and deployment to
                    maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="about-bg-decoration">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
      </div>
    </section>
  );
};

export default About;
