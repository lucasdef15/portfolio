import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const menuLinks = [
    { name: 'Início', to: '/', type: 'nav' },
    { name: 'Projetos', to: 'projects', type: 'scroll' },
    { name: 'Tecnologias', to: 'techstack', type: 'scroll' },
    { name: 'Sobre', to: '/about', type: 'nav' },
    { name: 'Contato', to: '/contact', type: 'nav' },
  ];
  return (
    <div className="flex items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="text-4xl text-brand-end active:scale-90 transition-transform p-2"
      >
        <HiMenuAlt3 />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // Mudança crucial: h-screen e justify-center
            className="fixed inset-0 z-[100] w-screen h-screen flex flex-col items-center justify-center"
            style={{
              backgroundColor: 'var(--color-background)', // Sem transparência aqui
              backgroundImage:
                'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
            }}
          >
            {/* Botão de fechar mais espaçado */}
            <div className="absolute top-8 right-8">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-5xl text-muted/80 hover:text-foreground"
              >
                <HiX />
              </motion.button>
            </div>

            {/* Nav centralizada */}
            <nav className="flex flex-col gap-8 items-center justify-center w-full">
              {menuLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  className="w-full text-center"
                >
                  {link.type === 'nav' ? (
                    <NavLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `nav-link-mobile ${isActive ? 'active' : ''} text-3xl font-bold`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ) : (
                    <LinkScroll
                      to={link.to}
                      smooth
                      spy
                      activeClass="active"
                      onClick={() => setIsOpen(false)}
                      className="nav-link-mobile cursor-pointer block text-3xl font-bold"
                    >
                      {link.name}
                    </LinkScroll>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Sociais no rodapé */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-16 flex gap-12"
            >
              <a
                href="https://github.com/lucasdef15"
                target="_blank"
                className="text-5xl text-brand-start"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-f-16b2b3113/"
                target="_blank"
                className="text-5xl text-brand-end"
              >
                <AiFillLinkedin />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
