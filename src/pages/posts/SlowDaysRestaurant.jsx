import React from 'react';
import { Link } from 'react-router-dom';

// Article body for /blog/how-to-get-customers-on-slow-days-restaurant. Hero,
// stat cards, TOC and FAQ come from src/data/blogPosts.js and are rendered by
// BlogPost.jsx.
const SlowDaysRestaurant = () => (
  <>
    <section className="blog-section" id="s1">
      <p className="blog-lead">
        Every restaurant owner in Dubai knows the feeling of a slow afternoon. Your cooks are ready in the kitchen, the staff is on the clock, the food is prepped, but your dining room is completely empty. You are losing money every hour the tables sit empty.
      </p>
      <p>
        You try to fix it by taking a nice photo of a burger and posting it on your cafe&apos;s Instagram. You hope hungry people will see it and walk in, but nobody comes.
      </p>
      <p>
        Here is why social media cannot fix your slow days, and how UAE restaurants fill their empty tables in just five minutes.
      </p>
    </section>

    <section className="blog-section" id="s2">
      <h2>Why Can&apos;t Instagram Save a Slow Day?</h2>
      <p>Instagram is great for showing off your brand, but it is terrible for getting customers right now.</p>
      <p>
        When you post a photo at 2 PM on a Tuesday, Instagram&apos;s algorithm does not show it to all your followers. It hides the post. Most of your customers will not see that picture of your burger until 9 PM, when they are already sitting in bed.
      </p>
      <p>You cannot control who sees your social media posts. If you want to fill your restaurant on a quiet afternoon, you need a way to reach your customers instantly.</p>
    </section>

    <section className="blog-section" id="s3">
      <h2>The Secret to Instant Orders: Push Alerts</h2>
      <p>Imagine having a magic button that instantly buzzes the phones of 500 people who live near your shop and already love your food.</p>
      <p>
        When you have your own restaurant loyalty app, you get that magic button. It is called a push notification. A push notification sends a message directly to your customer&apos;s home screen exactly when you want them to see it.
      </p>
      <p>When your restaurant is empty at 3 PM, you do not post on Instagram. Instead, you send a free push alert to your app users:</p>
      <div className="blog-pull-quote">
        &ldquo;Happy Hour! Come in right now for half the price of appetizers until 5 PM!&rdquo;
      </div>
    </section>

    <section className="blog-section" id="s4">
      <h2>How to Get Your Shop App Today for $10/Month</h2>
      <p>You might think building a custom app with push notifications costs thousands of Dirhams. It used to, but not anymore.</p>
      <p>
        With DemaDose, you can launch your own restaurant app today without a single line of code. It costs just $10 a month, about AED 37.
      </p>
      <p>DemaDose is built specifically for food and beverage brands. You just pick a ready-made template, add your shop&apos;s logo, and your app is ready.</p>
      <ul className="blog-check-list">
        <li><span className="blog-check-icon">✓</span><strong>No Code Required:</strong> Choose a template built for cafes and restaurants, add your branding, and launch.</li>
        <li><span className="blog-check-icon">✓</span><strong>Loyalty Points:</strong> Your customers earn reward points on every order, giving them a reason to keep coming back.</li>
        <li><span className="blog-check-icon">✓</span><strong>Unlimited Push Alerts:</strong> Send a free push alert to every app user whenever your shop gets quiet.</li>
      </ul>
      <p>
        Your app can be published on Android now through Google Play (you will need a Google Developer account, and DemaDose will help you set it up); iOS support is coming later.
      </p>
      <p>Best of all, DemaDose takes 0% commission. When those customers order through your new app, you keep 100% of the money.</p>

      <div className="blog-mid-cta">
        <h3>Stop Waiting and Hoping for Customers to Walk In</h3>
        <p>Take control of your slow days.</p>
        <Link to="/early-access" className="blog-cta-btn">Get Early Access to DemaDose</Link>
        <p className="blog-cta-subtext">Launch your 0% commission app today</p>
      </div>
    </section>

    <section className="blog-section" id="s6">
      <h2>The Bottom Line</h2>
      <div className="blog-dark-card">
        <p><strong>Stop waiting and hoping for customers to walk in. Take control of your slow days.</strong></p>
      </div>
    </section>
  </>
);

export default SlowDaysRestaurant;
