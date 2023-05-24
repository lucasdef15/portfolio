import { useRef, useCallback, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../hooks/use-dimensions';
import { MenuToggle } from './MenuToggle';
import Navigation from './Navigation';
import '../../styles/MobileNavBar.css';

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

export default function MobileNavBar({ sidebarStyle, handleClose }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleBodyClick = useCallback(
    (event) => {
      const isExcluded = event.target.closest('.mobile-nav');

      if (isOpen && !isExcluded) {
        toggleOpen();
      } else {
        return;
      }
    },
    [isOpen]
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
      className="mobile-nav"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="mobile-background" variants={sidebar} />
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}
