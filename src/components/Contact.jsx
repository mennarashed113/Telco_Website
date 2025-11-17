import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, title, message) => {
    setToast({ type, title, message });

    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      hideToast();
    }, 5000);
  };

  const hideToast = () => {
    setToast(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    showToast('loading', 'Sending...', 'Please wait while we send your message');

    // EmailJS configuration
    const serviceId = 'service_x13zynp';
    const templateId = 'template_3irqanh';
    const publicKey = 'UOK8DUc6F4VBjMKxA';

    // Prepare template parameters matching EmailJS template variables
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        showToast('success', 'Message Sent!', 'Thank you for your message! We will get back to you shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        showToast('error', 'Error', 'Sorry, there was an error sending your message. Please try again or contact us directly.');
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Visit Us',
      content: '2011 Barakat St. - AL Mearag\nZahraa AL Maadi - Ring Road\nEgypt'
    },
    {
      icon: 'fa-phone',
      title: 'Call Us',
      content: '+2 0244 74 891\n+2 0122 365 8985'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      content: 'info@telco-eg.com\nsupport@telco-eg.com'
    },
    {
      icon: 'fa-clock',
      title: 'Business Hours',
      content: 'Sunday - Thursday\n9:00 AM - 6:00 PM'
    }
  ];

  return (
    <section className="contact" id="contact">
      {/* Toast Notification */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          <div className="toast-icon">
            {toast.type === 'success' && <i className="fas fa-check"></i>}
            {toast.type === 'error' && <i className="fas fa-times"></i>}
            {toast.type === 'loading' && <i className="fas fa-spinner"></i>}
          </div>
          <div className="toast-content">
            <div className="toast-title">{toast.title}</div>
            <div className="toast-message">{toast.message}</div>
          </div>
          <button className="toast-close" onClick={hideToast}>×</button>
        </div>
      )}

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
              <button type="submit" className="btn-primary btn-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
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

            <div className="map-placeholder" onClick={() => window.open('https://maps.app.goo.gl/pTadpArQZn3g4q48A', '_blank')}>
              <i className="fas fa-map-marked-alt"></i>
              <p>Interactive Map</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
