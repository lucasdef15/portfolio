import React from 'react';
import lucas_img from '../assets/lucas_faria.webp';
import { motion } from 'framer-motion';

const heroImgVariants = {
  initial: {
    y: '50px',
  },
  visible: {
    y: '10px',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 3,
      ease: 'easeInOut',
    },
  },
};

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero__text">
        <p>Hello there! 👋</p>
        <p>
          I'm <span>Lucas!</span>
        </p>
        <p>A web developer.</p>
      </div>
      <motion.div
        className="circle"
        variants={heroImgVariants}
        initial="initial"
        animate="visible"
      >
        <motion.div className="hero__img__wrapper">
          <img className="hero__img" src={lucas_img} alt="lucas faria" />
        </motion.div>
      </motion.div>
    </div>
  );
}
