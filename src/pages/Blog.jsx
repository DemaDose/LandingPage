import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BLOG_TITLE = 'How Can You Increase Customer Loyalty in Your Ecommerce Store? | DemaDose Blog';

const TOC_ITEMS = [
  { id: 's1', label: 'Getting New Customers' },
  { id: 's2', label: 'Why Customers Forget You' },
  { id: 's3', label: 'What Makes Them Return' },
  { id: 's4', label: 'Do You Need an App?' },
  { id: 's5', label: 'Is It Expensive?' },
  { id: 's6', label: 'What Is an App Builder?' },
  { id: 's7', label: 'How Apps Increase Loyalty' },
  { id: 's8', label: 'Leaving Marketplaces' },
  { id: 's9', label: 'Non-Technical Owners' },
  { id: 's10', label: 'What to Look For' },
  { id: 's11', label: 'DemaDose Solution' },
  { id: 's12', label: 'What Changes After' },
  { id: 's13', label: 'FAQ' },
];

const FAQ_ITEMS = [
  {
    q: 'Is building an ecommerce app really worth it for a small store?',
    a: 'If you have repeat customers or want them, yes. The return on investment comes from reduced ad spend and higher lifetime value per customer. Once a customer has your app, you can reach them for free through push notifications instead of paying for ads every time.',
  },
  {
    q: 'How long does it take to build an ecommerce app with DemaDose?',
    a: 'Most businesses can configure and launch their app within a few days. The platform handles all the technical setup so you focus on branding, products, and loyalty. Compare this to 3 to 6 months for traditional app development.',
  },
  {
    q: 'Do I need a separate app for iOS and Android?',
    a: 'No. DemaDose builds both iOS and Android versions from the same setup. You configure it once and your customers can download it on either platform.',
  },
  {
    q: 'What happens to my customer data?',
    a: 'Your customer data belongs entirely to you. Unlike marketplaces where the platform owns the customer relationship, DemaDose gives you full access to and ownership of every customer interaction, purchase history, and preference.',
  },
  {
    q: 'Does DemaDose take a commission on sales?',
    a: 'No. DemaDose operates as a subscription platform. You pay a fixed recurring fee and keep 100% of what you earn from sales through your app. No commission, no hidden fees, no surprises.',
  },
];

