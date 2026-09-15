import React from 'react';
import './DesignShowcase.css';
import pancakeHome from '../assets/templates/mobile-app-home-screen.png';
import coffeeHome from '../assets/templates/coffee-shop-home-screen.png';
import sushiMenu from '../assets/templates/mobile-app-menu-screen.png';
import sushiMenuDark from '../assets/templates/restaurant-menu-screen-dark.png';
import cafeWelcome from '../assets/templates/mobile-app-welcome-screen.png';
import restaurantWelcome from '../assets/templates/restaurant-welcome-screen.png';
import cafeWelcomeOrange from '../assets/templates/cafe-welcome-screen-orange.png';
import cafeWelcomePurple from '../assets/templates/cafe-welcome-screen-purple.png';
import cafeWelcomePink from '../assets/templates/cafe-welcome-screen-pink.png';
import cafeWelcomeGold from '../assets/templates/cafe-welcome-screen-gold.png';
import deliveryHome from '../assets/templates/mobile-app-ordering-screen.png';
import deliverySplash from '../assets/templates/food-delivery-splash-screen.png';

const DesignShowcase = () => {
  // `alt` describes what each screen actually shows - the old labels ("Home 1",
  // "Welcome 3") were the vague naming the SEO doc asks us to avoid.
  const baseTemplates = [
    { alt: 'Pancake shop app home screen with featured items and categories', logo: pancakeHome },
    { alt: 'Coffee shop app home screen with a cappuccino menu and prices', logo: coffeeHome },
    { alt: 'Restaurant app menu screen listing sushi rolls with ratings', logo: sushiMenu },
    { alt: 'Restaurant app menu screen in a dark theme listing sushi rolls', logo: sushiMenuDark },
    { alt: 'Cafe app welcome screen with a pink and green gradient', logo: cafeWelcome },
    { alt: 'Restaurant app welcome screen with reserve and order buttons', logo: restaurantWelcome },
    { alt: 'Cafe app welcome screen with an orange gradient', logo: cafeWelcomeOrange },
    { alt: 'Cafe app welcome screen with a purple gradient', logo: cafeWelcomePurple },
    { alt: 'Cafe app welcome screen with a pink gradient', logo: cafeWelcomePink },
    { alt: 'Cafe app welcome screen with a gold gradient', logo: cafeWelcomeGold },
    { alt: 'Food delivery app home screen with delivery and takeout options', logo: deliveryHome },
    { alt: 'Food delivery app splash screen with the brand name', logo: deliverySplash }
  ];

  // Function to shuffle array
  const shuffleArray = (array, seed) => {
    const shuffled = [...array];
    let currentIndex = shuffled.length;
    let randomValue = seed;
    
    // Simple seeded random function
    const seededRandom = () => {
      randomValue = (randomValue * 9301 + 49297) % 233280;
      return randomValue / 233280;
    };
    
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(seededRandom() * currentIndex);
      currentIndex--;
      [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
    }
    return shuffled;
  };

  // Create different shuffled arrays for each slider
  const sliderTemplates = [
    shuffleArray(baseTemplates, 12345),
    shuffleArray(baseTemplates, 67890),
    shuffleArray(baseTemplates, 24680),
    shuffleArray(baseTemplates, 13579),
    shuffleArray(baseTemplates, 98765)
  ];

  return (
    <section className="design-section">
      <div className="design-container">
        <h2 className="design-title">
          Design that makes you<br />
          stand out
        </h2>
        
        <div className="carousels-container">
          {[0, 1, 2, 3, 4].map((carouselIndex) => (
            <div key={carouselIndex} className={`templates-slider-wrapper ${carouselIndex === 1 || carouselIndex === 3 ? 'slider-down' : 'slider-up'}`}>
              {/* First group */}
              <div className="templates-group">
                {sliderTemplates[carouselIndex].map((template, index) => (
                  <div key={`c${carouselIndex}-group1-${index}`} className="template-item">
                    <img src={template.logo} alt={template.alt} className="template-logo" loading="lazy" />
                  </div>
                ))}
              </div>
              {/* Duplicate group for seamless loop. Decorative: alt is empty so
                  the same descriptions aren't repeated to crawlers. */}
              <div aria-hidden="true" className="templates-group">
                {sliderTemplates[carouselIndex].map((template, index) => (
                  <div key={`c${carouselIndex}-group2-${index}`} className="template-item">
                    <img src={template.logo} alt="" className="template-logo" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;

