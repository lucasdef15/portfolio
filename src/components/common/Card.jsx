import { motion, AnimatePresence } from 'framer-motion';
import FullCard from './FullCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const hoverVariant = {
  hover: {
    scale: 1.3,
    opacity: 1,
  },
};

export default function Card({
  project,
  setSelectedId,
  selectedId,
  projectsData,
  index,
}) {
  const handleClick = (id) => {
    setSelectedId(id);
  };
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current[index],
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
          trigger: cardsRef.current[index],
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, []);

  return (
    <>
      <motion.div
        ref={(el) => (cardsRef.current[index] = el)}
        className="motion-card"
        layoutId={project.id}
        onClick={() => handleClick(project.id)}
      >
        <img src={project.coverImage[0]} alt={project.title} />
        <motion.h3 variants={hoverVariant} whileHover="hover">
          {project.title}
        </motion.h3>
      </motion.div>

      <AnimatePresence>
        {selectedId === project.id && (
          <FullCard
            setSelectedId={setSelectedId}
            selectedId={selectedId}
            projectsData={projectsData}
          />
        )}
      </AnimatePresence>
    </>
  );
}
