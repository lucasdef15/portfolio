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

    // Animação de entrada mais "Smooth"
    gsap.fromTo(
      projectHeadingRef.current.children,
      {
        y: 30,
        opacity: 0,
        filter: 'blur(10px)',
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'expo.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectHeadingRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, []);

  return (
    // Aumentamos o max-width para 1200px para alinhar melhor com o Hero
    <section
      className="projects mx-auto my-32 max-w-[1200px] px-6"
      id="projects"
    >
      <div
        ref={projectHeadingRef}
        className="projects__title mb-16 flex flex-col gap-4 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Meus{' '}
          <span className="text-transparent bg-clip-text text-brand-gradient">
            Projetos
          </span>
        </h2>
        <p className="text-muted/80 text-lg max-w-2xl mx-auto">
          Uma seleção de trabalhos que demonstram minha jornada entre a
          engenharia e o desenvolvimento.
        </p>
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
    </section>
  );
}
