import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelancer.com",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Feb 2024",
    points: [
      "Developed and maintained web applications using React.js, Next.js and modern frontend technologies.",
      "Collaborated with clients to deliver custom web solutions and responsive designs.",
      "Implemented pixel-perfect UIs from Figma designs with attention to detail.",
      "Delivered projects on time with clear communication throughout the development process.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Entspops",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Aug 2024",
    points: [
      "Managed multiple high-profile projects including moodrefresh.com, coveruponline.com, and passwordpact.com.",
      "Built responsive and interactive web applications with modern JavaScript frameworks.",
      "Implemented GSAP animations and Three.js for enhanced user experiences.",
      "Worked closely with design teams to bring creative visions to life.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "DevShine Developer",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2024 - Present",
    points: [
      "Developing full-stack applications using MERN and PERN stack technologies.",
      "Building cross-platform React Native mobile applications for iOS and Android.",
      "Managing cloud deployment on AWS and implementing containerization with Docker.",
      "Handling complete DevOps pipelines from development to production deployment.",
    ],
  },
];

const projects = [
  {
    name: "MoodRefresh",
    description:
      "A comprehensive mood tracking and wellness platform built with modern web technologies. Features user authentication, mood analytics, and personalized recommendations for mental health improvement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://moodrefresh.com",
  },
  {
    name: "CoverUpOnline",
    description:
      "Professional cover letter generation platform with AI-powered suggestions and customizable templates. Built with responsive design and seamless user experience for job seekers.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://coveruponline.com",
  },
  {
    name: "PasswordPact",
    description:
      "Secure password management solution with end-to-end encryption and cross-platform synchronization. Features include password generation, secure sharing, and breach monitoring.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://passwordpact.com",
  },
  {
    name: "911Vault",
    description:
      "Emergency information storage and retrieval system with secure cloud backup. Provides quick access to critical information during emergencies with offline capabilities.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://911vault.com",
  },
  {
    name: "U-Design Portfolio",
    description:
      "Modern design portfolio showcasing creative work with interactive animations and smooth transitions. Built with Three.js for immersive 3D experiences and GSAP for fluid animations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://u-design-chi.vercel.app",
  },
];

export { services, technologies, experiences, projects };
