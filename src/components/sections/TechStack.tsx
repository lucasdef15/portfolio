import css3 from '../../assets/stacks/css3.svg';
import figma from '../../assets/stacks/figma.svg';
import html5 from '../../assets/stacks/html5.svg';
import javascript from '../../assets/stacks/javascript.svg';
import mongodb from '../../assets/stacks/mongodb.svg';
import nodejs from '../../assets/stacks/nodejs.svg';
import react from '../../assets/stacks/react.svg';
import typescript from '../../assets/stacks/typescript.svg';
import vscode from '../../assets/stacks/vscode.svg';
import redux from '../../assets/stacks/redux-original.svg';

import mysql from '../../assets/stacks/mysql.png';
import python from '../../assets/stacks/python.png';
import threejs from '../../assets/stacks/threejs.svg';
import gsapSvg from '../../assets/stacks/gsap.svg';

import { motion, type Variants } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tooltip from '../common/Tooltip';

gsap.registerPlugin(ScrollTrigger);

const teckStackVariants: Variants = {
  initial: { scale: 1, y: 0, rotate: 0 },
  hover: {
    scale: 1.1,
    y: -10,
    rotate: 2,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      mass: 1,
    },
  },
};

const stacks = [
  { img: html5, name: 'HTML5' },
  { img: css3, name: 'CSS3' },
  { img: javascript, name: 'JavaScript' },
  { img: typescript, name: 'TypeScript' },
  { img: react, name: 'React' },
  { img: redux, name: 'Redux' },
  { img: nodejs, name: 'Node.js' },
  { img: mongodb, name: 'MongoDB' },
  { img: mysql, name: 'MySQL' },
  { img: python, name: 'Python' },
  { img: threejs, name: 'Three.js' },
  { img: gsapSvg, name: 'GSAP' },
  { img: figma, name: 'Figma' },
  { img: vscode, name: 'VSCode' },
];

export default function TechStack() {
  const stackHeadingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.stack-card',
      {
        y: 50,
        opacity: 0,
        scale: 0.8,
        filter: 'blur(10px)',
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        stagger: {
          each: 0.07,
          from: 'center',
        },
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.stacks-grid',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, []);

  return (
    <section className="mx-auto my-32 max-w-[1100px] px-10" id="techstack">
      <div
        ref={stackHeadingRef}
        className="mb-16 flex flex-col gap-4 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Minha{' '}
          <span className="text-transparent bg-clip-text text-brand-gradient">
            Tech Stack
          </span>
        </h2>
        <p className="text-muted/80 text-lg max-w-2xl mx-auto">
          Tecnologias que utilizo para construir soluções robustas, do hardware
          médico ao software escalável.
        </p>
      </div>

      <div className="stacks-grid flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {stacks.map((stack) => (
          <Tooltip key={stack.name} text={stack.name}>
            <motion.div
              variants={teckStackVariants}
              whileHover="hover"
              className="stack-card glass-card h-24 w-24 md:h-28 md:w-28 p-5 cursor-pointer"
            >
              <img
                src={stack.img}
                alt={stack.name}
                className="h-full w-full object-contain filter drop-shadow-md"
              />
            </motion.div>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}
