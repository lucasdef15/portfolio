import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/ProjectsData';
import AnimatedCard from './AnimatedCard';

export default function Projects() {
  console.log(projectsData);
  return (
    <div className="projects" id="projects">
      <div className="projects__title">
        <h2>Projects</h2>
        <p>Things I've built so far</p>
      </div>

      <div className="projects__cards">
        {projectsData.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
}