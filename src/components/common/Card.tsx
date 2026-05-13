import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import type { Project } from '../../data/ProjectsData';

type CardProps = {
  project: Project;
  setSelectedId: (id: string | null) => void;
  index: number;
};

export default function Card({ project, setSelectedId, index }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 95%',
        },
      },
    );
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      layoutId={project.id}
      onClick={() => setSelectedId(project.id)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer flex flex-col bg-[#161b22] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
        <img
          src={project.coverImage[0]}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}
