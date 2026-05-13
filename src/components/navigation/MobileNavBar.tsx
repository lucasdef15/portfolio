import { useRef, useCallback, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../hooks/use-dimensions';
import { MenuToggle } from './MenuToggle';
import Navigation from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 230px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 230px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

type MobileNavBarProps = {
  showHeader: boolean;
};

export default function MobileNavBar({ showHeader }: MobileNavBarProps) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef);

  const handleBodyClick = useCallback(
    (event: MouseEvent) => {
      const target = event.target as Node | null;
      const isExcluded = target && (target as Element).closest?.('.mobile-nav');

      if (isOpen && !isExcluded) {
        toggleOpen();
      }
    },
    [isOpen, toggleOpen],
  );

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener('click', handleBodyClick, {
        capture: true,
      });
    };
  }, [handleBodyClick]);

  return (
    <motion.nav
      style={{
        top: showHeader ? 0 : isOpen ? 0 : '-80px',
        transition: 'top 0.3s',
      }}
      className="mobile-nav fixed right-0 top-0 hidden w-[300px] text-xl text-white max-[60rem]:flex"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 h-[calc(100vh+80px)] w-full bg-[#121212]/92"
        variants={sidebar}
      />
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}
