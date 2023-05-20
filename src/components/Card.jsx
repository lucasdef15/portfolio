import { motion, AnimatePresence } from 'framer-motion';
import FullCard from './FullCard';

const hoverVariant = {
  hover: {
    opacity: 1,
    scale: 1.5,
    textShadow: '0px 0px 2px rgb(255, 255, 255)',
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
    console.log(id);
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