const Blog = () => {
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = BLOG_TITLE;
    return () => { document.title = 'DemaDose'; };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const pct = doc.scrollHeight - doc.clientHeight;
      setProgress(pct > 0 ? (doc.scrollTop / pct) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">
      <div className="blog-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <Header />
      <main className="blog-main">
        <header className="blog-hero">
          <span className="blog-tag">Ecommerce Growth</span>
          <h1 className="blog-title">
            How Can You Increase <span className="blog-title-highlight">Customer Loyalty</span> in Your Ecommerce Store?
          </h1>
          <p className="blog-subtitle">
            Most store owners focus on getting new customers. But real growth comes from getting customers to come back again and again. If customers return, your business becomes stable and predictable.
          </p>
        </header>

        <div className="blog-stat-cards">
          <div className="blog-stat-card">
            <div className="blog-stat-num">39%</div>
            <div className="blog-stat-title">More Loyal Customers</div>
            <div className="blog-stat-desc">Brands with their own app grow customer loyalty by 39% on average.</div>
          </div>
          <div className="blog-stat-card blog-stat-card-2">
            <div className="blog-stat-num">3×</div>
            <div className="blog-stat-title">Higher Conversion</div>
            <div className="blog-stat-desc">Mobile apps convert at 3× the rate of a mobile website.</div>
          </div>
          <div className="blog-stat-card blog-stat-card-3">
            <div className="blog-stat-num">88%</div>
            <div className="blog-stat-title">Time Spent In Apps</div>
            <div className="blog-stat-desc">Of all mobile time is spent inside apps, not browsers.</div>
          </div>
        </div>

        <div className="blog-content-grid">
          <article className="blog-article">
            <section className="blog-section" id="s1">
              <h2>Most Store Owners Focus on Getting New Customers</h2>
              <p className="blog-lead">
                But real growth comes from getting customers to come back again and again. If customers buy once and disappear, you keep spending money on ads. If customers return, your business becomes stable and predictable. So the real question is not &ldquo;How do I get more traffic?&rdquo; It is &ldquo;How do I keep the customers I already have?&rdquo;
              </p>
            </section>

            <section className="blog-section" id="s2">
              <h2>Why Do Customers Forget Your Store After One Purchase?</h2>
              <p>When customers buy through marketplaces or websites, the relationship is with the platform, not your brand. Here is what actually happens:</p>
              <ul className="blog-x-list">
                <li><span className="blog-x-icon">✕</span>They do not feel connected to your brand</li>
                <li><span className="blog-x-icon">✕</span>They see competitors right next to you</li>
                <li><span className="blog-x-icon">✕</span>They do not remember to come back</li>
                <li><span className="blog-x-icon">✕</span>You cannot easily reach them again</li>
                <li><span className="blog-x-icon">✕</span>You rely on ads to remind them you exist</li>
              </ul>
              <p>This creates a cycle where you are always chasing the next sale.</p>
            </section>

            <section className="blog-section" id="s3">
              <h2>What Makes Customers Come Back to a Brand Instead of Switching?</h2>
              <p>Customers return when buying is easy, fast, personal, and always available. That is why the biggest brands invest in mobile apps. An app keeps your store one tap away. Always visible on the customer&apos;s phone.</p>
              <div className="blog-pull-quote">
                &ldquo;An app does not just add a sales channel. It changes your relationship with the customer entirely.&rdquo;
              </div>
            </section>

            <section className="blog-section" id="s4">
              <h2>Do Ecommerce Businesses Really Need Their Own Mobile App?</h2>
              <p>If you want repeat purchases, yes. A mobile app is not just another sales channel. It becomes your direct relationship with the customer. With your own app, you can:</p>
              <ul className="blog-check-list">
                <li><span className="blog-check-icon">✓</span>Send offers instantly through notifications</li>
                <li><span className="blog-check-icon">✓</span>Let customers reorder in seconds</li>
                <li><span className="blog-check-icon">✓</span>Reward loyal buyers</li>
                <li><span className="blog-check-icon">✓</span>Stay visible every day on their device</li>
                <li><span className="blog-check-icon">✓</span>Sell without paying third-party commissions</li>
              </ul>
              <p>This is why many businesses now search for an <strong>app builder for ecommerce</strong> instead of relying only on websites.</p>
            </section>

            <section className="blog-section" id="s5">
              <h2>Isn&apos;t Building an App Expensive and Complicated?</h2>
              <p>It used to be. Traditional app development required:</p>
              <ul className="blog-x-list">
                <li><span className="blog-x-icon">✕</span>Developers</li>
                <li><span className="blog-x-icon">✕</span>Months of work</li>
                <li><span className="blog-x-icon">✕</span>High upfront costs</li>
                <li><span className="blog-x-icon">✕</span>Ongoing maintenance</li>
              </ul>
              <p>Today, that is no longer necessary. Now you can <strong>build an ecommerce app</strong> using no-code platforms that remove all technical complexity.</p>
            </section>

            <section className="blog-section" id="s6">
              <h2>What Is an Ecommerce Mobile App Builder and How Does It Work?</h2>
              <p>An <strong>ecommerce mobile app builder</strong> is a tool that lets you create your own app without coding. You simply:</p>
              <ol className="blog-steps">
                <li><strong>Choose your design.</strong> Upload your logo, pick your colors, and set your layout.</li>
                <li><strong>Add your products.</strong> Build your catalog with images, descriptions, and pricing.</li>
                <li><strong>Set delivery or shipping.</strong> Configure your fulfillment options.</li>
                <li><strong>Launch your app.</strong> The system builds everything for you automatically.</li>
              </ol>
              <p>This works like a website builder, but designed specifically for mobile commerce.</p>
            </section>

            <section className="blog-section" id="s7">
              <h2>How Does Having an App Increase Customer Loyalty?</h2>
              <p>An app changes how customers interact with your brand. Instead of searching for you, they already have you. With an app you can:</p>
              <div className="blog-two-col">
                <div className="blog-feature-pill"><span>✓</span> Offer loyalty rewards that keep customers engaged</div>
                <div className="blog-feature-pill"><span>✓</span> Send personalized promotions</div>
                <div className="blog-feature-pill"><span>✓</span> Make checkout faster than a website</div>
                <div className="blog-feature-pill"><span>✓</span> Allow instant repeat orders</div>
                <div className="blog-feature-pill"><span>✓</span> Create a habit around your store</div>
                <div className="blog-feature-pill"><span>✓</span> Turn occasional buyers into long-term customers</div>
              </div>
              <div className="blog-dark-card">
                <p><strong>The loyalty flywheel in action:</strong> A customer downloads your app, earns points on their first order, receives a push notification for an exclusive offer, places a second order, then refers a friend. Each step compounds the next. This is how repeat revenue becomes predictable.</p>
              </div>
            </section>

            <div className="blog-mid-cta">
              <h3>Ready to Stop Chasing Customers?</h3>
              <p>Build your own branded app with DemaDose. No developers, no commissions, no waiting months to launch.</p>
              <Link to="/early-access" className="blog-cta-btn">Join the Waiting List</Link>
            </div>

            <section className="blog-section" id="s8">
              <h2>Why Are More Businesses Moving Away From Marketplaces?</h2>
              <p>Marketplaces bring visibility. But they also bring problems:</p>
              <div className="blog-table-wrap">
                <table className="blog-comp-table">
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Marketplace</th>
                      <th>Website Only</th>
                      <th>Your Own App</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Commission Fees</td>
                      <td className="blog-td-bad">8-15% per sale</td>
                      <td className="blog-td-good">None</td>
                      <td className="blog-td-good">None</td>
                    </tr>
                    <tr>
                      <td>Own Customer Data</td>
                      <td className="blog-td-bad">✕ No</td>
                      <td className="blog-td-good">✓ Yes</td>
                      <td className="blog-td-good">✓ Yes</td>
                    </tr>
                    <tr>
                      <td>Competitors Visible</td>
                      <td className="blog-td-bad">Always</td>
                      <td className="blog-td-good">Never</td>
                      <td className="blog-td-good">Never</td>
                    </tr>
                    <tr>
                      <td>Push Notifications</td>
                      <td className="blog-td-bad">✕ No</td>
                      <td className="blog-td-bad">✕ No</td>
                      <td className="blog-td-good">✓ Yes</td>
                    </tr>
                    <tr>
                      <td>Loyalty Programs</td>
                      <td className="blog-td-bad">✕ No</td>
                      <td>Plugins needed</td>
                      <td className="blog-td-good">✓ Built-in</td>
                    </tr>
                    <tr className="blog-hi-row">
                      <td>Customer Relationship</td>
                      <td className="blog-td-bad">Owned by platform</td>
                      <td>Partial</td>
                      <td className="blog-td-good">100% Yours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>With your own app, you control everything. Your pricing. Your customers. Your communication. That is why many brands now want to <strong>build ecommerce app</strong> infrastructure they actually own.</p>
            </section>

            <section className="blog-section" id="s9">
              <h2>Can a Non-Technical Store Owner Really Build Their Own App?</h2>
              <p>Yes. Modern tools are designed for business owners, not developers. You do not need to code. You do not need IT teams. You do not need technical knowledge.</p>
              <p>This shift is part of the larger trend of <strong>AI automation</strong>, where smart platforms handle complexity so businesses can focus on selling.</p>
            </section>

            <section className="blog-section" id="s10">
              <h2>What Should You Look for in the Best Ecommerce App Builder?</h2>
              <p>If you are evaluating the <strong>best ecommerce app builder</strong>, focus on:</p>
              <ul className="blog-check-list">
                <li><span className="blog-check-icon">✓</span>No-code setup</li>
                <li><span className="blog-check-icon">✓</span>Fast launch time</li>
                <li><span className="blog-check-icon">✓</span>Built-in loyalty tools</li>
                <li><span className="blog-check-icon">✓</span>Push notifications</li>
                <li><span className="blog-check-icon">✓</span>Full customer ownership</li>
                <li><span className="blog-check-icon">✓</span>Subscription model instead of commission</li>
                <li><span className="blog-check-icon">✓</span>Easy product and order management</li>
              </ul>
              <p>The goal is not just to create an app. The goal is to create a <strong>direct revenue channel</strong>.</p>
            </section>

            <section className="blog-section" id="s11">
              <h2>Is There a Solution Built Specifically for Ecommerce Businesses?</h2>
              <p>Yes. That is where DemaDose comes in. DemaDose is designed to help businesses launch their own apps quickly and operate them easily. With DemaDose, you can:</p>
              <ul className="blog-check-list">
                <li><span className="blog-check-icon">✓</span>Build your branded app without developers</li>
                <li><span className="blog-check-icon">✓</span>Manage products, orders, and customers in one place</li>
                <li><span className="blog-check-icon">✓</span>Keep 100% of your sales revenue</li>
                <li><span className="blog-check-icon">✓</span>Use loyalty and retention tools built into the platform</li>
                <li><span className="blog-check-icon">✓</span>Launch faster than traditional development</li>
              </ul>
              <p>This makes it a strong option when searching for the <strong>best ecommerce mobile app builder</strong> focused on growth, not just design.</p>
            </section>

            <section className="blog-section" id="s12">
              <h2>What Changes After You Launch Your Own App?</h2>
              <p>Your business shifts from chasing customers to building relationships. Instead of relying on ads and platforms, you create:</p>
              <ul className="blog-check-list">
                <li><span className="blog-check-icon">✓</span>Predictable repeat sales</li>
                <li><span className="blog-check-icon">✓</span>Stronger brand loyalty</li>
                <li><span className="blog-check-icon">✓</span>Direct communication with buyers</li>
                <li><span className="blog-check-icon">✓</span>Long-term customer value</li>
              </ul>
              <p>Your app becomes your most powerful owned asset.</p>
            </section>

            <section className="blog-section" id="s13">
              <h2>Are You Ready to Build an Ecommerce App That Customers Actually Use?</h2>
              <p>If your goal is to increase loyalty, reduce dependence on marketplaces, create repeat revenue, and own your customer relationships, then it is time to move beyond websites alone.</p>
              <p>DemaDose gives you the tools to launch, manage, and grow your own mobile commerce channel without technical barriers.</p>
            </section>

            <div className="blog-faq">
              {FAQ_ITEMS.map((faq, i) => (
                <div
                  key={i}
                  className={`blog-faq-item ${openFaq === i ? 'blog-faq-open' : ''}`}
                >
                  <button
                    type="button"
                    className="blog-faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    <span className="blog-faq-arrow">⌄</span>
                  </button>
                  <div className="blog-faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </article>

          <aside className="blog-sidebar">
            <div className="blog-toc-card">
              <div className="blog-toc-label">In This Article</div>
              <ol className="blog-toc-list">
                {TOC_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className="blog-toc-link"
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ol>
            </div>
            <div className="blog-sidebar-cta">
              <p>Stop paying commissions. Start owning your customer relationships with your own branded app.</p>
              <Link to="/early-access">Join the Waiting List</Link>
            </div>
          </aside>
        </div>

        <section className="blog-final-cta">
          <h2>Your App. Your Customers.<br />Your Revenue.</h2>
          <p>DemaDose gives you the tools to launch, manage, and grow your own mobile commerce channel without technical barriers. Start building your app and turn your customers into loyal users today.</p>
          <Link to="/early-access" className="blog-final-btn">Join the Waiting List</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
