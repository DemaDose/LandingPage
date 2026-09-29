import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Blog.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPostBySlug, formatPublishedDate } from '../data/blogPosts';
import IncreaseCustomerLoyalty from './posts/IncreaseCustomerLoyalty';
import DemaDoseVsGlide from './posts/DemaDoseVsGlide';
import BestNoCodeAiAppBuilders from './posts/BestNoCodeAiAppBuilders';

// Each post's prose lives in its own component; everything else on the page is
// driven by that post's entry in src/data/blogPosts.js.
const POST_BODIES = {
  'increase-customer-loyalty-ecommerce': IncreaseCustomerLoyalty,
  'demadose-vs-glide': DemaDoseVsGlide,
  'best-no-code-ai-app-builders': BestNoCodeAiAppBuilders,
};

const AUTHOR_BIO =
  'The marketing team at DemaDose specializes in helping food & beverage brands optimize their customer acquisition, retention, and digital loyalty loops.';

// Splits a title around its highlighted phrase so the middle can be styled.
function renderTitle(title, highlight) {
  if (!highlight || !title.includes(highlight)) return title;
  const [before, ...rest] = title.split(highlight);
  return (
    <>
      {before}
      <span className="blog-title-highlight">{highlight}</span>
      {rest.join(highlight)}
    </>
  );
}

// Sets <title> and the meta description for this post, restoring the site
// defaults on unmount. This is the only per-route meta the site has - there is
// no react-helmet style solution yet, so it is client-side only.
function usePostMeta(post) {
  useEffect(() => {
    const defaultTitle = 'Mobile App Builder for Small Businesses | DemaDose';
    const meta = document.querySelector('meta[name="description"]');
    const defaultDescription = meta ? meta.getAttribute('content') : null;

    document.title = post ? `${post.metaTitle || post.title} | DemaDose Blog` : 'DemaDose Blog';
    if (meta && post?.metaDescription) {
      meta.setAttribute('content', post.metaDescription);
    }

    return () => {
      document.title = defaultTitle;
      if (meta && defaultDescription !== null) {
        meta.setAttribute('content', defaultDescription);
      }
    };
  }, [post]);
}

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const Body = POST_BODIES[slug];
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  usePostMeta(post);

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

  if (!post || !Body) {
    return (
      <div className="app">
        <Header />
        <main className="blog-main">
          <div className="blog-not-found">
            <h1>Post not found</h1>
            <p>That blog post doesn&apos;t exist or may have moved.</p>
            <Link to="/blog" className="blog-cta-btn">Back to the Blog</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // FAQPage structured data, so these answers can surface as rich results.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="app">
      <div className="blog-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <Header />
      <main className="blog-main">
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

        <header className="blog-hero">
          <span className="blog-tag">{post.tag}</span>
          <h1 className="blog-title">{renderTitle(post.title, post.titleHighlight)}</h1>
          <p className="blog-published-date">
            {post.author
              ? `By ${post.author} | Last Updated: ${formatPublishedDate(post.publishedAt)}`
              : `Published ${formatPublishedDate(post.publishedAt)}`}
          </p>
          <p className="blog-subtitle">{post.subtitle}</p>
        </header>

        {post.stats?.length > 0 && (
          <div className="blog-stat-cards">
            {post.stats.map((stat, i) => (
              <div key={stat.title} className={`blog-stat-card${i > 0 ? ` blog-stat-card-${i + 1}` : ''}`}>
                <div className="blog-stat-num">{stat.num}</div>
                <div className="blog-stat-title">{stat.title}</div>
                <div className="blog-stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        )}

        <div className="blog-content-grid">
          <article className="blog-article">
            <Body />

            <div className="blog-faq" id={post.faqId}>
              {post.faq.map((faq, i) => (
                <div key={faq.q} className={`blog-faq-item ${openFaq === i ? 'blog-faq-open' : ''}`}>
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

            {post.author && <p className="blog-author-bio">{AUTHOR_BIO}</p>}
          </article>

          <aside className="blog-sidebar">
            <div className="blog-toc-card">
              <div className="blog-toc-label">In This Article</div>
              <ol className="blog-toc-list">
                {post.toc.map((item) => (
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

export default BlogPost;
