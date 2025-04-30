import githubpage1 from '../assets/projects/githubimgs/page1.webp';
import githubpage2 from '../assets/projects/githubimgs/page2.webp';
import githubpage3 from '../assets/projects/githubimgs/page3.webp';
import githubpage4 from '../assets/projects/githubimgs/page4.webp';

import blog1 from '../assets/projects/blog/blog1.jpeg';
import blog2 from '../assets/projects/blog/blog2.jpeg';
import blog3 from '../assets/projects/blog/blog3.jpeg';
import blog4 from '../assets/projects/blog/blog4.jpeg';

import mutlformpage1 from '../assets/projects/multiform/step1.webp';
import mutlformpage2 from '../assets/projects/multiform/step2.webp';
import mutlformpage3 from '../assets/projects/multiform/step3.webp';
import mutlformpage4 from '../assets/projects/multiform/step4.webp';
import mutlformpage5 from '../assets/projects/multiform/step5.webp';

import personal1 from '../assets/projects/completeBlog/personal1.png';
import personal2 from '../assets/projects/completeBlog/personal2.png';
import personal3 from '../assets/projects/completeBlog/personal3.png';
import personal4 from '../assets/projects/completeBlog/personal4.png';
import personal5 from '../assets/projects/completeBlog/personal5.png';
import personal6 from '../assets/projects/completeBlog/personal6.png';

import ecomerce1 from '../assets/projects/ecomerce/page1.webp';
import ecomerce2 from '../assets/projects/ecomerce/page2.webp';
import ecomerce3 from '../assets/projects/ecomerce/page3.webp';
import ecomerce4 from '../assets/projects/ecomerce/page4.webp';
import ecomerce5 from '../assets/projects/ecomerce/page5.webp';

import newsletter1 from '../assets/projects/newsletter/page1.webp';
import newsletter2 from '../assets/projects/newsletter/page2.webp';
import newsletter3 from '../assets/projects/newsletter/page3.webp';

export const projectsData = [
  {
    id: '0',
    title: 'Multi-step form',
    description:
      'Multi-step form with React, React Hook Form, and Yup for validation. Redux manages state, React Router handles routes. Users progress through steps, track choices, and modify data if necessary.',
    techStack: 'React.js, React Router, Axios, Redux',
    livePreviewLink: 'https://bucolic-sunburst-e006de.netlify.app/',
    codeLink: 'https://github.com/lucasdef15/multi-step-form',
    coverImage: [
      mutlformpage1,
      mutlformpage2,
      mutlformpage3,
      mutlformpage4,
      mutlformpage5,
    ],
  },
  {
    id: '1',
    title: 'Git Hub User Search',
    description:
      'Utilizei a GitHub Users API para exibir dados de perfil. As requisições foram feitas com Axios, e a interface foi construída com Material UI e Styled Components. Também desenvolvi hooks personalizados para salvar o tema no local storage, permitindo uma personalização contínua e fluida da experiência do usuário.',
    techStack: 'React.js, Context API, Axios',
    livePreviewLink: 'https://github-user-search-wheat.vercel.app/',
    codeLink: 'https://github.com/lucasdef15/github-user-search',
    coverImage: [githubpage1, githubpage2, githubpage3, githubpage4],
  },
  {
    id: '2',
    title: 'Newsletter Sign-up',
    description:
      'Este é um projeto desenvolvido a partir de um desafio do Frontend Mentor, utilizando React Router para uma configuração eficiente de rotas. Para aprimorar o estilo, foram usados styled-components. A aplicação foi construída com React.js, e a validação de formulários foi feita com React Hook Form e Yup. O projeto é totalmente responsivo.',
    techStack: 'React.js, Styled-components, React-Hook-Form, Yup',
    livePreviewLink: 'https://newsletter-sign-up-sigma.vercel.app/',
    codeLink: 'https://github.com/lucasdef15/newsletter-sign-up',
    coverImage: [newsletter1, newsletter2, newsletter3],
  },
  {
    id: '3',
    title: 'E-commerce',
    description:
      'Uma plataforma de e-commerce elegante e moderna, criada para entusiastas da costura de todos os níveis. Possui recursos como carrinho de compras e páginas individuais de produtos com informações detalhadas, imagens de alta qualidade e avaliações de clientes.',
    techStack: 'HTML5, CSS3, JavaScript',
    livePreviewLink: 'https://rositacosturacriativa.netlify.app',
    codeLink: 'https://github.com/lucasdef15/ecomerce-project',
    coverImage: [ecomerce1, ecomerce2, ecomerce3, ecomerce4, ecomerce5],
  },
  {
    id: '4',
    title: 'Personal BLog',
    description:
      'Desenvolvi um blog pessoal com múltiplas páginas, focado em oferecer uma experiência dinâmica e envolvente para o usuário. Implementei animações estratégicas para tornar a navegação mais fluida e agradável. O projeto utiliza um arquivo JSON para lidar com dados dinâmicos, e também pode ser integrado a um CMS headless para aumentar ainda mais sua flexibilidade e nível profissional.',
    techStack: 'React.js, CSS3, GSAP, React Mardown, React-Router',
    livePreviewLink: 'https://tourmaline-bavarois-49d2df.netlify.app',
    codeLink: 'https://github.com/lucasdef15/react_todo-list',
    coverImage: [blog4, blog1, blog2, blog3],
  },
  {
    id: '5',
    title: 'Full-Stack Blog',
    description:
      'Este é um projeto de blog full stack em nível profissional, desenvolvido com React, Material UI e TypeScript no front-end, e Node.js, Express e TypeScript no back-end. A aplicação conta com um sistema completo de controle de acesso por funções, permitindo diferentes funcionalidades para administradores e usuários comuns. Possui rotas protegidas, gestão dinâmica de conteúdos, além de uma interface moderna e intuitiva que proporciona uma experiência fluida ao usuário. Do design à implementação, este projeto demonstra uma arquitetura sólida e domínio completo do desenvolvimento full stack — sendo uma excelente vitrine das minhas habilidades em criar aplicações web escaláveis e bem estruturadas.',
    techStack: 'React.js, Material.UI, Typescript, Node.js',
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
  // {
  //   id: '5',
  //   title: 'Upcoming',
  //   description:
  //     'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  //   techStack: '',
  //   livePreviewLink: '#',
  //   codeLink: '#',
  //   coverImage: [cover],
  // },
];
