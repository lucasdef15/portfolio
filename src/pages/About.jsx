import { BsFillBuildingFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BsCalendar3 } from 'react-icons/bs';
import '../styles/About.css';
import { motion } from 'framer-motion';
import { routesVariants } from '../animations/animations';

export default function About() {
  return (
    <motion.div
      className="about"
      variants={routesVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="about-me">
        <h2 className="title__primary">About Me</h2>
        <p className="text">
          I'm a web developer with a strong drive to create dynamic and
          user-friendly websites. With over four years of experience in the
          technology field, I have recently focused my efforts on becoming a
          front-end developer, dedicating intensive study over the past nine
          months..
        </p>
        <p className="text">
          Despite my relatively short tenure in this industry, I am deeply
          committed to delivering high-quality and efficient web solutions that
          cater to both clients and end-users. My current expertise encompasses
          HTML, CSS, and JavaScript, and I am actively acquainting myself with
          various frameworks, including React and Angular.
        </p>
        <p className="text">
          As an avid lifelong learner, I continuously seek to expand my
          knowledge and remain abreast of the latest industry advancements.
          While I am in the early stages of my full-stack development journey, I
          have already contributed to the design and development of several
          small-scale projects, ranging from basic websites to simple e-commerce
          platforms.
        </p>
        <p className="text">
          Beyond coding, I actively engage in online coding communities and
          contribute to open-source projects. Additionally, I prioritize user
          experience, recognizing its pivotal role in the success of every
          project I undertake.
        </p>
        <p className="text">
          If you are in search of a dedicated and knowledgeable web developer
          who thrives on tackling new challenges, I welcome you to reach out. I
          am excited to collaborate with you on your next project, bringing my
          expertise and enthusiasm to the table.
        </p>
      </div>

      <div className="work">
        <h2 className="title__primary">Work Experience</h2>
        <div className="about__card">
          <div className="job">
            <h3 className="title__secondary">Junior Web Developer</h3>
            <span>Full Time</span>
          </div>
          <div className="job__info">
            <div className="info">
              <BsFillBuildingFill />
              <p>Self Employee</p>
            </div>
            <div className="info">
              <GoLocation />
              <p>Brazil</p>
            </div>
            <div className="info">
              <BsCalendar3 />
              <p>Out 2022 - Mar 2023</p>
            </div>
          </div>
        </div>

        <div className="about__card">
          <div className="job">
            <h3 className="title__secondary">Computer technician</h3>
            <span>Full Time</span>
          </div>
          <div className="job__info">
            <div className="info">
              <BsFillBuildingFill />
              <p>Ômega Net Informática</p>
            </div>
            <div className="info">
              <GoLocation />
              <p>Brazil</p>
            </div>
            <div className="info">
              <BsCalendar3 />
              <p>Jun 2019 - Aug 2021</p>
            </div>
          </div>
        </div>
      </div>

      <div className="work">
        <h2 className="title__primary">Education</h2>
        <div className="about__card">
          <div className="job">
            <h3 className="title__secondary">
              Bachelor in Computer Science and Engineering
            </h3>
            <span>Full Time</span>
          </div>
          <div className="job__info">
            <div className="info">
              <BsFillBuildingFill />
              <p>Faculdade de Tecnologia de São Paulo - FATEC-SP</p>
            </div>
            <div className="info">
              <BsCalendar3 />
              <p>Jan 2019 - Aug 2021</p>
            </div>
          </div>
        </div>

        <div className="about__card">
          <div className="job">
            <h3 className="title__secondary">
              Bachelor in Electronics & Communication
            </h3>
            <span>Full Time</span>
          </div>
          <div className="job__info">
            <div className="info">
              <BsFillBuildingFill />
              <p>ETEC João Baptista de Lima Figueiredo</p>
            </div>
            <div className="info">
              <BsCalendar3 />
              <p>Feb 2015 - Dec 2018</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
