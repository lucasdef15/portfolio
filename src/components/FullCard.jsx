import React from 'react';
import { motion } from 'framer-motion';
import { BsLink45Deg } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const backdropVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function FullCard({ selectedId, setSelectedId, projectsData }) {
  const selectedProject = projectsData.find(
    (project) => project.id === selectedId
  );
  console.log(selectedProject);

  return (
    <motion.div
      className="backdrop"
      variants={backdropVariants}
      initial="initial"
      animate="visible"
    >
      <motion.div layoutId={selectedId} className="full-card">
        <motion.div className="full-card-body">
          <motion.h5>{selectedProject.title}</motion.h5>
          <motion.p>{selectedProject.description}</motion.p>
          <motion.button onClick={() => setSelectedId(null)}>x</motion.button>
        </motion.div>
        <motion.div className="img-container">
          <motion.img
            src={selectedProject.coverImage}
            alt={selectedProject.title}
          />
          <motion.div className="card__info">
            <motion.span>
              <motion.strong>Tech Stack: </motion.strong>{' '}
              {selectedProject.techStack}
            </motion.span>
            <motion.div className="card__links">
              <motion.div className="links">
                <BsLink45Deg />
                <motion.a
                  href={selectedProject.livePreviewLink}
                  target="_blank"
                >
                  Live Preview
                </motion.a>
              </motion.div>
              <motion.div className="links">
                <BsGithub />
                <motion.a href={selectedProject.codeLink} target="_blank">
                  View Code
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
