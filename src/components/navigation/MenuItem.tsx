import { NavLink } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { motion, type Variants } from 'framer-motion';

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const itemClass = 'text-white [&_a]:text-white';

export default function MenuItem() {
  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={itemClass}
      >
        <NavLink to="/">Home</NavLink>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={itemClass}
      >
        <LinkScroll activeClass="active" to="techstack" spy smooth offset={-50} duration={500}>
          Tech Stack
        </LinkScroll>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={itemClass}
      >
        <LinkScroll activeClass="active" to="projects" spy smooth offset={-120} duration={500}>
          Projects
        </LinkScroll>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={itemClass}
      >
        <NavLink to="/about">About</NavLink>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={itemClass}
      >
        <NavLink to="/contact">Contact</NavLink>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={itemClass}
      >
        <a href="https://github.com/lucasdef15" target="_blank" rel="noreferrer" className="grid">
          <AiFillGithub />
        </a>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={itemClass}
      >
        <a
          href="https://www.linkedin.com/in/lucas-f-16b2b3113/"
          target="_blank"
          rel="noreferrer"
          className="grid"
        >
          <AiFillLinkedin />
        </a>
      </motion.li>
    </>
  );
}
