import { motion, type Variants } from 'framer-motion';
import MenuItem from './MenuItem';

const variants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

type NavigationProps = {
  isOpen: boolean;
};

export default function Navigation({ isOpen }: NavigationProps) {
  return (
    <motion.ul
      variants={variants}
      className={
        isOpen
          ? 'absolute right-0 top-[100px] flex w-full flex-col items-center justify-center gap-8 py-6 pr-6 [&_li]:m-0 [&_li]:cursor-pointer [&_li]:list-none [&_li]:p-0 [&_svg]:text-2xl [&_svg]:leading-[26px]'
          : 'pointer-events-none hidden'
      }
    >
      <MenuItem />
    </motion.ul>
  );
}
