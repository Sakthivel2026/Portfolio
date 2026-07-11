import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio-template",
    companyName: "Portfolio Website (130+ GitHub stars)",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "Frontend"],
    shortDescription:
      "Modern full-stack portfolio showcasing projects ranging from real-time networking applications to eCommerce platforms and enterprise-style systems.",
    websiteLink: "https://nbarkiya.xyz",
    githubLink: "https://github.com/sakthivel/minimal-next-portfolio",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Typescript",
      "Tailwind CSS",
      "Express.js",
      "Vercel",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/portfolio/logo-v2.png",
    pagesInfoArr: [
      {
        title: "Landing & Home",
        description:
          "A clean introduction highlighting my background, technical skills, featured projects, and professional experience.",
        imgArr: [],
      },
      {
        title: "Projects",
        description:
          "Explore real-world applications including an eCommerce platform, terminal-based chat application, and audit logging system demonstrating both frontend and backend expertise.",
        imgArr: [],
      },
      {
        title: "Skills",
        description:
          "A comprehensive overview of the technologies, frameworks, databases, and development tools I use to build modern software solutions.",
        imgArr: [],
      },
      {
        title: "Experience & Education",
        description:
          "Academic background, certifications, and technical learning journey that support my growth as a Full Stack Developer.",
        imgArr: [],
      },
      {
        title: "Contact",
        description:
          "Connect with me through email, GitHub, or LinkedIn for collaboration, internship, or full-time software engineering opportunities.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I build modern full-stack web applications with a strong focus on performance, scalability, and clean user experiences. My work combines responsive frontend development with secure backend systems, REST APIs, authentication, and database design.",
        "This portfolio showcases projects ranging from real-time networking applications to eCommerce platforms and enterprise-style systems. I enjoy solving practical problems, learning new technologies, and building software that delivers real value.",
      ],
      bullets: [
        "Developed full-stack applications using Next.js, React, Node.js, Express.js, and MongoDB.",
        "Built secure authentication systems using JWT and bcrypt.",
        "Created scalable REST APIs and integrated database-driven features.",
        "Experienced with deployment using Vercel and Render.",
        "Passionate about AI-powered applications and modern software engineering.",
      ],
    },
  },
  {
    id: "convot",
    companyName: "QuickCart",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "A production-inspired full-stack eCommerce platform built using Next.js 16, React, and MongoDB with secure authentication, real-time cart sync, and order processing.",
    techStack: ["Next.js", "React", "MongoDB", "Typescript", "Tailwind CSS"],
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/projects/convot/quickcart.png",
    githubLink: "https://github.com/Sakthivel2026/QuickCart",
    websiteLink: "https://github.com/Sakthivel2026/QuickCart",
    pagesInfoArr: [
      {
        title: "Shopping Experience",
        description:
          "Seamless shopping workflow including products, cart, checkout, addresses, and orders with real-time synchronization.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "QuickCart is a production-inspired full-stack eCommerce platform built using Next.js 16, React, and MongoDB. The application provides a seamless shopping experience with secure authentication, real-time cart synchronization, product management, cloud-based image storage, and order processing.",
        "It demonstrates modern web development practices through scalable architecture, reusable components, and optimized performance.",
      ],
      bullets: [
        "Developed a scalable eCommerce platform using the Next.js App Router and React.",
        "Implemented secure authentication and role-based access with Clerk.",
        "Built complete shopping workflows including products, cart, checkout, addresses, and orders.",
        "Integrated MongoDB, Cloudinary, and Inngest for efficient data storage, media management, and background processing.",
        "Designed a responsive and reusable UI using Tailwind CSS for an optimized user experience.",
      ],
    },
  },
  {
    id: "terminal-chat",
    companyName: "Real-Time Terminal Chat",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "Terminal Chat is a command-line based real-time messaging application built with Node.js using TCP sockets. The project demonstrates client-server communication, user authentication, and real-time messaging without relying on any external frameworks.",
    techStack: [
      "Node.js",
      "Javascript",
      "TCP Sockets",
      "SQLite",
      "bcrypt",
      "JSON",
      "Readline",
    ],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/niya/terminal-chat-thumbnail.png",
    githubLink: "https://github.com/Sakthivel2026/terminal-chat",
    websiteLink: "https://github.com/Sakthivel2026/terminal-chat",
    pagesInfoArr: [
      {
        title: "Terminal Chat Room",
        description:
          "A command-line based interface for real-time client-server communication.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Terminal Chat is a command-line based real-time messaging application built with Node.js using TCP sockets. The project demonstrates client-server communication, user authentication, and real-time messaging without relying on any external frameworks.",
        "The application features user registration, login, public chat, private messaging, and online user management through a lightweight terminal interface. It also includes a modular authentication system using SQLite and bcrypt to demonstrate secure credential management.",
        "Designed as a networking and backend learning project, it showcases socket programming, authentication workflows, database integration, and multi-client communication.",
      ],
      bullets: [
        "Built a real-time terminal chat application using Node.js TCP sockets.",
        "Implemented user registration and login functionality.",
        "Supported multiple clients connected simultaneously.",
        "Added private messaging using /pm username message.",
        "Displayed active users with the users command.",
        "Developed modular authentication using SQLite and bcrypt.",
        "Organized the project using reusable server, client, and authentication modules.",
        "Demonstrated client-server architecture and real-time communication.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
