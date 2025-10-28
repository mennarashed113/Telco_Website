import React, { useState, useEffect } from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
  const industries = [
    { icon: 'fa-building', title: 'Government', subtitle: 'Ministries & Public Sector' },
    { icon: 'fa-university', title: 'Banking', subtitle: 'Financial Institutions' },
    { icon: 'fa-phone-volume', title: 'Telecom', subtitle: 'Service Providers' },
    { icon: 'fa-hospital', title: 'Healthcare', subtitle: 'Hospitals & Clinics' },
    { icon: 'fa-graduation-cap', title: 'Education', subtitle: 'Universities & Schools' },
    { icon: 'fa-industry', title: 'Energy', subtitle: 'Oil & Gas Sector' }
  ];

  const [metricsCount, setMetricsCount] = useState({
    clients: 0,
    years: 0,
    uptime: 0,
    support: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const metricsRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const duration = 3000;
            const targets = {
              clients: 500,
              years: 15,
              uptime: 99.9,
              support: 24
            };
            const startTime = Date.now();

            const animateCount = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);

              setMetricsCount({
                clients: Math.floor(targets.clients * easeOutQuart),
                years: Math.floor(targets.years * easeOutQuart),
                uptime: parseFloat((targets.uptime * easeOutQuart).toFixed(1)),
                support: Math.floor(targets.support * easeOutQuart)
              });

              if (progress < 1) {
                requestAnimationFrame(animateCount);
              }
            };

            setTimeout(() => {
              animateCount();
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="trusted-by">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">TRUSTED BY</span>
          <h2 className="section-title">Industry Leaders</h2>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon blue">
                <i className={`fas ${industry.icon}`}></i>
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="trust-metrics" ref={metricsRef}>
          <div className="metric-item">
            <div className="metric-number">{metricsCount.clients}+</div>
            <div className="metric-label">Enterprise Clients</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">{metricsCount.years}+</div>
            <div className="metric-label">Years Experience</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">{metricsCount.uptime}%</div>
            <div className="metric-label">Uptime SLA</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">{metricsCount.support}/7</div>
            <div className="metric-label">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
