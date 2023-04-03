import React from 'react';
import css3 from '../assets/stacks/css3.svg';
import figma from '../assets/stacks/figma.svg';
import html5 from '../assets/stacks/html5.svg';
import javascript from '../assets/stacks/javascript.svg';
import mongodb from '../assets/stacks/mongodb.svg';
import nodejs from '../assets/stacks/nodejs.svg';
import npm from '../assets/stacks/npm.svg';
import react from '../assets/stacks/react.svg';
import typescript from '../assets/stacks/typescript.svg';
import vscode from '../assets/stacks/vscode.svg';

export default function TechStack() {
  return (
    <div className="techstack" id="techstack">
      <div className="techstack__title">
        <h2>My Tech Stack</h2>
        <p> Technologies I&apos;ve been working with recently</p>
      </div>
      <div className="stacks">
        <img src={css3} alt="css3" />
        <img src={html5} alt="html5" />
        <img src={javascript} alt="javascript" />
        <img src={typescript} alt="typescript" />
        <img src={react} alt="react" />
        <img src={nodejs} alt="nodejs" />
        <img src={mongodb} alt="mongodb" />
        <img src={npm} alt="npm" />
        <img src={figma} alt="figma" />
        <img src={vscode} alt="vscode" />
      </div>
    </div>
  );
}
