import React from 'react';
import { Link } from 'react-router-dom';
import './AudiencePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Placeholder page so the footer's "About Us" link (added for Google sitelinks)
// has somewhere real to go. TODO: replace with the actual About Us story/team copy.
const AboutUs = () => {
  return (
    <div className="app">
      <Header />
      <main className="audience-main">
        <section className="audience-hero">
          <div className="audience-container">
            <h1 className="audience-title">About DemaDose</h1>
            <p className="audience-intro">
              DemaDose helps small e-commerce and food &amp; beverage businesses launch their own mobile app, no developers, no code so they can build a direct relationship with their customers.
            </p>
            <Link to="/early-access" className="audience-cta">Get started</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
