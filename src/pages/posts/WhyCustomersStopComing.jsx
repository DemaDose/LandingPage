import React from 'react';
import { Link } from 'react-router-dom';

// Article body for /blog/why-customers-stop-coming-to-your-restaurant. Hero,
// stat cards, TOC and FAQ come from src/data/blogPosts.js and are rendered by
// BlogPost.jsx.
const WhyCustomersStopComing = () => (
  <>
    <section className="blog-section" id="s1">
      <p className="blog-lead">
        A new guest walks into your Dubai cafe. They love the meal. Then they never come back.
      </p>
      <p>Your food is great, your shop is clean, and your team works hard. So what went wrong?</p>
      <p>
        Unhappy guests will not tell you why they left. They just go to the next shop down the street. Why do customers not return to a restaurant? It is almost never about your food. It comes down to small things that go wrong outside your kitchen.
      </p>
      <p>Here are three reasons guests leave and how you can keep them today.</p>

      <h2>3 Reasons Guests Do Not Come Back</h2>
      <p>Even if people love your meals, three small things will stop them from coming back:</p>
      <ul className="blog-x-list">
        <li><span className="blog-x-icon">✕</span><strong>Big Food Apps Steal Their Eyes.</strong> A guest wakes up wanting your burger. But when they open a big food app, they see ads for five other shops first. They click a deal and buy from someone else.</li>
        <li><span className="blog-x-icon">✕</span><strong>Wrong Food Orders.</strong> In a loud shop or on a fast phone call, staff can miss small notes. A guest asks for &ldquo;no onions&rdquo; or &ldquo;oat milk&rdquo;. When they get home and see the wrong meal, they do not call you. They just stop buying from you.</li>
        <li><span className="blog-x-icon">✕</span><strong>Old Menus and Sold Out Food.</strong> Guests hate picking a meal from an old photo online only to learn you ran out of it. Or worse, they see the price went up months ago.</li>
      </ul>
    </section>

    <section className="blog-section" id="s2">
      <h2>How to Fix It With Your Own App</h2>
      <p>To keep guests coming back, block out other shops and get each order right. Here is how smart UAE cafes do it with their own phone app:</p>
      <ol className="blog-steps">
        <li><strong>Block Out Other Shops.</strong> When a guest opens your shop&apos;s own app, they only see your food. There are no ads for other places and you own their whole phone screen.</li>
        <li><strong>Let Guests Tap What They Want.</strong> Make things easy for your cooks. On your app, guests tap clear buttons like &ldquo;Extra Cheese&rdquo; or &ldquo;No Ice&rdquo; before they pay. Your kitchen gets the right note every time and no more wrong orders.</li>
        <li><strong>Update Your Menu in Real Time.</strong> Ran out of cake at 4 PM? With your own app, you can hide sold out food in two clicks. Your guests only see what is ready to eat right now.</li>
      </ol>
    </section>

    <section className="blog-section" id="s3">
      <h2>Keep Your Guests with DemaDose for $10 a Month</h2>
      <p>Keeping your guests does not cost a lot of money. With DemaDose, you can launch your own food and rewards app. You do not need to know how to code.</p>
      <p>It costs just $10 a month, about AED 37.</p>
      <p>Just pick a ready-made look, add your logo, and put up your food photos. Your guests get an easy way to order and earn points. You keep them coming back every week.</p>
      <p>Best of all, DemaDose takes 0% commission. Big food apps take 30% of your sales and show ads for other shops. We let you keep 100% of your cash and all of your guests.</p>

      <div className="blog-mid-cta">
        <h3>Stop Losing Great Guests to Wrong Orders and Big Food Apps</h3>
        <p>Keep your guests, and your money, with DemaDose.</p>
        <Link to="/early-access" className="blog-cta-btn">Get Early Access to DemaDose</Link>
        <p className="blog-cta-subtext">Build weekly regulars for $10 a month</p>
      </div>
    </section>

    <section className="blog-section" id="s5">
      <h2>The Bottom Line</h2>
      <div className="blog-dark-card">
        <p><strong>Stop losing great guests to wrong orders and big food apps.</strong></p>
      </div>
    </section>
  </>
);

export default WhyCustomersStopComing;
