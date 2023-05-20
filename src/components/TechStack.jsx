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
import { motion } from 'framer-motion';

const teckStackVariants = {
  hover: {
    scale: 1.3,
    origin: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
    },
  },
};

export default function TechStack() {
  return (
    <div className="techstack" id="techstack">
      <div className="techstack__title">
        <h2>My Tech Stack</h2>
        <p> Technologies I&apos;ve been working with recently</p>
      </div>
      <div className="stacks">
        <motion.img
          src={css3}
          alt="css3"
          variants={teckStackVariants}
          whileHover="hover"
        />
        <motion.img
          variants={teckStackVariants}
          whileHover="hover"
          src={html5}
          alt="html5"
        />
        <motion.img
          variants={teckStackVariants}
          whileHover="hover"
          src={javascript}
          alt="javascript"
        />
        <motion.img
          variants={teckStackVariants}
          whileHover="hover"
          src={typescript}
          alt="typescript"
        />
        <motion.img
          variants={teckStackVariants}
          whileHover="hover"
          src={react}
          alt="react"
        />
        <motion.img
          variants={teckStackVariants}
          whileHover="hover"
          src={nodejs}
          alt="nodejs"
        />
        <motion.img
          variants={teckStackVariants}
          whileHover="hover"
          src={mongodb}
          alt="mongodb"
        />
        <motion.img
          variants={teckStackVariants}
          whileHover="hover"
          src={npm}
          alt="npm"
        />
        <motion.img
          variants={teckStackVariants}
          whileHover="hover"
          src={figma}
          alt="figma"
        />
        <motion.img
          variants={teckStackVariants}
          whileHover="hover"
          src={vscode}
          alt="vscode"
        />
      </div>
    </div>
  );
}
