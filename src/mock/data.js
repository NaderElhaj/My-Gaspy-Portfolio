import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nader',
  subtitle: 'Js Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'The name’s NADER ELHAJ. I am a tireless seeker of knowledge',
  paragraphTwo: 'I am A Web Designer /Developer Seeking New Experiences ',
  paragraphThree: 'I am Familiar With Javascript/HTML/CSS/PHP/SQL/MONGODB/PHOTOSHOP',
  resume: 'https://drive.google.com/file/d/1mS0fRFOezkEIJViZbKZl419kjZFktMBS/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.PNG',
    title: 'Guest Managment Webapp',
    info: 'My First Reactjs App',
    info2: 'Webapp that Manage,Add,Modify,Delete,Count Invitees Built With Reactjs',
    url: 'https://60389adf31fa2475427d405f--inspiring-haibt-533c3e.netlify.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.PNG',
    title: 'Travel Agency Website',
    info: 'Reactjs Project',
    info2: 'Website That Has Cool Designed And Filtered Destinations And Vacation Offers',
    url: 'https://gallant-hermann-1fa9de.netlify.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Hire Me',
  email: 'naderelhaj3@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nader-elhaj-48b253156/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/NaderElhaj',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
