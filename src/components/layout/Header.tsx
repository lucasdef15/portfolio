import { Link, NavLink, useLocation } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import blackLogo from '../../assets/logo/logo.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import MobileNavBar from '../navigation/MobileNavBar';
import { useMainContext } from '../../contexts/MainContext';

export default function Header() {
  const { showHeader } = useMainContext();
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  return (
    <header
      className="fixed left-0 w-full transition-all duration-500 ease-in-out z-50 border-b border-white/5 backdrop-blur-md"
      style={{
        backgroundColor:
          'color-mix(in oklch, var(--color-background), transparent 15%)',
        top: showHeader ? 0 : '-150px',
      }}
    >
      <div className="mx-auto flex w-[90%] max-w-[1400px] items-center justify-between py-4">
        {/* Logo */}
        <LinkScroll
          to="hero"
          spy
          smooth
          offset={-50}
          duration={500}
          className="cursor-pointer"
        >
          <Link to="/">
            <img
              className="max-w-[80px] brightness-0 invert opacity-90 transition-opacity hover:opacity-100"
              src={blackLogo}
              alt="logo"
            />
          </Link>
        </LinkScroll>

        <nav className="hidden items-center gap-8 min-[50rem]:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link-gradient ${isActive ? 'active' : ''}`
            }
          >
            Início
          </NavLink>

          <LinkScroll
            activeClass="active"
            to="techstack"
            spy={onHome}
            smooth
            offset={-50}
            duration={500}
            className="nav-link-gradient cursor-pointer"
          >
            Tecnologias
          </LinkScroll>

          <LinkScroll
            activeClass="active"
            to="projects"
            spy={onHome}
            smooth
            offset={-120}
            duration={500}
            className="nav-link-gradient cursor-pointer"
          >
            Projetos
          </LinkScroll>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link-gradient ${isActive ? 'active' : ''}`
            }
          >
            Sobre
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link-gradient ${isActive ? 'active' : ''}`
            }
          >
            Contato
          </NavLink>

          <div className="h-6 w-[1px] bg-white/10 mx-2" />

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                window.open('https://github.com/lucasdef15', '_blank')
              }
              className="text-muted hover:text-foreground transition-colors text-[1.5rem]"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </button>
            <button
              type="button"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/lucas-f-16b2b3113/',
                  '_blank',
                )
              }
              className="text-muted hover:text-foreground transition-colors text-[1.5rem]"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin />
            </button>
          </div>
        </nav>

        <div className="min-[50rem]:hidden flex items-center">
          <MobileNavBar />
        </div>
      </div>
    </header>
  );
}
