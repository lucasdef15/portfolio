import { Link, NavLink, useLocation } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import blackLogo from '../../assets/logo/logo.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import MobileNavBar from '../navigation/MobileNavBar';
import { useMainContext } from '../../contexts/MainContext';

const gradientLink =
  'relative text-[1.2rem] font-medium bg-gradient-to-r from-[#13b0f5] to-[#e70faa] bg-[length:200%_auto] bg-left bg-clip-text text-transparent w-max transition-all duration-300 ' +
  'after:absolute after:left-0 after:-bottom-[5px] after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-md after:bg-gradient-to-r after:from-[#13b0f5] after:to-[#e70faa] after:transition-transform after:duration-300 ' +
  'hover:font-black hover:-translate-y-px hover:bg-right hover:after:scale-x-100 ' +
  '[&.active]:font-black [&.active]:-translate-y-px [&.active]:bg-right [&.active]:after:scale-x-100';

export default function Header() {
  const { showHeader } = useMainContext();
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  return (
    <header
      className="fixed left-0 top-0 z-2 w-full bg-[#f5f5f5]/96 text-[#666] shadow-[2px_2px_10px_rgba(0,0,0,0.068)]"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        top: showHeader ? 0 : '-100px',
        transition: 'top 0.4s ease-in-out',
      }}
    >
      <div className="mx-auto flex w-[80%] max-w-[1400px] items-center justify-between">
        <LinkScroll
          activeClass="logo__none"
          to="hero"
          spy
          smooth
          offset={-50}
          duration={500}
        >
          <Link to="/">
            <img
              className="max-w-[90px] scale-150 p-2"
              src={blackLogo}
              alt="logo"
            />
          </Link>
        </LinkScroll>

        <nav className="hidden items-center gap-8 min-[60rem]:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [
                gradientLink,
                isActive
                  ? 'font-black bg-right after:scale-x-100 -translate-y-px'
                  : '',
              ]
                .filter(Boolean)
                .join(' ')
            }
          >
            Início
          </NavLink>
          <LinkScroll
            activeClass={onHome ? 'active' : ''}
            to="techstack"
            spy={onHome}
            smooth
            offset={-50}
            duration={500}
            className={gradientLink}
          >
            Tecnologias
          </LinkScroll>
          <LinkScroll
            activeClass={onHome ? 'active' : ''}
            to="projects"
            spy={onHome}
            smooth
            offset={-120}
            duration={500}
            className={gradientLink}
          >
            Projetos
          </LinkScroll>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              [
                gradientLink,
                isActive
                  ? 'font-black bg-right after:scale-x-100 -translate-y-px'
                  : '',
              ]
                .filter(Boolean)
                .join(' ')
            }
          >
            Sobre
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              [
                gradientLink,
                isActive
                  ? 'font-black bg-right after:scale-x-100 -translate-y-px'
                  : '',
              ]
                .filter(Boolean)
                .join(' ')
            }
          >
            Contato
          </NavLink>

          <button
            type="button"
            onClick={() =>
              window.open('https://github.com/lucasdef15', '_blank')
            }
            className="grid cursor-pointer place-content-center border-0 bg-transparent p-0 text-[1.5rem] font-medium outline-none [&_svg]:text-[1.5rem]"
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
            className="grid cursor-pointer place-content-center border-0 bg-transparent p-0 text-[1.5rem] font-medium outline-none [&_svg]:text-[1.5rem]"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </button>
        </nav>

        <MobileNavBar showHeader={showHeader} />
      </div>
    </header>
  );
}
