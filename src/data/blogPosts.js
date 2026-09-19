// Blog post metadata, used by both the /blog grid index and each post page.
// `publishedAt` uses this repo's git history for the post's first commit date
// (2026-03-08) since no separate editorial publish date exists yet - update
// this if that's not the real publish date you want shown.
export const BLOG_POSTS = [
  {
    slug: 'increase-customer-loyalty-ecommerce',
    title: 'How Can You Increase Customer Loyalty in Your Ecommerce Store?',
    tag: 'Ecommerce Growth',
    excerpt: 'Most store owners focus on getting new customers. Real growth comes from getting customers to come back again and again.',
    publishedAt: '2026-03-08',
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function formatPublishedDate(isoDate) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
