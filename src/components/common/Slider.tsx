import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import type { Project } from '../../data/ProjectsData.ts';

type SliderProps = {
  selectedProject: Project;
};

export default function Slider({ selectedProject }: SliderProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const images = selectedProject.coverImage;
  const len = images.length;

  useEffect(() => {
    setIndex(0);
    setDirection(0);
  }, [selectedProject.id]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(1);
    setIndex((i) => (i !== len - 1 ? i + 1 : 0));
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(-1);
    setIndex((i) => (i !== 0 ? i - 1 : len - 1));
  };

  if (len === 0) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#0d1117]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          alt={`${selectedProject.title} — imagem ${index + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {len > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-all hover:bg-black/50 hover:scale-110"
          >
            <IoChevronBack size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-all hover:bg-black/50 hover:scale-110"
          >
            <IoChevronForward size={24} />
          </button>

          <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === i
                    ? 'w-8 bg-blue-500'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
