import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * Automatically scrolls to top when the route changes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // For smooth scrolling
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
