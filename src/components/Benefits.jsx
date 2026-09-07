import React from 'react';
import { motion } from 'framer-motion';
import './Benefits.css';

// Plain identifier (rather than `motion.li`) so eslint's no-unused-vars
// correctly tracks usage in JSX - see Hero.jsx for the same pattern.
const MotionLi = motion.li;

// Formerly the "Why DemaDose?" section with cards you could drag around the
// screen. Per the SEO breakdown, those become static content that eases in
// from left to right as you scroll - no drag interaction.
const BENEFITS = [
  'Increase customer loyalty',
  'Drive repeat purchases',
  'Reach customers directly',
  'Strengthen your brand',
  'Lower the cost of traditional app development',
];

const Benefits = () => {
  return (
    <section id="benefits" className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-title">Why Build a Mobile App for Your Business?</h2>

        <ul className="benefits-list">
          {BENEFITS.map((benefit, index) => (
            <MotionLi
              key={benefit}
              className="benefits-item"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
            >
              <svg className="benefits-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{benefit}</span>
            </MotionLi>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
