export const routesVariants = {
  initial: {
    width: 0,
  },
  visible: {
    width: '100%',
  },
  exit: {
    x: window.innerWidth,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
};
