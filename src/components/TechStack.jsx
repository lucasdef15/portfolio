import React from 'react';
import css3 from '../assets/stacks/css3.svg';
import figma from '../assets/stacks/figma.svg';
import html5 from '../assets/stacks/html5.svg';
import javascript from '../assets/stacks/javascript.svg';
import mongodb from '../assets/stacks/mongodb.svg';
import nodejs from '../assets/stacks/nodejs.svg';
import react from '../assets/stacks/react.svg';
import typescript from '../assets/stacks/typescript.svg';
import vscode from '../assets/stacks/vscode.svg';
import redux from '../assets/stacks/redux-original.svg';

import mysql from '../assets/stacks/mysql.png';
import python from '../assets/stacks/python.png';
import threejs from '../assets/stacks/threejs.svg';
import gsapSvg from '../assets/stacks/gsap.svg';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tooltip from './Tooltip';

gsap.registerPlugin(ScrollTrigger);

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
  const stackHeadingRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      '.stacks img',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.stacks',
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      stackHeadingRef.current.children,
      { rotate: -90, opacity: 0 },
      {
        rotate: 0,
        opacity: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: stackHeadingRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <div className="techstack" id="techstack">
      <div ref={stackHeadingRef} className="techstack__title">
        <h2>My Tech Stack</h2>
        <p>Tecnologias com as quais venho trabalhando recentemente</p>
      </div>
      <div className="stacks">
        <Tooltip text={'css3'}>
          <motion.img
            className="stack-img"
            src={css3}
            alt="css3"
            variants={teckStackVariants}
            whileHover="hover"
          />
        </Tooltip>
        <Tooltip text={'html5'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={html5}
            alt="html5"
          />
        </Tooltip>
        <Tooltip text={'Javascript'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={javascript}
            alt="javascript"
          />
        </Tooltip>
        <Tooltip text={'typescript'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={typescript}
            alt="typescript"
          />
        </Tooltip>
        <Tooltip text={'React'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={react}
            alt="react"
          />
        </Tooltip>
        <Tooltip text={'Redux'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={redux}
            alt="redux"
          />
        </Tooltip>
        <Tooltip text={'Node.js'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={nodejs}
            alt="nodejs"
          />
        </Tooltip>
        <Tooltip text={'MongoDB'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={mongodb}
            alt="mongodb"
          />
        </Tooltip>
        <Tooltip text={'MySQL'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={mysql}
            alt="mysql"
          />
        </Tooltip>
        <Tooltip text={'Figma'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={figma}
            alt="figma"
          />
        </Tooltip>
        <Tooltip text={'VSCode'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={vscode}
            alt="vscode"
          />
        </Tooltip>
        <Tooltip text={'Python'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={python}
            alt="python"
          />
        </Tooltip>
        <Tooltip text={'Three.js'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={threejs}
            alt="threejs"
          />
        </Tooltip>
        <Tooltip text={'GSAP'}>
          <motion.img
            className="stack-img"
            variants={teckStackVariants}
            whileHover="hover"
            src={gsapSvg}
            alt="gsapSvg"
          />
        </Tooltip>
      </div>
    </div>
  );
}
