import { BsLink45Deg } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={project.coverImage} alt="card's cover" />
      </div>
      <div className="card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="card__info">
        <span>
          <strong>Tech Stack: </strong> {project.techStack}
        </span>
        <div className="card__links">
          <div className="links">
            <BsLink45Deg />
            <a href={project.livePreviewLink} target="_blank">
              Live Preview
            </a>
          </div>
          <div className="links">
            <BsGithub />
            <a href={project.codeLink} target="_blank">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
