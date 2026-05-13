import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { BsLink45Deg, BsGithub } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import type { Project } from '../../data/ProjectsData';
import Slider from './Slider';

type FullCardProps = {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  projectsData: Project[];
};

export default function FullCard({
  selectedId,
  setSelectedId,
  projectsData,
}: FullCardProps) {
  const selectedProject = projectsData.find((p) => p.id === selectedId);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!selectedProject || selectedId == null) return null;

  const hasLiveLink = Boolean(selectedProject.livePreviewLink?.trim());

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedId(null)}
    >
      <motion.div
        layoutId={selectedId}
        className="relative flex max-h-[90vh] w-full max-w-6xl flex-col lg:flex-row overflow-hidden rounded-3xl bg-[#161b22] border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
          onClick={() => setSelectedId(null)}
        >
          <IoClose size={24} />
        </button>

        <div className="relative w-full lg:w-[60%] shrink-0 overflow-hidden bg-[#0d1117] flex items-center justify-center">
          <Slider selectedProject={selectedProject} />
        </div>

        <div className="flex flex-col overflow-y-auto p-6 lg:p-10 custom-scrollbar w-full">
          <div className="flex flex-col gap-6 h-full">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
                {selectedProject.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] lg:text-[11px] uppercase tracking-widest font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg border-b border-white/10 pb-2">
                Sobre o projeto
              </h3>
              <p className="text-base lg:text-lg leading-relaxed text-slate-400">
                {selectedProject.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-6 mt-auto">
              {hasLiveLink && (
                <a
                  href={selectedProject.livePreviewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <BsLink45Deg size={24} />
                  Live Demo
                </a>
              )}
              <a
                href={selectedProject.codeLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-4 font-bold text-white transition-all hover:bg-white/10"
              >
                <BsGithub size={22} />
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
