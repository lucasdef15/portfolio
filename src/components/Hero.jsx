import React from 'react';
import lucas_img from '../assets/lucas_faria.jpg';

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero__text">
        <p>Hello there! 👋</p>
        <p>
          I'm <span>Lucas!</span>
        </p>
        <p>A web developer.</p>
      </div>
      <div className="circle">
        <div className="hero__img__wrapper">
          <img className="hero__img" src={lucas_img} alt="lucas faria" />
        </div>
      </div>
    </div>
  );
}
