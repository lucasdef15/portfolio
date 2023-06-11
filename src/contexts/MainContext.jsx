import { createContext, useState, useEffect } from 'react';

const MainContext = createContext({});

export function DataProvider({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY || window.pageYOffset;
      setScrollPosition(position);

      setShowHeader(position < lastScrollPosition);
      setLastScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <MainContext.Provider value={{ showHeader, setShowHeader }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
