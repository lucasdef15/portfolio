import { useRef, useState } from 'react';
import { projectsData } from '../data/ProjectsData';
import Card from './Card';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  const projectHeadingRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      projectHeadingRef.current.children,
      {
        rotate: -45,
        x: -100,
        opacity: 0,
      },
      {
        rotate: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectHeadingRef.current,
          start: 'top 85%',
          end: 'bottom 5%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="projects" id="projects">
      <div ref={projectHeadingRef} className="projects__title">
        <h2>Projects</h2>
        <p>Projetos que desenvolvi até agora</p>
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
