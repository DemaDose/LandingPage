import React from 'react';
import './CustomizeSection.css';
import homeScreen from '../assets/templates/mobile-app-home-screen.png';
import menuScreen from '../assets/templates/mobile-app-menu-screen.png';
import welcomeScreen from '../assets/templates/mobile-app-welcome-screen.png';
import orderingScreen from '../assets/templates/mobile-app-ordering-screen.png';

// Static design examples. Replaces the old framer-motion "wrapper" animation
// (auto-clicking through colors/text) with a plain, static layout - copy stays
// as live text rather than being baked into the screenshots.
const DESIGN_OPTIONS = [
  {
    image: homeScreen,
    alt: 'Mobile app home screen with a food menu and pricing',
    title: 'Home Screen',
    text: 'Showcase your products or menu with a layout and pricing that match your brand.',
  },
  {
    image: menuScreen,
    alt: 'Mobile app menu screen with restaurant dish listings',
    title: 'Menu & Catalog',
    text: 'Organize your menu or product catalog exactly the way you want customers to see it.',
  },
  {
    image: welcomeScreen,
    alt: 'Mobile app welcome screen with custom branding',
    title: 'Welcome Screen',
    text: 'Greet customers with a branded welcome screen the moment they open your app.',
  },
  {
    image: orderingScreen,
    alt: 'Mobile app ordering screen with delivery and takeout options',
    title: 'Ordering Screen',
    text: 'Let customers browse, add to cart, and check out in just a few taps.',
  },
];

const CustomizeSection = () => {
  return (
    <section className="customize-section">
      <div className="customize-container">
        <h2 className="customize-title">Create an App That Looks Like Your Brand</h2>
        <p className="customize-subtitle">
          Customize your app with your own colors, images, content, and sections.
        </p>

        <div className="design-options-grid">
          {DESIGN_OPTIONS.map((option) => (
            <figure key={option.title} className="design-option">
              <img src={option.image} alt={option.alt} className="design-option-image" loading="lazy" />
              <figcaption>
                <h3 className="design-option-title">{option.title}</h3>
                <p className="design-option-text">{option.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
