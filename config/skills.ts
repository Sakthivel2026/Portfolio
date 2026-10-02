import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Java",
    description:
      "Build robust and scalable applications using object-oriented programming and modern Java development practices.",
    rating: 5,
    icon: Icons.java,
  },
  {
    name: "Flutter",
    description:
      "Create cross-platform mobile applications with responsive interfaces and reusable Flutter widgets.",
    rating: 5,
    icon: Icons.flutter,
  },
  {
    name: "PostgreSQL",
    description:
      "Design, query, and manage reliable relational databases with powerful SQL and PostgreSQL features.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "Docker",
    description:
      "Containerize applications and services for consistent development, deployment, and scalable environments.",
    rating: 5,
    icon: Icons.docker,
  },
  {
    name: "JavaScript",
    description:
      "Build interactive and dynamic web applications using modern JavaScript, asynchronous programming, and reusable components.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "MySQL",
    description:
      "Design and manage relational databases using SQL for reliable data storage, querying, and application development.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "HTML5",
    description:
      "Build semantic and accessible web page structures using modern HTML5 elements and standards.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS",
    description:
      "Create responsive and visually engaging interfaces using modern CSS layouts, styling, animations, and responsive design.",
    rating: 5,
    icon: Icons.css3,
  },
  {
    name: "Tailwind CSS",
    description:
      "Build modern and responsive user interfaces efficiently using utility-first CSS classes and reusable design patterns.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
];

export const skills = skillsUnsorted;

export const featuredSkills = skills;
