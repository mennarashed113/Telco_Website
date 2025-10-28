import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Visit Us',
      content: '123 Technology Park\nSmart Village, Giza\nEgypt'
    },
    {
      icon: 'fa-phone',
      title: 'Call Us',
      content: '+20 2 1234 5678\n+20 100 123 4567'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      content: 'info@telcoegypt.com\nsupport@telcoegypt.com'
    },
    {
      icon: 'fa-clock',
      title: 'Business Hours',
      content: 'Sunday - Thursday\n9:00 AM - 6:00 PM'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CONTACT US</span>
          <h2 className="section-title">Get in Touch</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Submit a Request</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary btn-full">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon blue">
                  <i className={`fas ${info.icon}`}></i>
                </div>
                <div>
                  <h4>{info.title}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
                </div>
              </div>
            ))}

            <div className="map-placeholder">
              <i className="fas fa-map"></i>
              <p>View on Map</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
