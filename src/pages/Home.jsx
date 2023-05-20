import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import '../styles/Home.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
    </>
  );
}
