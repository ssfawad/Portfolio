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
    title: "Tic-Tac-Toe - Containerized  & CICD",
    desc: "A Tic-Tac-Toe game built with Node.js and WebSockets, containerized using Docker, and deployed to Azure Web Apps using GitHub Actions.",
    subdesc:
      "Features local play, online multiplayer, and play against bots. Early development with plans to revamp UI.",
    href: "https://syed-docker-webapp-gvfzd2b9cugagyd9.canadacentral-01.azurewebsites.net/",
    source: "https://github.com/ssfawad/MyWebApp",
    logo: "projects/webapp.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    tags: [
      {
        id: 1,
        name: "Java Script",
        path: "icons/javascript.svg",
      },
      {
        id: 2,
        name: "node.js",
        path: "icons/nodejs.png",
      },
      {
        id: 3,
        name: "github",
        path: "icons/git.png",
      },
      {
        id: 4,
        name: "git",
        path: "icons/gitlanguage.png",
      },
      {
        id: 5,
        name: "docker",
        path: "icons/docker.png",
      },
      {
        id: 6,
        name: "azure",
        path: "icons/azure.png",
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
      {
        id: 5,
        name: "Postman",
        path: "icons/postman.png",
      },

    ],
  },
  {
    title: "Azure Image Processing Pipeline",
    desc: "Built a cloud-native image processing pipeline combining Azure Functions, Azure Kubernetes Service (AKS), and KEDA event-driven scaling.",
    subdesc:
      "The system automatically processes uploaded images from Azure Blob Storage, resizes them, and saves them back efficiently — all orchestrated via Docker, GitHub Actions CI/CD, and Service Bus messaging.",
     href: "https://github.com/ssfawad/Image-Processing-Pipeline",
    source: "https://github.com/ssfawad/Image-Processing-Pipeline",
    logo: "projects/Azpipeline.png",
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
        name: "azure",
        path: "icons/azure.png",
      },
      {
        id: 2,
        name: "github",
        path: "icons/git.png",
      },
      {
        id: 3,
        name: "git",
        path: "icons/gitlanguage.png",
      },
      {
        id: 4,
        name: "docker",
        path: "icons/docker.png",
      },
      {
        id: 5,
        name: "kubernetes",
        path: "icons/kube.png",
      },
      {
        id: 6,
        name: "python",
        path: "icons/python.png",
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
