import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/ProjectsData';
import Card from '../common/Card';
import FullCard from '../common/FullCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const projectHeadingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!projectHeadingRef.current) return;
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
      },
    );
  }, []);

  return (
    <div className="projects mx-auto my-20 max-w-[1100px] px-4" id="projects">
      <div
        ref={projectHeadingRef}
        className="projects__title mb-12 flex flex-col gap-2 text-center [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#42446e] [&_p]:text-gray-600"
      >
        <h2>Projects</h2>
        <p>Projetos que desenvolvi até agora</p>
      </div>

      <div className="projects__cards grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <Card
            key={project.id}
            index={index}
            project={project}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <FullCard
            key={selectedId}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            projectsData={projectsData}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
