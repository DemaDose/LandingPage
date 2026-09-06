import React from 'react';
import './Benefits.css';

// Formerly the "Why DemaDose?" section with draggable info cards. Replaced with a
// static benefits list per the SEO page breakdown - no drag interaction needed.
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
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="benefits-item">
              <svg className="benefits-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
