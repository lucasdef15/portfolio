import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { BsLink45Deg, BsGithub } from 'react-icons/bs';
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

  if (!selectedProject || selectedId == null) {
    return null;
  }

  const hasLiveLink = Boolean(selectedProject.livePreviewLink?.trim());

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => setSelectedId(null)}
    >
      <motion.div
        layoutId={selectedId}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border-0 bg-white/95 text-xl text-[#42446e] shadow-md transition-colors hover:bg-neutral-100"
          onClick={() => setSelectedId(null)}
          aria-label="Fechar"
        >
          ×
        </button>

        <div className="relative w-full shrink-0 overflow-hidden bg-neutral-100">
          <Slider selectedProject={selectedProject} />
        </div>

        <div className="p-6 pt-5">
          <h2 id="project-dialog-title" className="pr-12 text-xl font-bold text-[#42446e]">
            {selectedProject.title}
          </h2>
          <p className="mt-3 leading-relaxed text-[#666]">{selectedProject.description}</p>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#eee] p-6 text-sm text-[#666]">
          <p>
            <strong className="text-[#42446e]">Tech stack: </strong>
            {selectedProject.techStack}
          </p>
          <div className="flex flex-wrap gap-6">
            {hasLiveLink && (
              <a
                href={selectedProject.livePreviewLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[#42446e] underline-offset-2 hover:underline"
              >
                <BsLink45Deg className="shrink-0" aria-hidden />
                Live preview
              </a>
            )}
            <a
              href={selectedProject.codeLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-medium text-[#42446e] underline-offset-2 hover:underline"
            >
              <BsGithub className="shrink-0" aria-hidden />
              Ver código
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
