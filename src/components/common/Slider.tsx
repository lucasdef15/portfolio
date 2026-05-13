import { useEffect, useState } from 'react';
import BtnSlider from './BtnSlider.tsx';
import type { Project } from '../../data/ProjectsData.ts';

type SliderProps = {
  selectedProject: Project;
};

export default function Slider({ selectedProject }: SliderProps) {
  const [index, setIndex] = useState(0);
  const images = selectedProject.coverImage;
  const len = images.length;

  useEffect(() => {
    setIndex(0);
  }, [selectedProject.id]);

  const handleNext = () => {
    setIndex((i) => (i !== len - 1 ? i + 1 : 0));
  };

  const handlePrev = () => {
    setIndex((i) => (i !== 0 ? i - 1 : len - 1));
  };

  if (len === 0) {
    return null;
  }

  return (
    <div className="relative aspect-video w-full bg-neutral-200">
      <img
        src={images[index]}
        alt={`${selectedProject.title} — imagem ${index + 1} de ${len}`}
        className="h-full w-full object-cover"
      />

      {len > 1 && (
        <>
          <BtnSlider onSlide={handleNext} direction="next" />
          <BtnSlider onSlide={handlePrev} direction="prev" />
          <div
            className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-10"
            role="tablist"
            aria-label="Imagens do projeto"
          >
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={index === i}
                aria-label={`Imagem ${i + 1} de ${len}`}
                className={`h-1.5 min-w-8 max-w-14 flex-1 rounded-full transition-colors ${
                  index === i
                    ? 'bg-gradient-to-r from-[#13b0f5] to-[#e70faa]'
                    : 'bg-white/50 hover:bg-white/85'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
