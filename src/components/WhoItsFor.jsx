import React from 'react';
import { Link } from 'react-router-dom';
import './WhoItsFor.css';

const AUDIENCES = [
  {
    title: 'E-commerce',
    text: 'For online stores that want to increase customer loyalty and encourage repeat purchases.',
    to: '/ecommerce',
    linkText: 'Ecommerce Mobile App',
  },
  {
    title: 'Restaurants & Cafes',
    text: 'For restaurants and cafés to manage orders, take payments, and keep customers coming back.',
    to: '/restaurants-cafes',
    linkText: 'Restaurant Mobile App',
  },
  {
    title: 'Retail and Supermarkets',
    text: 'For retail stores and supermarkets that want to go digital and make shopping easier.',
    to: '/retail-supermarkets',
    linkText: 'Retail Mobile App',
  },
];

const WhoItsFor = () => {
  return (
    <section id="who-its-for" className="who-section">
      <div className="who-container">
        <h2 className="who-title">Mobile Apps Built for Your Business</h2>

        <div className="who-grid">
          {AUDIENCES.map((audience) => (
            <Link key={audience.title} to={audience.to} className="who-card">
              <h3 className="who-card-title">{audience.title}</h3>
              <p className="who-card-text">{audience.text}</p>
              <span className="who-card-link">{audience.linkText} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
