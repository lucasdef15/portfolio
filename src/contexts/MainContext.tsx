import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from 'react';

type MainContextValue = {
  showHeader: boolean;
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainContext = createContext<MainContextValue | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY || window.pageYOffset;
      setShowHeader(position < lastScrollPosition.current || position < 64);
      lastScrollPosition.current = position;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const value = useMemo(
    () => ({ showHeader, setShowHeader }),
    [showHeader],
  );

  return (
    <MainContext.Provider value={value}>{children}</MainContext.Provider>
  );
}

export default MainContext;

export function useMainContext(): MainContextValue {
  const ctx = useContext(MainContext);
  if (!ctx) {
    throw new Error('useMainContext must be used within DataProvider');
  }
  return ctx;
}
