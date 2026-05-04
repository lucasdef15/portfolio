import lucas_img from '../../assets/lucas_faria1.jpg';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const heroImgVariants = {
  initial: { y: 20 },
  visible: {
    y: 0,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 4, // Mais lento = mais elegante
      ease: 'easeInOut',
    },
  },
};

const waveAnimation = {
  animate: {
    rotate: [0, 10, 0], // Movimento reduzido
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function Hero() {
  const heroImgRef = useRef();

  useGSAP(() => {
    // Texto: vindo de baixo para cima com suavidade
    gsap.fromTo(
      '.hero__text p',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: 'expo.out',
      },
    );

    // Imagem: Sem rodar, apenas um fade com escala sutil
    gsap.fromTo(
      heroImgRef.current,
      { scale: 0.9, opacity: 0, y: 40 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        ease: 'expo.out',
        duration: 1.5,
        delay: 0.5, // Espera o texto começar
      },
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      '.hero__img__wrapper img',
      { y: 500, opacity: 0, rotate: 180 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        ease: 'power2.inOut',
        duration: 1,
        stagger: 0.25,
      },
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
        ref={heroImgRef}
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
