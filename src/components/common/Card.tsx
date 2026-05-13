import { motion, type Variants } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import type { Project } from '../../data/ProjectsData';

gsap.registerPlugin(ScrollTrigger);

const hoverVariant: Variants = {
  hover: {
    scale: 1.3,
    opacity: 1,
  },
};

type CardProps = {
  project: Project;
  setSelectedId: (id: string | null) => void;
  index: number;
};

export default function Card({ project, setSelectedId, index }: CardProps) {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const el = cardsRef.current[index];
    if (!el) return;
    gsap.fromTo(
      el,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.35,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, [index]);

  return (
    <motion.div
      ref={(el) => {
        cardsRef.current[index] = el;
      }}
      className="motion-card cursor-pointer overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(66,68,110,0.08)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(66,68,110,0.12)]"
      layoutId={project.id}
      onClick={() => setSelectedId(project.id)}
    >
      <img
        src={project.coverImage[0]}
        alt={project.title}
        className="aspect-video w-full object-cover"
      />
      <motion.h3
        className="p-4 text-center text-lg font-semibold text-[#42446e]"
        variants={hoverVariant}
        whileHover="hover"
      >
        {project.title}
      </motion.h3>
    </motion.div>
  );
}
