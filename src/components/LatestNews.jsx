import React, { useState } from 'react';
import './LatestNews.css';

const LatestNews = () => {
  const [email, setEmail] = useState('');

  const featuredNews = [
    {
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
      date: 'October 15, 2024',
      title: 'Telco Egypt Launches 5G Network Solutions',
      description: "We're proud to announce our new 5G infrastructure solutions, bringing ultra-fast connectivity to enterprises across Egypt."
    },
    {
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
      date: 'October 8, 2024',
      title: 'Partnership with Leading Cloud Provider',
      description: 'Strategic partnership announced to deliver advanced cloud solutions and digital transformation services.'
    },
    {
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop',
      date: 'September 28, 2024',
      title: 'New Cybersecurity Operations Center',
      description: 'State-of-the-art SOC facility opened to provide 24/7 security monitoring and threat response.'
    }
  ];

  const newsItems = [
    {
      title: 'Upcoming Event',
      description: 'Join us at the Egypt ICT Summit 2024 - Booth #42',
      date: 'Nov 5, 2024'
    },
    {
      title: 'New Contract',
      description: 'Major government contract awarded for nationwide network upgrade',
      date: 'Oct 20, 2024'
    },
    {
      title: 'Training Initiative',
      description: 'Free cybersecurity training program for Egyptian students',
      date: 'Oct 12, 2024'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    setEmail('');
  };

  return (
    <section className="latest-news">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">NEWS & UPDATES</span>
          <h2 className="section-title">Latest Updates</h2>
        </div>

        <div className="news-grid">
          {featuredNews.map((news, index) => (
            <div key={index} className="news-card featured">
              <div className="news-image">
                <img src={news.image} alt={news.title} />
              </div>
              <div className="news-content">
                <span className="news-date">{news.date}</span>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="news-list">
          {newsItems.map((item, index) => (
            <div key={index} className="news-item">
              <div className="news-item-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <span className="news-date">{item.date}</span>
            </div>
          ))}
        </div>

        <div className="newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest news and insights</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
