import { useState } from 'react';
import BtnSlider from './BtnSlider';
import { motion } from 'framer-motion';
import '../styles/Slider.css';

export default function Slider({ selectedProject }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index !== selectedProject.coverImage.length - 1) {
      setIndex(index + 1);
    } else if (index === selectedProject.coverImage.length - 1) {
      setIndex(0);
    }
  };
  const handlePrev = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else if (index === 0) {
      setIndex(selectedProject.coverImage.length - 1);
    }
  };

  return (
    <div className="container-slider">
      <div
        className={
          index ===
          selectedProject.coverImage.indexOf(selectedProject.coverImage[index])
            ? 'slide active-anim'
            : 'slide'
        }
      >
        <img
          src={selectedProject.coverImage[index]}
          alt="selectedProject.title"
        />
      </div>
      <BtnSlider movieSlide={handleNext} direction={'next'} />
      <BtnSlider movieSlide={handlePrev} direction={'prev'} />

      <div className="container-dots">
        {selectedProject.coverImage.map((item, i) => (
          <div className={index === i ? 'dot dot-active' : 'dot'}></div>
        ))}
      </div>
    </div>
  );
}
