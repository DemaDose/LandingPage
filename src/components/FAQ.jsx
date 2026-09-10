import React from 'react';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    q: 'What is DemaDose?',
    a: 'Think of DemaDose as "Shopify, but for building a loyalty app". We let small e-commerce and restaurant businesses launch their own mobile app, no developers, no code so they can build a direct relationship with their customers instead of renting that relationship from a marketplace.',
  },
  {
    q: 'How does DemaDose work?',
    a: 'You use a ready made framework to set up and customize your own mobile app with your colors, content, and sections. Once it’s set up, you can take payments and use built in loyalty tools like push notifications, rewards, and one tap reordering to bring customers back directly without paying marketplace commissions or running ads every time.',
  },
  {
    q: 'Do I need coding experience?',
    a: 'DemaDose is completely no code. You do not need to know how to code or hire a developer to build and customize your app.',
  },
  {
    q: 'Can I create a restaurant app?',
    a: 'Yes, you can create a restaurant app. DemaDose is built specifically for restaurants and food & beverage businesses - especially fast, high frequency daily, or weekly pickup spots and cafes - to manage orders, take payments, and keep customers coming back.',
  },
  {
    q: 'Can I create an e-commerce app?',
    a: 'Yes, you can create an e-commerce app. DemaDose is designed for small to mid sized online stores to launch their own app, increase customer loyalty, own their customer data, and drive repeat purchases.',
  },
  {
    q: 'Can I publish my app on iOS and Android?',
    a: 'You’re able to publish your app on iOS and Android, however we are developing for Android first and iOS will come later on.',
  },
  {
    // Also serves as the target for the header's "Pricing" nav link - there is no
    // standalone Pricing section yet (see TODO in Header.jsx), so it points here.
    id: 'pricing',
    q: 'How much does DemaDose cost?',
    a: 'The pricing right now for DemaDose early access is $10/month and there’s 0% commission so we never take a cut of merchant sales.',
  },
];

// FAQPage structured data so Google can surface these as rich-result snippets
// for the longer, question-style searches this section targets.
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

const FAQ = () => {
  return (
    <section id="faq" className="faq-section">
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <dl className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} id={item.id} className="faq-item">
              <dt className="faq-question">{item.q}</dt>
              <dd className="faq-answer">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
