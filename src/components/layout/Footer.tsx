import blackLogo from '../../assets/logo/logo.png';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function Footer() {
  return (
    <footer className="mt-20 pb-12 text-slate-400">
      <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col items-center gap-10">
        {/* Linha Divisória com Gradiente Sutil */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <nav className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo com Filtro para Tema Dark */}
          <div className="transition-transform hover:scale-105">
            <img
              className="max-w-[80px] brightness-0 invert opacity-80"
              src={blackLogo}
              alt="logo"
            />
          </div>

          {/* Redes Sociais - Estilo Glass */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <MdOutlineMailOutline />,
                href: 'mailto:lucasdefaria2025@gmail.com',
              },
              { icon: <IoLogoWhatsapp />, href: 'https://wa.me/5519996154832' },
              { icon: <AiFillGithub />, href: 'https://github.com/lucasdef15' },
              {
                icon: <AiFillLinkedin />,
                href: 'https://www.linkedin.com/in/lucas-f-16b2b3113/',
              },
              {
                icon: <AiFillInstagram />,
                href: 'https://www.instagram.com/lucas_wfaria/',
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-xl transition-all hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* Créditos Finais */}
        <div className="text-center">
          <p className="text-sm font-medium tracking-wide">
            Designed and built by{' '}
            <span className="text-white">Lucas Faria</span>
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] opacity-50">
            Built with React & Coffee • 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
