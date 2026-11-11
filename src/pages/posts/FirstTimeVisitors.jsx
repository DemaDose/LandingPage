import React from 'react';
import { Link } from 'react-router-dom';

// Article body for /blog/how-to-make-first-time-visitors-come-back-every-week.
// Hero, stat cards, TOC and FAQ come from src/data/blogPosts.js and are
// rendered by BlogPost.jsx.
const FirstTimeVisitors = () => (
  <>
    <section className="blog-section" id="s1">
      <p className="blog-lead">
        You make great food and you love to see happy people eat in your cafe or restaurant. They smile, pay their bill, and leave happy.
      </p>
      <p>You think, &ldquo;They will be back next week!&rdquo; Then weeks pass. They do not come back.</p>
      <p>
        It is easier for a guest to visit one time. But getting them to come back every week is how your business grows. If you want new people to come back again and again, you do not need to spend lots of cash on ads. You just need a simple plan.
      </p>

      <h2>1. The Old Way: Paper Cards and High Fees</h2>
      <p>A few years ago, shops tried two things to get people back:</p>
      <p>
        First, they gave out paper punch cards. Most people lost the card in their car or trash. They forgot about your food and beverage business.
      </p>
      <p>
        Secondly, these food and beverage businesses used big food delivery apps. But those apps take up to 30% of your money and they suggest other food places to your guests to buy from.
      </p>
      <p>Paper cards get lost and big delivery apps take too much money. There is a better way.</p>
    </section>

    <section className="blog-section" id="s2">
      <h2>2. Three Easy Steps to Bring Guests Back Every Week</h2>
      <p>You do not need to wait and hope people remember your food. You can give them a fun reason to return. Here is how to do it in three easy steps:</p>
      <h3>Step 1: Give a Treat on Their Phone</h3>
      <p>Do not let a guest walk out with just a receipt. Put a small code on your table or counter. Tell them to scan it to get a free drink, a sweet snack, or reward points on their phone. When they get your loyalty app, you can talk to them anytime.</p>

      <h3>Step 2: Pick One Fun Day Each Week</h3>
      <p>People like routines. Give them a special reason to visit on a set day:</p>
      <ul className="blog-check-list">
        <li><span className="blog-check-icon">✓</span>Free extra cheese every Tuesday</li>
        <li><span className="blog-check-icon">✓</span>Double reward points every Thursday</li>
        <li><span className="blog-check-icon">✓</span>A special sweet treat on Saturday mornings</li>
      </ul>
      <p>When they know Friday is special at your food and beverage business, they will plan to visit every Friday.</p>

      <h3>Step 3: Send a Short Note to Their Screen</h3>
      <p>You do not need to pay for social media ads. You can send a free message right to their phone:</p>
      <p><strong>The Weekend Reminder:</strong> Seven days after their visit, send a friendly note:</p>
      <div className="blog-pull-quote">
        &ldquo;We had fun last Saturday! Want your favorite meal ready when you get here? Tap to order.&rdquo;
      </div>
      <p><strong>The Slow Day Treat:</strong> Is your food and beverage business quiet on a hot afternoon? Send a message to nearby guests for half price iced tea.</p>
    </section>

    <section className="blog-section" id="s3">
      <h2>Keep All Your Money With DemaDose</h2>
      <p>You do not have to be a computer whiz to have your own loyalty app. DemaDose gives you an easy mobile app made for food and beverage businesses.</p>
      <p>It costs just $10 a month, around AED 37. There are no hidden fees.</p>
      <p>With DemaDose, you can:</p>
      <ul className="blog-check-list">
        <li><span className="blog-check-icon">✓</span>Launch your own app on Google Play once you make your Google Developer account (iOS support will come later)</li>
        <li><span className="blog-check-icon">✓</span>Give guests points every time they buy food so they come back next week</li>
        <li><span className="blog-check-icon">✓</span>Send free messages right to their phone screen</li>
        <li><span className="blog-check-icon">✓</span>Keep 100% of your sales, we take 0% commission while other apps take 30% of your hard work</li>
      </ul>

      <div className="blog-mid-cta">
        <h3>Stop Letting First Time Guests Forget About You</h3>
        <p>Turn them into weekly regulars today.</p>
        <Link to="/early-access" className="blog-cta-btn">Get Early Access to DemaDose</Link>
        <p className="blog-cta-subtext">Build weekly regulars for $10 a month</p>
      </div>
    </section>

    <section className="blog-section" id="s5">
      <h2>The Bottom Line</h2>
      <div className="blog-dark-card">
        <p><strong>Stop letting first time guests forget about you. Turn them into weekly regulars today.</strong></p>
      </div>
    </section>
  </>
);

export default FirstTimeVisitors;
