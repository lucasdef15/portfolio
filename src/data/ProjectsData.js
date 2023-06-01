import rickandmortyimg from '../assets/projects/rickandmorty.png';
import todolistimg from '../assets/projects/todolist.png';

import githubpage1 from '../assets/projects/githubimgs/page1.png';
import githubpage2 from '../assets/projects/githubimgs/page2.png';
import githubpage3 from '../assets/projects/githubimgs/page3.png';
import githubpage4 from '../assets/projects/githubimgs/page4.png';

import mutlformpage1 from '../assets/projects/multiform/step1.png';
import mutlformpage2 from '../assets/projects/multiform/step2.png';
import mutlformpage3 from '../assets/projects/multiform/step3.png';
import mutlformpage4 from '../assets/projects/multiform/step4.png';
import mutlformpage5 from '../assets/projects/multiform/step5.png';

import ecomerce1 from '../assets/projects/ecomerce/page1.png';
import ecomerce2 from '../assets/projects/ecomerce/page2.png';
import ecomerce3 from '../assets/projects/ecomerce/page3.png';
import ecomerce4 from '../assets/projects/ecomerce/page4.png';
import ecomerce5 from '../assets/projects/ecomerce/page5.png';

import newsletter1 from '../assets/projects/newsletter/page1.png';
import newsletter2 from '../assets/projects/newsletter/page2.png';
import newsletter3 from '../assets/projects/newsletter/page3.png';
import newsletter4 from '../assets/projects/newsletter/page4.png';
import newsletter5 from '../assets/projects/newsletter/page5.png';

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
      'Leveraged GitHub Users API for profile data. Used Axios for requests and Material UI + Styled Components for UI. Custom hooks saved theme in local storage, providing seamless personalization.',
    techStack: 'React.js, Context API, Axios',
    livePreviewLink: 'https://github-user-search-wheat.vercel.app/',
    codeLink: 'https://github.com/lucasdef15/github-user-search',
    coverImage: [githubpage1, githubpage2, githubpage3, githubpage4],
  },
  {
    id: '2',
    title: 'Newsletter Sign-up',
    description:
      'This is a project developed by Frontend Mentor, which I have implemented using React Router for efficient route configuration. To enhance the styling and design, I utilized styled components. The entire application was built using React.js, while form validation was accomplished using React Hook Form and Yup. Additionally, the project is fully responsive.',
    techStack: 'React.js, Styled-components, React-Hook-Form, Yup',
    livePreviewLink: 'https://newsletter-sign-up-sigma.vercel.app/',
    codeLink: 'https://github.com/lucasdef15/newsletter-sign-up',
    coverImage: [
      newsletter1,
      newsletter2,
      newsletter3,
      newsletter4,
      newsletter5,
    ],
  },
  {
    id: '3',
    title: 'E-commerce',
    description:
      'A sleek and modern e-commerce platform designed for sewing enthusiasts of all levels. Features include a shopping cart and individual product pages with detailed information, high-quality images, and customer reviews.',
    techStack: 'HTML5, CSS3, JavaScript',
    livePreviewLink: 'https://rositacosturacriativa.netlify.app',
    codeLink: 'https://github.com/lucasdef15/ecomerce-project',
    coverImage: [ecomerce1, ecomerce2, ecomerce3, ecomerce4, ecomerce5],
  },
  {
    id: '4',
    title: 'Todo-list',
    description:
      'Keep track of your tasks and stay organized with this intuitive todo-list app. Add, edit delete items and mark them as completed. With responsive user interface, this app is perfect for personal use.',
    techStack: 'React.js, CSS3',
    livePreviewLink: 'https://tourmaline-bavarois-49d2df.netlify.app',
    codeLink: 'https://github.com/lucasdef15/react_todo-list',
    coverImage: [todolistimg],
  },
  {
    id: '5',
    title: 'Rick and Morty Api',
    description:
      'Explore the world of Rick and Morty with this API that provides access to information about characters. With a simple and user-friendly interface, this API is perfect for developers and fans.',
    techStack: 'React.js, React Router, Axios',
    livePreviewLink: 'https://celebrated-figolla-13a43e.netlify.app',
    codeLink: 'https://github.com/lucasdef15/Rick_and_Morty_API_Project',
    coverImage: [rickandmortyimg],
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
