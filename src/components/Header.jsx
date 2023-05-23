import { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import blackLogo from '../assets/logo/Logo__black.png';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import MobileNavBar from './mobile/MobileNavBar';

export default function Header() {
  const [hanburger, setHanburguer] = useState({});
  const [sidebarStyle, setSidebarStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBodyClick = useCallback(
    (event) => {
      const isExcluded = event.target.closest('.sidebarMenu__links');

      if (isOpen && !isExcluded) {
        handleClose();
        setIsOpen(false);
      } else {
        return;
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', handleBodyClick, {
        capture: true,
      });
    };
  }, [handleBodyClick]);

  const handleOpen = () => {
    const styleSidebar = {
      right: 0,
    };
    const styleHanburguer = {
      display: 'none',
    };
    setSidebarStyle(styleSidebar);
    setHanburguer(styleHanburguer);
    setIsOpen(true);
  };

  const handleClose = () => {
    const styleSidebar = {
      right: '-99999px',
    };
    const styleHanburguer = {
      display: 'block',
    };
    setSidebarStyle(styleSidebar);
    setHanburguer(styleHanburguer);
    setIsOpen(false);
  };
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

        {/* <button className="navbar__btn navbar__sideMenu" onClick={handleOpen}>
          <FaBars style={hanburger} />
        </button> */}
        <MobileNavBar sidebarStyle={sidebarStyle} handleClose={handleClose} />
      </div>
    </header>
  );
}
