// Shared helper for nav/footer links that point at an in-page section (e.g. #faq).
// Scrolls directly if already on the homepage; otherwise navigates home first and
// scrolls once the page has mounted. Used by Header and Footer.

export function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function goToSection(navigate, pathname, id, e) {
  if (e) e.preventDefault();

  if (pathname !== '/') {
    navigate('/');
    setTimeout(() => scrollToId(id), 100);
  } else {
    scrollToId(id);
  }
}
