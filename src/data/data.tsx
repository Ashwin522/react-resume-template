import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
//import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ashwin Shankarnarayana | Portfolio',
  description: 'Portfolio site of Ashwin Shankarnarayana, Algorithm Developer, Software Engineer, and IoT enthusiast.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'Skills',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ashwin Shankarnarayana.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a passionate <strong className="text-stone-100">Software Engineer</strong> with a focus on AI{' '}
        <strong className="text-stone-100">
          I am a passionate and results-driven AI Developer with a focus on leveraging cutting-edge technology to create
          impactful solutions
        </strong>{' '}
        <strong className="text-stone-100"></strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My professional journey has been enriched by experiences in both AI and machine learning. At Dynos Inc., I
        contributed to the development of an innovative EdTech platform by transforming static textbook content into
        dynamic, interactive material. My work involved implementing OCR technology and using the OpenAI API to automate
        lesson plans, making educational content more engaging and accessible{' '}
        <strong className="text-stone-100"></strong> <strong className="text-stone-100"></strong> .
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://github.com/Ashwin522/Ashwin522.github.io/blob/main/Ashwin_Shankarnarayana_Resume-4.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a software engineer who specializes in algorithm development and AIyarn  projects. I have a passion for creating efficient systems that solve complex problems. 
    My background includes experience working with cutting-edge technologies like machine learning, real-time data processing, and full-stack development.`,
  aboutItems: [
    {label: 'Location', text: 'Syracuse, NY', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Full stack development, Machine Learning, Smart Systems', Icon: SparklesIcon},
    {label: 'Study', text: 'Syracuse University', Icon: AcademicCapIcon},
    {label: ' Former Employment', text: 'Dynos Inc. (May 2024 - September 2024)', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C',
        level: 8,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 6,
      },
      {
        name: 'SQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Libraries and Tools',
    skills: [
      {
        name: 'PyTorch',
        level: 8,
      },
      {
        name: 'Sklearn',
        level: 7,
      },
      {
        name: 'Pandas',
        level: 9,
      },
      {
        name: 'Numpy',
        level: 9,
      },
      {
        name: 'Git',
        level: 8,
      },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'NodeJs',
        level: 7,
      },
      {
        name: 'Django',
        level: 7,
      },
      {
        name: 'PHP',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Driver Monitoring System',
    description: 'A machine learning-based driver monitoring system for distraction detection.',
    url: 'https://github.com/Ashwin522/Driver_Monitoring',
    image: porfolioImage2,
  },
  {
    title: 'Social Networking App',
    description: 'A social networking app with features like Tinder and Facebook.',
    url: 'https://github.com/Ashwin522/THEPING.IN',
    image: porfolioImage3,
  },
  {
    title: 'Gmail Spam Detection',
    description: 'A machine learning-based spam detection system for Gmail.',
    url: 'https://github.com/Ashwin522/Gmail-Spam-Detection',
    image: porfolioImage4,
  },
  {
    title: 'Cuse Auction App',
    description: 'An auction app for users to bid on items.',
    url: 'https://github.com/Ashwin522/cusebids',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2025',
    location: 'Syracuse University',
    title: 'M.S. in Computer Engineering',
    content: <p>Learned advanced algorithms, data structures, machine learning, and software engineering practices.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - September 2024',
    location: 'Dynos Inc.',
    title: 'Software Engineer Intern',
    content: (
      <p>
        - Worked on an EdTech platform, developing interactive tools for educational content.
        <br />
        - Built an OCR-based system for automated data extraction from textbooks.
        <br />
        - Used OpenAI API to generate lesson plans and teacher notes dynamically.
        <br />
      </p>
    ),
  },
  {
    date: 'March 2023 - July 2023',
    location: 'Stellantis, India',
    title: 'Machine Learning Intern',
    content: (
      <p>
        - Developed a Driver Monitoring System with object detection to improve road safety.
        <br />
        - Trained models using NVIDIA GPUs for high accuracy.
        <br />
        - Integrated magnetometer data to reduce false alarms in the system.
        <br />
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Deep learning Techniques',
      text: 'Neural Networks, Regression Modelling, Generative AI, Forecasting',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Libraries and tools',
      text: 'Docker, Linux, AWS, Docker, Github, Jenkins',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Databases and tools',
      text: 'MongoDB, MySQL, PostgreSQL, SQLAlchemy, Cassandra, BigQuery, GORM',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Hey!',
  items: [
    {
      type: ContactType.Email,
      text: 'ashwins02102001@gmail.com',
      href: 'mailto:ashwins02102001@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Syracuse, New York',
      href: 'https://goo.gl/maps/xy6XxqgC2eD2',
    },
    {
      type: ContactType.Instagram,
      text: 'Ashwin522',
      href: 'https://github.com/Ashwin522',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Ashwin522'},

  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ash0210/'},
];
