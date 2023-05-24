export const routesVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut' },
  },
};
