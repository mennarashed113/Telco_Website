import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('philosophy');

  const tabs = [
    {
      id: 'philosophy',
      icon: 'fa-compass',
      title: 'Philosophy',
      content: (
        <>
          <p>
            As an independent company and an authorized distributor for many vendors and as an authorized
            integrator for others:
          </p>
          <p>
            We design the most cost-effective systems to meet the client's operations requirement within
            our trusted vendors.
          </p>
          <p>
            The system concept and design would be submitted to our Engineering Manager for the formulation
            of working drawings and comments; these will then be returned for approval.
          </p>
          <p>
            To this end, our design and supervision team based both on site and at our technical office
            would be supported for the contract period by other members of the team working on the project.
          </p>
          <p>
            A communication structure will be established, to ensure that the required exchange of information.
          </p>
          <p className="highlight-text">
            The proper presentation and regular progress reports are offered on the occasions of the regular
            site meetings with the project management / consultancy team.
          </p>
        </>
      )
    },
    {
      id: 'method',
      icon: 'fa-drafting-compass',
      title: 'Method Statement',
      content: (
        <>
          <p>
            Our design team utilizes its understanding of the design process, contract forms, construction
            procedure, procurement routes and industrial capabilities, to assist design teams in managing
            the design process through all phases of a project's life.
          </p>
          <p>
            Our design team implements management systems reflecting the preferred working method of their
            clients, protecting their interests while acting as a link with members of the client's project
            team and the contractor. With this in mind, we are constantly looking for "Value Engineering"
            to offer our clients, reducing your costs, without reducing the specification or operating requirements.
          </p>
          <p>
            We understand that there has been a need to accurately communicate client and designer intentions
            to those carrying out the installation. We also recognize the need to prepare appropriate
            specifications reflecting the contractual conditions.
          </p>
          <p className="highlight-text">
            We believe that the project design teams produce specifications that are geared to today's modern
            systems requirements which reflect the aspiration and intent of our client.
          </p>
        </>
      )
    },
    {
      id: 'resources',
      icon: 'fa-building',
      title: 'Company Resources',
      content: (
        <>
          <p>
            As seen from the list of systems under our scope of expertise, TELCO handles high-end projects.
          </p>
          <p>
            Our specialist engineering departments consist of fully qualified and trained engineers in
            low current fields. They are required to keep abreast of the latest techniques and knowledge
            available by attending continuous training themselves in order to provide the most up-to-date
            information to all customers of our systems.
          </p>
          <p className="highlight-text">
            We pride ourselves on our investment in resources and staff, all with the express purpose of
            making our solutions perform at their best to guarantee the customer satisfaction.
          </p>
        </>
      )
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">WHO WE ARE</span>
          <h2 className="section-title">Leading ICT Solutions Provider in Egypt</h2>
        </div>

        {/* Main Content with Tabs */}
        <div className="about-content">
          <div className="about-tabs-container">
            <div className="tabs-header">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <i className={`fas ${tab.icon}`}></i>
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            <div className="tabs-content">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-content ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <h3>{tab.title}</h3>
                  {tab.content}
                </div>
              ))}
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
