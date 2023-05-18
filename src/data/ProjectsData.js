import ecomerceimg from '../assets/projects/e-comerce.png';
import rickandmortyimg from '../assets/projects/rickandmorty.png';
import todolistimg from '../assets/projects/todolist.png';
import multistepform from '../assets/projects/multiStepForm.png';
import gitHubusersearch from '../assets/projects/gitHubusersearch.png';
import cover from '../assets/projects/cover.jpg';

export const projectsData = [
  {
    id: '0',
    title: 'Multi-step form',
    description:
      'This is a Multi-step form built with React, React Hook Form, and Yup for validation. Additionally, I utilized Redux as a state manager and React Router for handling routes. The form allows users to progress through multiple steps while keeping track of their choices. It also provides the flexibility to navigate back and modify data if needed.',
    techStack: 'React.js, React Router, Axios, Redux',
    livePreviewLink: 'https://bucolic-sunburst-e006de.netlify.app/',
    codeLink: 'https://github.com/lucasdef15/multi-step-form',
    coverImage: multistepform,
  },
  {
    id: '1',
    title: 'Git Hub User Search',
    description:
      "In this project, I leveraged the GitHub Users API to retrieve and showcase user profile data. I utilized Axios for making the HTTP request, while constructing the user interface with a combination of Material UI and Styled Components. Additionally, I implemented custom hooks to persist the user's preferred theme color in local storage, ensuring a seamless and personalized experience.",
    techStack: 'React.js, Context API, Axios',
    livePreviewLink: 'https://github-user-search-wheat.vercel.app/',
    codeLink: 'https://github.com/lucasdef15/github-user-search',
    coverImage: gitHubusersearch,
  },
  {
    id: '2',
    title: 'E-commerce',
    description:
      'A sleek and modern e-commerce platform designed for sewing enthusiasts of all levels. Features include a shopping cart and individual product pages with detailed information, high-quality images, and customer reviews.',
    techStack: 'HTML5, CSS3, JavaScript',
    livePreviewLink: 'https://rositacosturacriativa.netlify.app',
    codeLink: 'https://github.com/lucasdef15/ecomerce-project',
    coverImage: ecomerceimg,
  },
  {
    id: '3',
    title: 'Todo-list',
    description:
      'Keep track of your tasks and stay organized with this intuitive todo-list app. Add, edit delete items and mark them as completed. With responsive user interface, this app is perfect for personal use.',
    techStack: 'React.js, CSS3',
    livePreviewLink: 'https://tourmaline-bavarois-49d2df.netlify.app',
    codeLink: 'https://github.com/lucasdef15/react_todo-list',
    coverImage: todolistimg,
  },
  {
    id: '4',
    title: 'Rick and Morty Api',
    description:
      'Explore the world of Rick and Morty with this API that provides access to information about characters. With a simple and user-friendly interface, this API is perfect for developers and fans.',
    techStack: 'React.js, React Router, Axios',
    livePreviewLink: 'https://celebrated-figolla-13a43e.netlify.app',
    codeLink: 'https://github.com/lucasdef15/Rick_and_Morty_API_Project',
    coverImage: rickandmortyimg,
  },
  {
    id: '5',
    title: 'Upcoming',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: 'React.js, React Router, Axios',
    livePreviewLink: '#',
    codeLink: '#',
    coverImage: cover,
  },
];
