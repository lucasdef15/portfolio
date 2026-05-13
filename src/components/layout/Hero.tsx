import { motion, type Variants } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const floatAnimation: Variants = {
  initial: { y: 15 },
  visible: {
    y: -15,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 3,
      ease: 'easeInOut',
    },
  },
};

export default function Hero() {
  const container3D = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.hero-text-content > *',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.5,
        ease: 'power4.out',
      },
    );

    if (container3D.current) {
      gsap.fromTo(
        container3D.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: 'expo.out',
          delay: 0.3,
        },
      );
    }
  }, []);

  return (
    <div
      id="hero"
      className="flex min-h-[80vh] flex-wrap items-center px-4 md:px-10"
    >
      <div className="hero-text-content min-w-[300px] flex-1">
        <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.1] text-[#42446e]">
          Lucas <span className="text-[#018c0f]">Faria</span>
        </h1>

        <h2 className="mt-4 text-[clamp(1.2rem,3vw,1.8rem)] font-medium text-gray-600">
          Engenheiro Clínico & Desenvolvedor Fullstack
        </h2>

        <p className="mt-6 max-w-[500px] text-[1.1rem] leading-relaxed text-gray-500">
          Unindo a precisão do hardware médico à escalabilidade do software moderno
          para criar soluções de alto impacto.
        </p>
      </div>

      <motion.div
        ref={container3D}
        variants={floatAnimation}
        initial="initial"
        animate="visible"
        className="relative flex h-[400px] min-w-[350px] flex-1 items-center justify-center"
      >
        <div className="flex h-[300px] w-[300px] items-center justify-center rounded-full border border-dashed border-[#42446e] bg-[radial-gradient(circle,rgba(66,68,110,0.1)_0%,rgba(255,255,255,0)_70%)] p-5 text-center text-[0.9rem] text-[#42446e]">
          Insira seu objeto Spline ou Canvas do Three.js aqui
        </div>
      </motion.div>
    </div>
  );
}
