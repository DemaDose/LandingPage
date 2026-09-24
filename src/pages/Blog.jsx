import React from 'react';
import { Link } from 'react-router-dom';
import './BlogIndex.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BLOG_POSTS, formatPublishedDate } from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="app">
      <Header />
      <main className="blog-index-main">
        <div className="blog-index-container">
          <h1 className="blog-index-title">DemaDose Blog</h1>
          <p className="blog-index-subtitle">
            Tips and guides on building customer loyalty with your own mobile app.
          </p>

          <div className="blog-index-grid">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-index-card">
                <span className="blog-index-card-tag">{post.tag}</span>
                <h2 className="blog-index-card-title">{post.title}</h2>
                <p className="blog-index-card-excerpt">{post.excerpt}</p>
                <span className="blog-index-card-date">{formatPublishedDate(post.publishedAt)}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
