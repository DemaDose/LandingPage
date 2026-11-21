import React from 'react';
import './Careers.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { JOB_LISTINGS } from '../data/jobs';

const MAX_DESCRIPTION_WORDS = 14;

function getPostedLabel(postedAt) {
  if (!postedAt) return null;
  const posted = new Date(postedAt);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  posted.setHours(0, 0, 0, 0);
  const diffMs = today - posted;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Posted today';
  if (diffDays === 1) return 'Posted 1 day ago';
  if (diffDays < 7) return `Posted ${diffDays} days ago`;
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks === 1) return 'Posted 1 week ago';
  if (diffWeeks < 4) return `Posted ${diffWeeks} weeks ago`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) return 'Posted 1 month ago';
  return `Posted ${diffMonths} months ago`;
}

function truncateToWords(text, maxWords) {
  if (!text) return '';
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}

const Careers = () => {
  return (
    <div className="app">
      <Header />
      <main className="careers-main">
        <section className="careers-section">
          <div className="careers-container">
            <h1 className="careers-title">Careers at DemaDose</h1>
            <p className="careers-intro">
              Join us in making powerful app experiences affordable for every brand.
            </p>
            <div className="careers-cards">
              {JOB_LISTINGS.map((job) => (
                <a
                  key={job.id}
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="careers-card"
                >
                  <div className="careers-card-content">
                    <div className="careers-card-top-row">
                      <span className="careers-card-department">{job.department}</span>
                      <span className="careers-card-type">Remote</span>
                    </div>
                    <h2 className="careers-card-title">{job.title}</h2>
                    {job.subtitle && (
                      <span className="careers-card-subtitle">{job.subtitle}</span>
                    )}
                    <p className="careers-card-description">
                      {truncateToWords(job.description, MAX_DESCRIPTION_WORDS)}
                    </p>
                  </div>
                  <div className="careers-card-right">
                    {job.postedAt && (
                      <span className="careers-card-posted">{getPostedLabel(job.postedAt)}</span>
                    )}
                    <span className="careers-card-cta">View role →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
