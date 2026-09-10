import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/LogoNoBG.png';
import { goToSection } from '../utils/sectionLink';

// Top-level nav links. `sectionId` links scroll to a homepage section (navigating
// home first if needed); `to` links are real routes.
const NAV_LINKS = [
  { label: 'Solutions', sectionId: 'solutions' },
  // TODO: no standalone Pricing section spec exists yet - this links to the
  // "How much does DemaDose cost?" FAQ answer until a dedicated section is defined.
  { label: 'Pricing', sectionId: 'pricing' },
  { label: 'FAQ', sectionId: 'faq' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', sectionId: 'contact' },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleSectionLink = (e, id) => {
    setMenuOpen(false);
    goToSection(navigate, location.pathname, id, e);
  };

  const renderNavLink = (link, className) => {
    if (link.to) {
      return (
        <Link key={link.label} to={link.to} className={className} onClick={() => setMenuOpen(false)}>
          {link.label}
        </Link>
      );
    }
    return (
      <a
        key={link.label}
        href={`#${link.sectionId}`}
        className={className}
        onClick={(e) => handleSectionLink(e, link.sectionId)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="DemaDose Logo" className="logo-icon" />
        </Link>

        <nav className="nav" aria-label="Primary">
          {NAV_LINKS.map((link) => renderNavLink(link, 'nav-link'))}
          <Link to="/early-access" className="nav-cta">Get Started</Link>
        </nav>

        <div className="header-actions">
          <div className="globe-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#EDA551" strokeWidth="2"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#EDA551" strokeWidth="2"/>
            </svg>
          </div>

          <button
            type="button"
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile hamburger menu */}
      <div className={`mobile-nav-backdrop ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true"></div>
      <nav id="mobile-nav" className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile">
        {NAV_LINKS.map((link) => renderNavLink(link, 'mobile-nav-link'))}
        <Link to="/early-access" className="mobile-nav-cta" onClick={() => setMenuOpen(false)}>Get Started</Link>
      </nav>
    </header>
  );
};

export default Header;
