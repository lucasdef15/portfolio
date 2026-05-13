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
  const isTicking = useRef(false);

  useEffect(() => {
    const updateHeader = () => {
      const position = window.scrollY;

      // Lógica: Mostrar se rolar para cima OU se estiver no topo (64px)
      const shouldShow = position < lastScrollPosition.current || position < 64;

      // Só atualiza o estado se ele realmente mudou (evita render inútil)
      setShowHeader((prev) => {
        if (prev !== shouldShow) return shouldShow;
        return prev;
      });

      lastScrollPosition.current = position;
      isTicking.current = false;
    };

    const handleScroll = () => {
      if (!isTicking.current) {
        window.requestAnimationFrame(updateHeader);
        isTicking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const value = useMemo(() => ({ showHeader, setShowHeader }), [showHeader]);

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export function useMainContext(): MainContextValue {
  const ctx = useContext(MainContext);
  if (!ctx) {
    throw new Error('useMainContext deve ser usado dentro de um DataProvider');
  }
  return ctx;
}

export default MainContext;
