import { motion, AnimatePresence } from 'framer-motion';
import FullCard from './FullCard';

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
}) {
  const handleClick = (id) => {
    setSelectedId(id);
  };
  return (
    <>
      <motion.div
        className="motion-card"
        layoutId={project.id}
        onClick={() => handleClick(project.id)}
      >
        <img src={project.coverImage} alt={project.title} />
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
