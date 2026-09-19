import React from 'react';
import './Solutions.css';

// Renamed from the old nav-dropdown labels ("Payment Solution", "App Publish",
// "Loyal Customers", "App templates", etc.) to plain, descriptive tile text.
const SOLUTIONS = [
  {
    title: 'Mobile App',
    text: 'Run your business anytime, from your customers’ phones.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Payments',
    text: 'Accept and manage customer payments online, right in your app.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Analytics',
    text: 'Get clear reports on orders, customers, and sales trends.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" y1="20" x2="4" y2="12" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="20" y1="20" x2="20" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Customer Loyalty',
    text: 'Reward repeat customers and boost loyalty by up to 39%.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Marketing',
    text: 'Promote your business and reach more customers directly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1z" />
        <path d="M15 8a4 4 0 0 1 0 8" />
      </svg>
    ),
  },
  {
    title: 'App Publishing',
    text: 'Publish your app on Google Play and the App Store, no extra charge.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
  },
  {
    title: 'Templates',
    text: 'Start from ready-made app templates built for your industry.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-container">
        <h2 className="solutions-title">Everything You Need to Build and Grow Your Business App</h2>

        <div className="solutions-grid">
          {SOLUTIONS.map((solution) => (
            <div key={solution.title} className="solution-card">
              <div className="solution-icon">{solution.icon}</div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-text">{solution.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
