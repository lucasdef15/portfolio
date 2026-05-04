import { NavLink } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

const variants = {
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

export default function MenuItem() {
  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink to="/">Home</NavLink>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <LinkScroll
          activeClass="active"
          to="techstack"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Tech Stack
        </LinkScroll>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <LinkScroll
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Projects
        </LinkScroll>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink to="about">About</NavLink>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink to="contact">Contact</NavLink>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="https://github.com/lucasdef15"
          target="_blank"
          className="grid"
        >
          <AiFillGithub />
        </a>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="https://www.linkedin.com/in/lucas-f-16b2b3113/"
          target="_blank"
          className="grid"
        >
          <AiFillLinkedin />
        </a>
      </motion.li>
    </>
  );
}
