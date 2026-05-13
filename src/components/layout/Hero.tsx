import { motion, type Variants } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Button from '../common/Button';

const floatAnimation: Variants = {
  initial: { y: 20 },
  visible: {
    y: -20,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 4,
      ease: 'easeInOut',
    },
  },
};

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const container3D = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        '.hero-text-content > *',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
        },
      );

      if (container3D.current) {
        tl.fromTo(
          container3D.current,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: 'expo.out',
          },
          '-=1', // Começa um pouco antes do texto terminar
        );
      }
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden p-10 py-35 lg:py-0"
    >
      <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-20 pointer-events-none">
        <div className="rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  w-full">
        <div className="hero-text-content flex flex-col gap-6 z-20">
          <div className="space-y-2">
            <h1>
              Lucas{' '}
              <span className="text-transparent bg-clip-text text-brand-gradient">
                Faria
              </span>
            </h1>
            <h2>Engenheiro Clínico & Desenvolvedor Fullstack</h2>
          </div>

          <p>
            Unindo a precisão do hardware médico à escalabilidade do software
            moderno para criar soluções de alto impacto no setor de saúde.
          </p>

          <div className="flex gap-4 pt-4">
            <Button variant="primary" size="lg">
              Ver Projetos
            </Button>
            <Button variant="outline" size="lg">
              Contato
            </Button>
          </div>
        </div>

        {/* Container 3D */}
        <motion.div
          ref={container3D}
          variants={floatAnimation}
          initial="initial"
          animate="visible"
          className="relative w-full aspect-square lg:h-[600px] flex items-center justify-center z-10"
        >
          <div className="w-full h-full rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-white/5 flex items-center justify-center text-slate-500 border-dashed border-2">
            <p className="animate-pulse">Aguardando Objeto 3D...</p>
          </div>

          <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
