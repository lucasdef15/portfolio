import { MdOutlineMailOutline, MdFileDownload } from 'react-icons/md';
import { routesVariants } from '../animations/animations';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import cvpdf from '../download/Lucas_cv.pdf';

export default function Contact() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.from('.contact__header', {
      y: 30,
      opacity: 0,
    })
      .from(
        '.contact__form',
        {
          y: 50,
          opacity: 0,
        },
        '-=0.5',
      )
      .from(
        '.contact__info',
        {
          opacity: 0,
        },
        '-=0.3',
      );
  }, []);

  const downloadTxtFile = () => {
    const link = document.createElement('a');
    link.download = 'Lucas_Faria_CV.pdf';
    link.href = cvpdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="contact-page"
      variants={routesVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="contact mx-auto flex w-[90vw] max-w-[800px] flex-col gap-12 py-32 font-['Poppins',sans-serif] max-[600px]:py-20">
        <header className="contact__header flex flex-col gap-4 text-center">
          <h2 className="contact__title text-[clamp(2rem,5vw,2.8rem)] font-extrabold tracking-tight text-[#42446e]">
            Vamos conversar.
          </h2>
          <p className="contact__subtitle mx-auto max-w-[500px] text-[clamp(1rem,2vw,1.15rem)] leading-relaxed text-[#666]">
            Tem um projeto em mente ou quer discutir uma oportunidade? Estou pronto
            para colaborar. 🤟
          </p>
        </header>

        <div className="contact__form flex flex-col gap-6 rounded-xl bg-white p-8 shadow-[0_10px_30px_rgba(66,68,110,0.05)] max-[600px]:p-6">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="form__group flex flex-col gap-2">
              <label className="form__label ml-1 mt-2 text-sm font-semibold text-[#42446e]" htmlFor="name">
                Nome completo
              </label>
              <input
                className="form__input w-full rounded-lg border border-[#e0e0e0] bg-[#fcfcfc] px-4 py-3.5 font-['Poppins',sans-serif] text-base text-[#666] transition-all duration-300 placeholder:text-[#aaa] focus:border-[#42446e] focus:bg-white focus:shadow-[0_0_0_4px_rgba(66,68,110,0.1)] focus:outline-none"
                type="text"
                id="name"
                name="name"
                required
                placeholder="Como devo te chamar?"
              />
            </div>

            <div className="form__group flex flex-col gap-2">
              <label className="form__label ml-1 mt-2 text-sm font-semibold text-[#42446e]" htmlFor="email">
                E-mail
              </label>
              <input
                className="form__input w-full rounded-lg border border-[#e0e0e0] bg-[#fcfcfc] px-4 py-3.5 font-['Poppins',sans-serif] text-base text-[#666] transition-all duration-300 placeholder:text-[#aaa] focus:border-[#42446e] focus:bg-white focus:shadow-[0_0_0_4px_rgba(66,68,110,0.1)] focus:outline-none"
                type="email"
                id="email"
                name="email"
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="form__group flex flex-col gap-2">
              <label className="form__label ml-1 mt-2 text-sm font-semibold text-[#42446e]" htmlFor="message">
                Mensagem
              </label>
              <textarea
                className="form__textarea min-h-[150px] w-full resize-y rounded-lg border border-[#e0e0e0] bg-[#fcfcfc] px-4 py-3.5 font-['Poppins',sans-serif] text-base text-[#666] transition-all duration-300 placeholder:text-[#aaa] focus:border-[#42446e] focus:bg-white focus:shadow-[0_0_0_4px_rgba(66,68,110,0.1)] focus:outline-none"
                id="message"
                name="message"
                placeholder="Conte-me um pouco sobre o seu projeto..."
                required
              />
            </div>

            <button
              className="form__button ml-auto mt-2 flex items-center gap-3 self-end rounded-lg bg-[#42446e] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#323456] hover:shadow-[0_5px_15px_rgba(66,68,110,0.2)] active:translate-y-0 max-[600px]:w-full max-[600px]:justify-center"
              type="submit"
            >
              Enviar mensagem
              <span className="icon" aria-hidden>
                🚀
              </span>
            </button>
          </form>
        </div>

        <footer className="contact__info mt-8 flex justify-center gap-12 border-t border-[#e0e0e0] pt-8 max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-6">
          <a
            href="mailto:lucasff15@hotmail.com"
            className="info__item flex items-center gap-3 text-sm text-[#666] transition-colors duration-300 hover:text-[#42446e] [&_svg]:text-xl [&_svg]:text-[#42446e]"
          >
            <MdOutlineMailOutline />
            <span>lucasff15@hotmail.com</span>
          </a>

          <button
            type="button"
            onClick={downloadTxtFile}
            className="info__item flex cursor-pointer items-center gap-3 border-0 bg-transparent font-inherit text-sm text-[#666] transition-colors duration-300 hover:text-[#42446e] [&_svg]:text-xl [&_svg]:text-[#42446e]"
          >
            <MdFileDownload />
            <span>Download CV</span>
          </button>
        </footer>
      </div>
    </motion.div>
  );
}
