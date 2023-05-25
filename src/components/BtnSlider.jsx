import React from 'react';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { BsFillCaretRightFill } from 'react-icons/bs';
import '../styles/Slider.css';

export default function BtnSlider({ movieSlide, direction }) {
  const isNext = direction === 'next';
  return (
    <button
      onClick={movieSlide}
      className={isNext ? 'btn-slide next' : 'btn-slide prev'}
    >
      {isNext ? <BsFillCaretRightFill /> : <BsFillCaretLeftFill />}
    </button>
  );
}
