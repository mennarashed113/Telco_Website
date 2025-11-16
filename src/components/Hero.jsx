import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [particles, setParticles] = useState([]);
  const [metricsCount, setMetricsCount] = useState({
    clients: 0,
    years: 0,
    uptime: 0
  });

  useEffect(() => {
    // Generate floating particles
    const particleArray = [];
    for (let i = 0; i < 20; i++) {
      particleArray.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10
      });
    }
    setParticles(particleArray);
  }, []);

  useEffect(() => {
    // Animated counter for metrics
    const duration = 4000; // 4 seconds
    const targets = {
      clients: 500,
      years: 10,
      uptime: 99.9
    };

    const startTime = Date.now();

    const animateCount = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setMetricsCount({
        clients: Math.floor(targets.clients * easeOutQuart),
        years: Math.floor(targets.years * easeOutQuart),
        uptime: parseFloat((targets.uptime * easeOutQuart).toFixed(1))
      });

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    // Start animation after a short delay
    const timer = setTimeout(() => {
      animateCount();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadProfile = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/TELCO-Company-Profile.pdf';
    link.download = 'TELCO-Company-Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero" id="home">
      {/* Geometric background patterns */}
      <div className="hero-geometric-bg">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
      </div>

      {/* Floating particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          ></div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="container hero-container">
        {/* Left content */}
        <div className="hero-content-wrapper">
          <div className="accent-line"></div>
          <div className="hero-content">
            <h1>
              <span className="highlight">Leading</span><br />
              ELV/ICT and Interactive Hospitality solutions in Egypt<br />
            </h1>
            <p>
             TELCO Engineering Company is established in 2014 under name of TELCO “Target Engineering for Low Current Systems” with main purpose of Design, Delivery, Install and integration a solutions of ELV/ICT Systems.
            </p>

            {/* Key metrics */}
            <div className="hero-metrics">
              <div className="metric-item">
                <span className="metric-number">{metricsCount.clients}+</span>
                <span className="metric-label">Clients</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">{metricsCount.years}+</span>
                <span className="metric-label">Years</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">{metricsCount.uptime}%</span>
                <span className="metric-label">Uptime</span>
              </div>
            </div>

            <button className="btn-hero" onClick={handleDownloadProfile}>
              <i className="fas fa-download"></i> Download Company Profile
            </button>
          </div>
        </div>

        {/* Right visual element */}
        <div className="hero-visual">
          <div className="visual-circle circle-1"></div>
          <div className="visual-circle circle-2"></div>
          <div className="visual-circle circle-3"></div>
          <div className="network-illustration">
            <div className="network-node node-1"></div>
            <div className="network-node node-2"></div>
            <div className="network-node node-3"></div>
            <div className="network-node node-4"></div>
            <div className="network-node node-5"></div>
            <div className="connection-line line-1"></div>
            <div className="connection-line line-2"></div>
            <div className="connection-line line-3"></div>
            <div className="connection-line line-4"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
