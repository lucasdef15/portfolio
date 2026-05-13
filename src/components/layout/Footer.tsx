import blackLogo from '../../assets/logo/logo.png';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function Footer() {
  return (
    <footer
      className="mb-8 text-[#666]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <nav className="mx-auto mb-8 flex w-[80%] max-w-[1400px] flex-col items-center justify-between gap-8 border-b border-[rgba(128,128,128,0.56)] pb-8 min-[30rem]:flex-row min-[60rem]:w-full">
        <div>
          <img className="max-w-[90px] scale-150 p-2" src={blackLogo} alt="logo" />
        </div>
        <div className="flex items-center gap-8 max-[60rem]:gap-6 [&_svg]:h-[30px] [&_svg]:w-[30px] max-[60rem]:[&_svg]:h-5 max-[60rem]:[&_svg]:w-5">
          <a href="mailto:lucasdef15@hotmail.com" className="grid place-content-center">
            <MdOutlineMailOutline />
          </a>
          <a href="https://wa.me/5519992102121" className="grid place-content-center">
            <IoLogoWhatsapp />
          </a>
          <a
            href="https://github.com/lucasdef15"
            target="_blank"
            rel="noreferrer"
            className="grid place-content-center"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-f-16b2b3113/"
            target="_blank"
            rel="noreferrer"
            className="grid place-content-center"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/lucas_wfaria/"
            target="_blank"
            rel="noreferrer"
            className="grid place-content-center"
          >
            <AiFillInstagram />
          </a>
        </div>
      </nav>
      <div className="text-center text-[clamp(0.8rem,2vw,1rem)]">
        <p>Designed and built by Lucas Faria with Love & Coffee</p>
      </div>
    </footer>
  );
}
