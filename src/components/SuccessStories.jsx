import React, { useState, useEffect } from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [logoIsDragging, setLogoIsDragging] = useState(false);
  const [logoStartX, setLogoStartX] = useState(0);
  const [logoScrollLeft, setLogoScrollLeft] = useState(0);
  const logoSliderRef = React.useRef(null);

  const clients = [
    {
      logo: "TELECOM EGYPT",
      quote: "Telco Egypt transformed our entire network infrastructure, resulting in 99.9% uptime and significantly improved performance.",
      author: "Ahmed Hassan",
      position: "CTO, Telecom Egypt"
    },
    {
      logo: "NATIONAL BANK",
      quote: "The cybersecurity solution implemented by Telco Egypt has given us complete peace of mind. Their proactive monitoring and rapid response have protected us from multiple threats.",
      author: "Sara Mohamed",
      position: "IT Director, National Bank of Egypt"
    },
    {
      logo: "MINISTRY OF HEALTH",
      quote: "Our digital transformation journey with Telco Egypt exceeded all expectations. They delivered a comprehensive cloud solution that has revolutionized our operations.",
      author: "Khaled Ibrahim",
      position: "Head of IT, Ministry of Health"
    },
    {
      logo: "CAIRO UNIVERSITY",
      quote: "Outstanding service and support. Their team helped us modernize our entire campus network infrastructure.",
      author: "Dr. Fatma Ali",
      position: "IT Manager, Cairo University"
    },
    {
      logo: "EGYPTIAN PETROLEUM",
      quote: "Reliable partner for our critical infrastructure needs. Their 24/7 support ensures our operations never stop.",
      author: "Mohamed Samir",
      position: "CIO, Egyptian Petroleum Corp"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragOffset > 50) {
      prevSlide();
    } else if (dragOffset < -50) {
      nextSlide();
    }

    setDragOffset(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].pageX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragOffset > 50) {
      prevSlide();
    } else if (dragOffset < -50) {
      nextSlide();
    }

    setDragOffset(0);
  };

  // Logo slider drag handlers
  const handleLogoMouseDown = (e) => {
    setLogoIsDragging(true);
    setLogoStartX(e.pageX - logoSliderRef.current.offsetLeft);
    setLogoScrollLeft(logoSliderRef.current.scrollLeft);
  };

  const handleLogoMouseMove = (e) => {
    if (!logoIsDragging) return;
    e.preventDefault();
    const x = e.pageX - logoSliderRef.current.offsetLeft;
    const walk = (x - logoStartX) * 2;
    logoSliderRef.current.scrollLeft = logoScrollLeft - walk;
  };

  const handleLogoMouseUp = () => {
    setLogoIsDragging(false);
  };

  const handleLogoTouchStart = (e) => {
    setLogoIsDragging(true);
    setLogoStartX(e.touches[0].pageX - logoSliderRef.current.offsetLeft);
    setLogoScrollLeft(logoSliderRef.current.scrollLeft);
  };

  const handleLogoTouchMove = (e) => {
    if (!logoIsDragging) return;
    const x = e.touches[0].pageX - logoSliderRef.current.offsetLeft;
    const walk = (x - logoStartX) * 2;
    logoSliderRef.current.scrollLeft = logoScrollLeft - walk;
  };

  const handleLogoTouchEnd = () => {
    setLogoIsDragging(false);
  };

  return (
    <section className="success-stories" id="clients">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CLIENT SUCCESS</span>
          <h2 className="section-title">Trusted by Leading Organizations</h2>
        </div>

        {/* Logo Slider */}
        <div
          className={`logo-slider ${logoIsDragging ? 'dragging' : ''}`}
          ref={logoSliderRef}
          onMouseDown={handleLogoMouseDown}
          onMouseMove={handleLogoMouseMove}
          onMouseUp={handleLogoMouseUp}
          onMouseLeave={handleLogoMouseUp}
          onTouchStart={handleLogoTouchStart}
          onTouchMove={handleLogoTouchMove}
          onTouchEnd={handleLogoTouchEnd}
        >
          <div className={`logo-track ${logoIsDragging ? 'dragging' : ''}`}>
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div key={index} className="logo-item">
                <div className="client-logo">{client.logo}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="testimonial-slider">
          <button className="slider-btn prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div
            className="testimonial-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  transform: index === currentSlide
                    ? `translateX(${dragOffset}px)`
                    : index < currentSlide
                      ? `translateX(${-50 + dragOffset}px)`
                      : `translateX(${50 + dragOffset}px)`
                }}
              >
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{client.quote}</p>
                <div className="testimonial-author">
                  <strong>{client.author}</strong>
                  <span>{client.position}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="slider-dots">
          {clients.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
