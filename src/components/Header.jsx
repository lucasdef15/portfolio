import { NavLink } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import blackLogo from '../assets/logo/Logo__black.png';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import MobileNavBar from './mobile/MobileNavBar';

export default function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <LinkScroll
          activeClass="logo__none"
          to="hero"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <img className="logo" src={blackLogo} alt="logo" />
        </LinkScroll>

        <nav className="navbar__links">
          <NavLink to="/">Home</NavLink>
          <LinkScroll
            activeClass="active"
            to="techstack"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Tech Stack
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            Projects
          </LinkScroll>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <a
            href="https://github.com/lucasdef15"
            target="_blank"
            className="grid"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-f-16b2b3113/"
            target="_blank"
            className="grid"
          >
            <AiFillLinkedin />
          </a>
        </nav>

        <MobileNavBar />
      </div>
    </header>
  );
}
