import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';
import triangleAccent from '../assets/Triangle.png';
import heroCursor from '../assets/HeroCursor.png';
import heroLogo from '../assets/LogoNoBG.png';

// Plain identifiers (rather than `motion.div`/`motion.img`) so eslint's
// no-unused-vars correctly tracks their usage in JSX.
const MotionImg = motion.img;
const MotionDiv = motion.div;

const Hero = () => {
  const handleBenefitsClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {/* Subtle decorative accents that ease in left-to-right on scroll. Purely
          decorative (kept low-opacity and behind the copy) so they never compete
          with the H1 or CTA. */}
      <MotionImg
        src={triangleAccent}
        alt=""
        aria-hidden="true"
        className="hero-accent hero-accent-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 0.35, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <div className="hero-content">
        {/* The original styled headline, kept as the visual lead. It's a div, not
            a heading: the doc requires the H1 to be the "Build a Mobile App..."
            line below, and there can only be one H1 on the page. The cursor and
            logo are decorative - the words are already in the text. */}
        <div className="hero-display" aria-hidden="false">
          <span className="hero-display-line">
            One <span className="click-wrapper">click<img src={heroCursor} alt="" className="hero-cursor" /></span> closer <img src={heroLogo} alt="" className="hero-logo-inline" /> to
          </span>
          <span className="hero-display-line">loyal <span className="highlight-text">customers</span></span>
        </div>

        <h1 className="hero-title">Build a Mobile App for Your Ecommerce or Food &amp; Beverage Business</h1>
        <p className="hero-subtitle">
          Connect directly with your customers, increase loyalty, and drive more repeat purchases - without the cost and complexity of traditional app development.
        </p>

        <MotionDiv
          className="hero-buttons"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <Link to="/early-access" className="btn btn-primary">Get started</Link>
          <a href="#benefits" onClick={handleBenefitsClick} className="btn btn-secondary">Why DemaDose?</a>
        </MotionDiv>

        <p className="hero-text">
          Brands with their own app grow loyalty by 39%
        </p>
      </div>
    </section>
  );
};

export default Hero;
