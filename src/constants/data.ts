export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 3,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "ThreeRun - 3D Obstacle Course Game",
    desc: "A 3D obstacle course game built with React Three Fiber, featuring a third-person character controller with movement and animations.",
    subdesc:
      "Currently in early development, with plans for level completion, multiplayer, and collectibles.",
    href: "https://a-coderr.github.io/obstacle_course_r3f/",
    source: "https://github.com/A-coderr/obstacle_course_r3f",
    logo: "projects/ThreeRun_Main_Screen.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "icons/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "icons/tailwindcss-icon.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "icons/typescript-icon.svg",
      },
      {
        id: 4,
        name: "Java Script",
        path: "icons/javascript.svg",
      },
      {
        id: 5,
        name: "Three.js",
        path: "icons/threejs.svg",
      },
      {
        id: 6,
        name: "HTML",
        path: "icons/html-5.svg",
      },
      {
        id: 7,
        name: "Redux",
        path: "icons/redux.svg",
      },
    ],
  },
  {
    title: "Syed Fawad - Portfolio Website",
    desc: "My Portfolio Website, a showcase of my skills, projects, and experience as a cloud engineer.",
    subdesc:
      "Built with modern web technologies, this portfolio highlights interactive 3D elements, smooth animations, and a responsive design for an engaging user experience.",
    href: "ssfawad.github.io",
    source: "https://github.com/ssfawad/ssfawad.github.io",
    logo: "projects/Portfolio_Main.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "icons/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "icons/tailwindcss-icon.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "icons/typescript-icon.svg",
      },
      {
        id: 4,
        name: "Java Script",
        path: "icons/javascript.svg",
      },
      {
        id: 5,
        name: "Three.js",
        path: "icons/threejs.svg",
      },
      {
        id: 6,
        name: "HTML",
        path: "icons/html-5.svg",
      },
      {
        id: 7,
        name: "CSS",
        path: "icons/css-3.svg",
      },
    ],
  },
  {
    title: "AI Text Summarizer App",
    desc: "Built and deployed a full-stack app on Replit using HTML/CSS/JavaScript/Node.js as part of Postman Academy.",
    subdesc:
      "Utilizes real-world APIs including the Hugging Face Inference API and Postman for integration.",
     href: "https://github.com/genie360s/postman-course-ai-text-summarizer",
    source: "https://github.com/genie360s/postman-course-ai-text-summarizer",
    logo: "projects/Textapp.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "icons/html-5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "icons/css-3.svg",
      },
      {
        id: 3,
        name: "Java Script",
        path: "icons/javascript.svg",
      },
      {
        id: 4,
        name: "NodeJS",
        path: "icons/nodejs.png",
      },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    company: "Amazon Web Services",
    position: "Cloud Support Engineer",
    duration: "January 2022 – September 2023",
    icon: "awslogo.png",
    duties: [
      "Diagnosed & resolved 100+ critical production incidents for clients across diverse industries",
      "Cut costs by 70% for Fortune 500 customers via ETL pipeline & SQL tuning",
      "Mentored 4 new hires, authored KB articles & delivered team workshops",
      "Consistently surpassed SLA targets and maintained 95%+ CSAT",
    ],
  },

  {
    id: 2,
    company: "Citi",
    position: "Application Support Engineer",
    duration: "August 2021 – December 2021",
    icon: "citilogo.png",
    duties: [
      "Monitored batch jobs & resolved failures to meet SLA commitments",
      "Performed root‑cause analysis on Linux servers & Oracle DB incidents",
      "Authored & updated technical documentation and SOPs",
    ],
  },

  {
    id: 3,
    company: "Dentsply Sirona",
    position: "Unit Lead",
    duration: "August 2018 – May 2021",
    icon: "dentsply.png",
    duties: [
      "Trained & managed 30+ technicians, while also driving cross‑department collaboration",
      "Redesigned production workflow to boost daily throughput by 200%",
      "Maintained and troubleshot lasers & 3D printers, maintaining 90%+ uptime",
    ],
  },
];

export const socialLinks = [
  { url: "https://github.com/ssfawad" },
  { url: "https://www.linkedin.com/in/syed-fawad/" },
];

export const skills = [
  "ReactJS",
  "Python",
  "Salesforce",
  "HTML5",
  "CSS3",
  "Node.js",
  "AWS",
  "Power BI",
  "VS Code",
  "Azure",
  "Bash",
  "MySQL",
  "Tableau",
  "Spark",
  "GitHub",
  "Git",
  "Apache Airflow",
  "TailwindCSS",
  "SQL",
  "Terraform",
  "Kubernetes",
  "Docker",
  "Postman",
  "MS Office Suite",
  "Jenkins",
  "Jira",
  "Slack"
];
