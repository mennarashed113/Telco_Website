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
          <div className="about-content">
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

          <div className="right-column">
            <div className="company-resources">
              <div className="resources-header">
                <h3>Company Resources</h3>
              </div>
              <div className="resources-content">
                <p className="resources-intro">
                  As seen from the list of systems under our scope of expertise, TELCO handles high-end projects.
                </p>
                <p className="resources-description">
                  Our specialist engineering departments consist of fully qualified and trained engineers in low current fields. They are required to keep abreast of the latest techniques and knowledge available by attending continuous training themselves in order to provide the most up-to-date information to all customers of our systems.
                </p>
                <p className="resources-commitment">
                  We pride ourselves on our investment in resources and staff, all with the express purpose of making our solutions perform at their best to guarantee the customer satisfaction.
                </p>
              </div>
              <div className="resources-decoration">
                <div className="decoration-line"></div>
              </div>
            </div>

            <div className="company-philosophy">
              <div className="philosophy-header">
                <h3>Philosophy</h3>
              </div>
              <div className="philosophy-content">
                <p className="philosophy-intro">
                  As an independent company and an authorized distributor for many vendors and as an authorized integrator for others:
                </p>
                <p className="philosophy-description">
                  We design the most cost-effective systems to meet the client's operations requirement within our trusted vendors.
                </p>
                <p className="philosophy-description">
                  The system concept and design would be submitted to our Engineering Manager for the formulation of working drawings and comments; these will then be returned for approval.
                </p>
                <p className="philosophy-description">
                  To this end, our design and supervision team based both on site and at our technical office would be supported for the contract period by other members of the team working on the project.
                </p>
                <p className="philosophy-description">
                  A communication structure will be established, to ensure that the required exchange of information.
                </p>
                <p className="philosophy-commitment">
                  The proper presentation and regular progress reports are offered on the occasions of the regular site meetings with the project management / consultancy team.
                </p>
              </div>
              <div className="philosophy-decoration">
                <div className="decoration-line"></div>
              </div>
            </div>

            <div className="method-statement">
              <div className="method-header">
                <h3>Method Statement</h3>
              </div>
              <div className="method-content">
                <p className="method-intro">
                  Our design team utilizes its understanding of the design process, contract forms, construction procedure, procurement routes and industrial capabilities, to assist design teams in managing the design process through all phases of a project's life.
                </p>
                <p className="method-description">
                  Our design team implements management systems reflecting the preferred working method of their clients, protecting their interests while acting as a link with members of the client's project team and the contractor. With this in mind, we are constantly looking for "Value Engineering" to offer our clients, reducing your costs, without reducing the specification or operating requirements.
                </p>
                <p className="method-description">
                  We understand that there has been a need to accurately communicate client and designer intentions to those carrying out the installation. We also recognize the need to prepare appropriate specifications reflecting the contractual conditions.
                </p>
                <p className="method-commitment">
                  We believe that the project design teams produce specifications that are geared to today's modern systems requirements which reflect the aspiration and intent of our client.
                </p>
              </div>
              <div className="method-decoration">
                <div className="decoration-line"></div>
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
