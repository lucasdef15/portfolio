import { BsFillBuildingFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BsCalendar3 } from 'react-icons/bs';
import '../styles/About.css';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div className="about">
      <div className="about-me">
        <h2 className="title__primary">About Me</h2>
        <p className="text">
          🚀 I am a highly motivated full-stack developer with a passion for
          creating dynamic and user-friendly websites 💻. While I've been
          working with technology for more than 4 years, I have recently been
          focusing on becoming a full-stack developer and have been studying
          intensively for the past months 📚.
        </p>
        <p className="text">
          Despite my relatively short time in this field, I am committed to
          delivering high-quality and efficient web solutions that meet the
          needs of clients and end-users alike 🙌. My current expertise includes
          HTML, CSS, JavaScript, React,js and I am familiarizing myself with
          various frameworks such as Vue.js and Angular 💻💻.
        </p>
        <p className="text">
          As a lifelong learner, I am always eager to learn new technologies and
          stay up-to-date with industry developments 🤓. While I am still new to
          full-stack development, I have already contributed to the design and
          development of several small-scale projects, including basic websites
          and simple e-commerce platforms 🛍️.
        </p>
        <p className="text">
          In addition to coding, I enjoy participating in online coding
          communities and contributing to open-source projects 🤝. I am also
          deeply committed to user experience, and I believe that incorporating
          this into all of my projects is crucial for their success 💡💻.
        </p>
        <p className="text">
          If you're looking for a dedicated and knowledgeable full-stack
          developer who is eager to take on new challenges, don't hesitate to
          reach out 🙋‍♂️. I look forward to collaborating with you on your next
          project 💪💻.
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
