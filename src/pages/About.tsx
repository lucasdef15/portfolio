import {
  BsFillBuildingFill,
  BsCalendar3,
  BsCheck2Circle,
} from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { routesVariants } from '../animations/animations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.about__description p', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      });

      const cards = gsap.utils.toArray<HTMLElement>('.about__card');

      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: container },
  );

  return (
    <motion.div
      ref={container}
      className="about mx-auto flex w-[90vw] max-w-[900px] flex-col gap-24 py-32 font-['Poppins',sans-serif] max-[768px]:gap-16 max-[768px]:px-6 max-[768px]:py-24"
      variants={routesVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <section className="flex flex-col gap-6">
        <h2 className="mb-4 text-[clamp(2rem,5vw,2.8rem)] font-extrabold tracking-tight text-[#42446e]">
          Sobre Mim
        </h2>
        <div className="about__description flex max-w-[750px] flex-col gap-5">
          <p className="text text-[clamp(1rem,2vw,1.15rem)] font-normal leading-[1.8] text-[#666] [&_strong]:font-semibold [&_strong]:text-[#42446e]">
            Sou um profissional híbrido com sólida experiência em{' '}
            <strong>Engenharia Clínica</strong> e paixão pelo{' '}
            <strong>Desenvolvimento Fullstack</strong>. Meu diferencial reside na
            capacidade de unir a precisão do hardware médico à escalabilidade do
            software moderno.
          </p>
          <p className="text text-[clamp(1rem,2vw,1.15rem)] font-normal leading-[1.8] text-[#666] [&_strong]:font-semibold [&_strong]:text-[#42446e]">
            Como <strong>Supervisor Técnico</strong>, desenvolvi um olhar crítico
            para otimização de processos e gestão de infraestrutura crítica,
            competências que transponho para o código ao arquitetar APIs robustas e
            interfaces de alta performance.
          </p>
        </div>
      </section>

      <section className="work flex flex-col gap-12">
        <h2 className="mb-4 text-[clamp(2rem,5vw,2.8rem)] font-extrabold tracking-tight text-[#42446e]">
          Trajetória Profissional
        </h2>

        <div className="about__card highlight flex flex-col gap-4 border-b border-b-transparent border-l-4 border-l-[#42446e] bg-gradient-to-r from-[#f8f9ff] to-transparent py-4 pb-10 pl-6 transition-all duration-300 max-[480px]:pl-4">
          <div className="job flex flex-wrap items-center justify-between gap-4 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2">
            <h3 className="text-[clamp(1.1rem,2.5vw,1.4rem)] font-bold text-[#42446e]">
              Supervisor de Engenharia Clínica
            </h3>
            <span className="rounded-md bg-[#d7ffe0] px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#018c0f]">
              Atual
            </span>
          </div>
          <div className="job__info flex flex-wrap gap-8 max-[480px]:flex-col max-[480px]:gap-2.5">
            <div className="info flex items-center gap-2.5 text-sm font-medium text-[#a7a7a7] [&_svg]:text-base [&_svg]:text-[#42446e]">
              <BsFillBuildingFill />
              <p>Equipacare (Hospital São Lucas / Oftalmológicos)</p>
            </div>
            <div className="info flex items-center gap-2.5 text-sm font-medium text-[#a7a7a7] [&_svg]:text-base [&_svg]:text-[#42446e]">
              <GoLocation /> <p>Ribeirão Preto, SP</p>
            </div>
            <div className="info flex items-center gap-2.5 text-sm font-medium text-[#a7a7a7] [&_svg]:text-base [&_svg]:text-[#42446e]">
              <BsCalendar3 /> <p>Abr 2026 - Presente</p>
            </div>
          </div>
          <ul className="job__tasks mt-2 flex list-none flex-col gap-2.5 p-0">
            <li className="flex items-start gap-3 text-[0.95rem] leading-normal text-[#666] [&_svg]:mt-1 [&_svg]:shrink-0 [&_svg]:text-[#018c0f]">
              <BsCheck2Circle /> Supervisão técnica de dois hospitais oftalmológicos.
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] leading-normal text-[#666] [&_svg]:mt-1 [&_svg]:shrink-0 [&_svg]:text-[#018c0f]">
              <BsCheck2Circle /> Gestão de manutenção e calibração de equipamentos.
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] leading-normal text-[#666] [&_svg]:mt-1 [&_svg]:shrink-0 [&_svg]:text-[#018c0f]">
              <BsCheck2Circle /> Implementação de melhorias em fluxos de trabalho.
            </li>
          </ul>
        </div>

        <div className="about__card flex flex-col gap-4 border-b border-[#e0e0e0] pb-10 transition-all duration-300">
          <div className="job flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-[clamp(1.1rem,2.5vw,1.4rem)] font-bold text-[#42446e]">
              Desenvolvedor Fullstack (Freelance)
            </h3>
          </div>
          <div className="job__info flex flex-wrap gap-8 max-[480px]:flex-col max-[480px]:gap-2.5">
            <div className="info flex items-center gap-2.5 text-sm font-medium text-[#a7a7a7] [&_svg]:text-base [&_svg]:text-[#42446e]">
              <BsFillBuildingFill /> <p>Projetos Independentes</p>
            </div>
            <div className="info flex items-center gap-2.5 text-sm font-medium text-[#a7a7a7] [&_svg]:text-base [&_svg]:text-[#42446e]">
              <GoLocation /> <p>Remoto</p>
            </div>
            <div className="info flex items-center gap-2.5 text-sm font-medium text-[#a7a7a7] [&_svg]:text-base [&_svg]:text-[#42446e]">
              <BsCalendar3 /> <p>2022 - 2023</p>
            </div>
          </div>
          <p className="job__summary mt-2 text-[0.95rem] italic text-[#888]">
            Desenvolvimento de aplicações web modernas utilizando React e Node.js.
          </p>
        </div>

        <div className="about__card secondary flex flex-col gap-4 border-b border-[#e0e0e0] pb-10 transition-all duration-300">
          <div className="job flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-[clamp(1.1rem,2.5vw,1.4rem)] font-bold text-[#42446e]">
              Técnico de Eletrônica e Sistemas
            </h3>
          </div>
          <div className="job__info flex flex-wrap gap-8 max-[480px]:flex-col max-[480px]:gap-2.5">
            <div className="info flex items-center gap-2.5 text-sm font-medium text-[#a7a7a7] [&_svg]:text-base [&_svg]:text-[#42446e]">
              <BsFillBuildingFill /> <p>Teleponto / Ômega Net</p>
            </div>
            <div className="info flex items-center gap-2.5 text-sm font-medium text-[#a7a7a7] [&_svg]:text-base [&_svg]:text-[#42446e]">
              <BsCalendar3 /> <p>2019 - 2025</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
