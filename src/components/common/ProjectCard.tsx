import { BsLink45Deg, BsGithub } from 'react-icons/bs';
import type { Project } from '../../data/ProjectsData';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card max-w-md overflow-hidden rounded-xl border border-[#eee] bg-white shadow-md">
      <div className="card__img aspect-video w-full overflow-hidden">
        <img src={project.coverImage[0]} alt={project.title} className="h-full w-full object-cover" />
      </div>
      <div className="card__body p-4">
        <h3 className="text-lg font-semibold text-[#42446e]">{project.title}</h3>
        <p className="mt-2 text-sm text-[#666]">{project.description}</p>
      </div>
      <div className="card__info flex flex-col gap-3 border-t border-[#eee] p-4 text-sm text-[#666]">
        <span>
          <strong className="text-[#42446e]">Tech Stack: </strong> {project.techStack}
        </span>
        <div className="card__links flex flex-wrap gap-3">
          <div className="links flex items-center gap-2">
            <BsLink45Deg />
            <a href={project.livePreviewLink} target="_blank" rel="noreferrer">
              Live Preview
            </a>
          </div>
          <div className="links flex items-center gap-2">
            <BsGithub />
            <a href={project.codeLink} target="_blank" rel="noreferrer">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
