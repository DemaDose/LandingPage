import React from 'react';
import { Link } from 'react-router-dom';
import './AudiencePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Placeholder page for the "E-commerce" card on the homepage's "Who It's For"
// section. TODO: flesh out with dedicated e-commerce app copy, screenshots, and
// customer stories once that content is scoped.
const Ecommerce = () => {
  return (
    <div className="app">
      <Header />
      <main className="audience-main">
        <section className="audience-hero">
          <div className="audience-container">
            <h1 className="audience-title">A Mobile App Built for E-commerce Businesses</h1>
            <p className="audience-intro">
              For online stores that want to increase customer loyalty and encourage repeat purchases with their own branded app.
            </p>
            <Link to="/early-access" className="audience-cta">Get started</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ecommerce;
