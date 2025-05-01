import { BsFillBuildingFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BsCalendar3 } from 'react-icons/bs';
import '../styles/About.css';
import { motion } from 'framer-motion';
import { routesVariants } from '../animations/animations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const titles = gsap.utils.toArray('.title__primary');

    const cards = gsap.utils.toArray('.about__card');

    titles.forEach((title) => {
      gsap.fromTo(
        title,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    gsap.fromTo(
      '.about-me p',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
      }
    );
  }, []);

  return (
    <motion.div
      className="about"
      variants={routesVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="about-me">
        <h2 className="title__primary">Sobre Mim</h2>
        <p className="text">
          Atualmente sou estudante de Ciência da Computação e atuo como
          desenvolvedor fullstack, apaixonado por transformar ideias em
          experiências digitais ricas e modernas.
        </p>
        <p className="text">
          No front-end, me especializo na criação de interfaces interativas e
          animadas, utilizando tecnologias como React, Tailwind e GSAP. Tenho
          também explorado o uso de objetos 3D para dar vida a projetos mais
          imersivos e criativos.
        </p>
        <p className="text">
          Já no back-end, trabalho com APIs bem estruturadas e responsivas,
          conectadas a bancos de dados como MySQL, garantindo performance e
          estabilidade do lado do servidor. Estou sempre em busca de construir
          soluções completas, com atenção à performance, usabilidade e
          escalabilidade.
        </p>
        <p className="text">
          Gosto de unir design moderno com lógica eficiente, e estou em
          constante evolução — sempre aprendendo, testando novas ideias e
          aplicando tecnologias de ponta em meus projetos.
        </p>
        <p className="text">
          Se você busca alguém comprometido, curioso e que realmente ama o que
          faz, estou pronto para colaborar em projetos desafiadores e
          inovadores.
        </p>
      </div>

      <div className="work">
        <h2 className="title__primary">Experiência Profissional</h2>

        <div className="about__card">
          <div className="job">
            <h3 className="title__secondary">Técnico de Informática</h3>
            <span>Tempo Integral</span>
          </div>
          <div className="job__info">
            <div className="info">
              <BsFillBuildingFill />
              <p>Ômega Net Informática</p>
            </div>
            <div className="info">
              <GoLocation />
              <p>Mococa, Brasil</p>
            </div>
            <div className="info">
              <BsCalendar3 />
              <p>Jun 2019 - Ago 2021</p>
            </div>
          </div>
        </div>

        <div className="about__card">
          <div className="job">
            <h3 className="title__secondary">Desenvolvedor Web Júnior</h3>
            <span>Tempo Integral</span>
          </div>
          <div className="job__info">
            <div className="info">
              <BsFillBuildingFill />
              <p>Autônomo</p>
            </div>
            <div className="info">
              <GoLocation />
              <p>Ribeirão Preto, Brasil</p>
            </div>
            <div className="info">
              <BsCalendar3 />
              <p>Out 2022 - Mar 2023</p>
            </div>
          </div>
        </div>

        <div className="about__card">
          <div className="job">
            <h3 className="title__secondary">Técnico de Eletrônica</h3>
            <span>Tempo Integral</span>
          </div>
          <div className="job__info">
            <div className="info">
              <BsFillBuildingFill />
              <p>Teleponto</p>
            </div>
            <div className="info">
              <GoLocation />
              <p>Ribeirão Preto, Brasil</p>
            </div>
            <div className="info">
              <BsCalendar3 />
              <p>Jan 2024 - Jan 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="work">
        <h2 className="title__primary">Educação</h2>
        <div className="about__card">
          <div className="job">
            <h3 className="title__secondary">
              Bacharelado em Ciência da Computação e Engenharia
            </h3>
            <span>Noturno</span>
          </div>
          <div className="job__info">
            <div className="info">
              <BsFillBuildingFill />
              <p>Cruzeiro do Sul</p>
            </div>
            <div className="info">
              <BsCalendar3 />
              <p>Jan 2025 - Dez 2029</p>
            </div>
          </div>
        </div>

        <div className="about__card">
          <div className="job">
            <h3 className="title__secondary">
              Análise e Desenvolvimento de Sistemas
            </h3>
            <span>Tempo Integral</span>
          </div>
          <div className="job__info">
            <div className="info">
              <BsFillBuildingFill />
              <p>Faculdade de Tecnologia de São Paulo - FATEC-SP</p>
            </div>
            <div className="info">
              <BsCalendar3 />
              <p>Jan 2019 - Ago 2021</p>
            </div>
          </div>
        </div>
        <div className="about__card">
          <div className="job">
            <h3 className="title__secondary">
              Técnico Eletrônica e Comunicação
            </h3>
            <span>Tempo Integral</span>
          </div>
          <div className="job__info">
            <div className="info">
              <BsFillBuildingFill />
              <p>ETEC João Baptista de Lima Figueiredo</p>
            </div>
            <div className="info">
              <BsCalendar3 />
              <p>Fev 2015 - Dez 2018</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
