import githubpage1 from '../assets/projects/githubimgs/page1.webp';
import githubpage2 from '../assets/projects/githubimgs/page2.webp';
import githubpage3 from '../assets/projects/githubimgs/page3.webp';
import githubpage4 from '../assets/projects/githubimgs/page4.webp';

import blog1 from '../assets/projects/blog/blog1.jpeg';
import blog2 from '../assets/projects/blog/blog2.jpeg';
import blog3 from '../assets/projects/blog/blog3.jpeg';
import blog4 from '../assets/projects/blog/blog4.jpeg';

import csv1 from '../assets/projects/csv/page1.png';

import personal1 from '../assets/projects/completeBlog/personal1.webp';
import personal2 from '../assets/projects/completeBlog/personal2.webp';
import personal3 from '../assets/projects/completeBlog/personal3.webp';
import personal4 from '../assets/projects/completeBlog/personal4.webp';
import personal5 from '../assets/projects/completeBlog/personal5.webp';
import personal6 from '../assets/projects/completeBlog/personal6.webp';

import auth1 from '../assets/projects/auth/page1.png';

import newsletter1 from '../assets/projects/newsletter/page1.webp';
import newsletter2 from '../assets/projects/newsletter/page2.webp';
import newsletter3 from '../assets/projects/newsletter/page3.webp';

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string; // Mantido para compatibilidade de texto
  technologies: string[]; // Adicionado para as tags automáticas que criamos
  livePreviewLink: string;
  codeLink: string;
  coverImage: string[];
};

export const projectsData: Project[] = [
  {
    id: '0',
    title: 'CSV to PDF Converter',
    description:
      'Conversor de arquivos em tempo real com processamento assíncrono. Focado em escalabilidade e tipagem forte, automatiza a geração de documentos PDF a partir de dados estruturados via Node.js.',
    techStack: 'React.js, Tailwind CSS, TypeScript, Node.js, Express',
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind'],
    livePreviewLink: 'https://csv-to-pdf-livid.vercel.app/',
    codeLink: 'https://github.com/lucasdef15/csvToPdf.git',
    coverImage: [csv1],
  },
  {
    id: '1',
    title: 'GitHub User Search',
    description:
      'Dashboard de consulta de dados via GitHub API. Implementa hooks customizados para gerenciamento de estado persistente (Local Storage) e interface dinâmica com Material UI.',
    techStack: 'React.js, Context API, Axios, Material UI',
    technologies: ['React', 'Material UI', 'API', 'Context API'],
    livePreviewLink: 'https://github-user-search-wheat.vercel.app/',
    codeLink: 'https://github.com/lucasdef15/github-user-search',
    coverImage: [githubpage1, githubpage2, githubpage3, githubpage4],
  },
  {
    id: '2',
    title: 'Newsletter Sign-up',
    description:
      'Aplicação focada em UX e validação rigorosa de dados. Utiliza React Hook Form e Yup para garantir integridade nas entradas, com layout totalmente responsivo via Styled Components.',
    techStack: 'React.js, Styled-components, React-Hook-Form, Yup',
    technologies: ['React', 'Styled Components', 'UX', 'Yup'],
    livePreviewLink: 'https://newsletter-sign-up-sigma.vercel.app/',
    codeLink: 'https://github.com/lucasdef15/newsletter-sign-up',
    coverImage: [newsletter1, newsletter2, newsletter3],
  },
  {
    id: '3',
    title: 'Backend Auth System',
    description:
      'Sistema robusto de autenticação e autorização. Implementa hashing de senhas, proteção de rotas e gestão de sessões em ambiente Dockerizado com persistência em MySQL.',
    techStack: 'Node.js, Express, Docker, MySQL',
    technologies: ['Node.js', 'Docker', 'MySQL', 'Backend'],
    livePreviewLink: '',
    codeLink: 'https://github.com/lucasdef15/auth_project.git',
    coverImage: [auth1],
  },
  {
    id: '4',
    title: 'Personal Blog',
    description:
      'Plataforma de conteúdo estático com renderização de Markdown. Focado em performance e UI, utiliza GSAP para animações fluidas e navegação dinâmica.',
    techStack: 'React.js, GSAP, React Markdown, React-Router',
    technologies: ['React', 'GSAP', 'Markdown', 'Animations'],
    livePreviewLink: 'https://frontend-mentor-blog-delta.vercel.app/',
    codeLink: 'https://github.com/lucasdef15/frontend_mentor_blog.git',
    coverImage: [blog4, blog1, blog2, blog3],
  },
  {
    id: '5',
    title: 'Full-Stack Enterprise Blog',
    description:
      'Aplicação completa com controle de acesso (RBAC). Possui rotas protegidas para administradores, gestão dinâmica de conteúdo e arquitetura escalável em TypeScript ponta a ponta.',
    techStack: 'React.js, Material UI, TypeScript, Node.js, Express',
    technologies: ['React', 'FullStack', 'TypeScript', 'Node.js'],
    livePreviewLink: 'https://r2619.us/',
    codeLink: 'https://github.com/lucasdef15/butterflies-hurricane',
    coverImage: [
      personal1,
      personal2,
      personal3,
      personal4,
      personal5,
      personal6,
    ],
  },
];
