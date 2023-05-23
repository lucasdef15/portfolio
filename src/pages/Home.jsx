import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import '../styles/Home.css';
import { motion } from 'framer-motion';
import { routesVariants } from '../animations/animations';

export default function Home() {
  return (
    <motion.div
      variants={routesVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <Hero />
      <TechStack />
      <Projects />
    </motion.div>
  );
}
