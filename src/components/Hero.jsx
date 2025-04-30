import { useRef } from 'react';
import lucas_img from '../assets/lucas_faria1.jpg';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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

const waveAnimation = {
  animate: {
    rotate: [0, 20, -10, 20, -5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      '.hero__text p',
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        duration: 1,
        ease: 'power2.inOut',
      }
    );
  }, []);
  return (
    <div className="hero" id="hero">
      <div className="hero__text">
        <p>
          Ei, tudo bem?{' '}
          <motion.span
            style={{
              display: 'inline-block',
              originX: 0.7,
              originY: 0.7,
              fontFamily:
                'system-ui, Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji',
            }}
            {...waveAnimation}
          >
            👋
          </motion.span>
        </p>
        <div>
          <p>
            Eu sou <span className="name">Lucas</span>,
          </p>
          <p
            style={{
              fontSize: '25px',
              lineHeight: '30px',
              marginBlock: '1rem',
            }}
          >
            criando soluções digitais inovadoras e interfaces que conectam
            ideias ao impacto.
          </p>
        </div>
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
