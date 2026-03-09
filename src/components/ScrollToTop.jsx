import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the window to the top whenever the route changes.
 * Place inside the Router so it has access to location.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
