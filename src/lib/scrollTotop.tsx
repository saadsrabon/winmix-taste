import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // change to 'smooth' only if UX allows
    });
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
