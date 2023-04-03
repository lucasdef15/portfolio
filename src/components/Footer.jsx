import React from 'react';
import { NavLink } from 'react-router-dom';
import blackLogo from '../assets/logo/Logo__black.png';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__navbar line">
        <div>
          <img className="logo" src={blackLogo} alt="logo" />
        </div>
        <div className="footer__navbarLinks">
          <a href="mailto:lucasdef15@hotmail.com" className="grid">
            <MdOutlineMailOutline />
          </a>
          <a href="https://wa.me/5519992102121" className="grid">
            <IoLogoWhatsapp />
          </a>
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
          <a
            href="https://www.instagram.com/lucas_wfaria/"
            target="_blank"
            className="grid"
          >
            <AiFillInstagram />
          </a>
        </div>
      </nav>
      <div className="copyright">
        <p>Designed and built by Lucas Faria with Love & Coffee</p>
      </div>
    </footer>
  );
}
