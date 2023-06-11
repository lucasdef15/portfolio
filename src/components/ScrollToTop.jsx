import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MainContext from '../contexts/MainContext';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { setShowHeader } = useContext(MainContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowHeader(true);
  }, [pathname]);
  return null;
}
