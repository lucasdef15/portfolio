import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMainContext } from '../../contexts/MainContext';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { setShowHeader } = useMainContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowHeader(true);
  }, [pathname, setShowHeader]);

  return null;
}
