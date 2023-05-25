import { useState } from 'react';
import { projectsData } from '../data/ProjectsData';
import Card from './Card';

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="projects" id="projects">
      <div className="projects__title">
        <h2>Projects</h2>
        <p>Things I've built so far</p>
      </div>

      <div className="projects__cards">
        {projectsData.map((project, index) => {
          return (
            <Card
              project={project}
              key={index}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
              projectsData={projectsData}
            />
          );
        })}
      </div>
    </div>
  );
}
