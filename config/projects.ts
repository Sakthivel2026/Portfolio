import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

export interface KeyFeatureGroup {
  title: string;
  bullets: string[];
}

export interface TechCategory {
  categoryName: string;
  items: string[];
}

export interface FlowItem {
  title: string;
  steps: string[];
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets?: string[];
  keyFeatures?: KeyFeatureGroup[];
  technicalArchitecture?: TechCategory[];
  architectureImg?: string;
  architectureFlow?: FlowItem[];
  developmentHighlights?: string[];
  outcomeParagraphs?: string[];
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
  demoVideo?: string;
  demoVideoPoster?: string;
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
      "express.js",
      "Vercel",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/portfolio/new-hero-preview.png",
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
    companyName: "QuickCart E-commerce Website",
    type: "Personal",
    category: ["Full Stack", "E-Commerce", "Web Application"],
    shortDescription:
      "QuickCart is a production-inspired full-stack eCommerce web application built with Next.js 16, React 19, MongoDB, Mongoose, Clerk, Cloudinary, and Inngest.",
    techStack: [
      "Next.js",
      "React",
      "MongoDB",
      "Mongoose",
      "Clerk",
      "Cloudinary",
      "Inngest",
      "Typescript",
      "Tailwind CSS",
    ],
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/projects/Quickcart/quickcart.png",
    githubLink: "https://github.com/Sakthivel2026/QuickCart",
    websiteLink: "https://github.com/Sakthivel2026/QuickCart",
    demoVideo:
      "https://res.cloudinary.com/dbx2ewipf/video/upload/v1788064876/quickcart_video_-_Made_with_Clipchamp.mp4",
    demoVideoPoster: "/projects/Quickcart/quickcart-video-thumbnail.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "QuickCart is a production-inspired full-stack eCommerce web application designed to provide a complete online shopping experience for customers while giving sellers dedicated tools to manage products and orders. The application is built with Next.js 16, React 19, MongoDB, Mongoose, Clerk, Cloudinary, and Inngest, following a modern App Router and serverless architecture.",
        "The platform supports the complete eCommerce lifecycle — from product discovery and authentication to cart management, delivery addresses, checkout, order tracking, and seller-side inventory and order management.",
      ],
      keyFeatures: [
        {
          title: "Customer Shopping Experience",
          bullets: [
            "Browse products through a responsive product catalogue.",
            "View detailed product information, images, pricing, offers, ratings, and reviews.",
            "Add and remove products from the shopping cart.",
            "Adjust product quantities with automatic cart synchronization.",
            "Manage delivery addresses during the checkout process.",
            "Place orders and view order confirmation details.",
            "Track previously placed orders from the customer dashboard.",
            "Responsive interface optimized for desktop and mobile devices.",
          ],
        },
        {
          title: "Authentication & Role-Based Access",
          bullets: [
            "Integrated Clerk Authentication for secure user sign-in and account management.",
            "Implemented role-based access control for Customers and Sellers.",
            "Seller permissions are verified server-side using Clerk public metadata.",
            "Protected seller routes and API endpoints to prevent unauthorized access.",
            "Automatically synchronizes Clerk users with the application's MongoDB user collection.",
          ],
        },
        {
          title: "Seller Dashboard",
          bullets: [
            "Dedicated seller dashboard with protected routes.",
            "Sellers can add new products with name, description, category, pricing, offers, and images.",
            "Upload and manage product images using Cloudinary.",
            "View and manage seller-owned product inventory.",
            "Access customer orders containing their products.",
            "Separate seller interface with navigation, sidebar, and management pages.",
          ],
        },
        {
          title: "Product & Review System",
          bullets: [
            "Product catalogue with category and product information.",
            "Product detail pages with multiple product images.",
            "Customer rating and review functionality.",
            "Calculates and maintains average product ratings and rating counts.",
            "Stores seller ownership information for product management.",
          ],
        },
        {
          title: "Cart & Order Management",
          bullets: [
            "Global cart state managed using React Context.",
            "Cart data is synchronized with MongoDB for persistence.",
            "Server-side APIs handle cart updates and retrieval.",
            "Checkout flow supports delivery address selection and order creation.",
            "Orders store products, quantities, total amount, delivery information, status, and timestamp.",
          ],
        },
        {
          title: "Event-Driven Background Processing",
          bullets: [
            "Integrated Inngest for asynchronous background processing.",
            "Order creation triggers an event-based workflow for database processing.",
            "Clerk user creation, update, and deletion events synchronize users with MongoDB.",
            "Batch order processing improves the separation between request handling and background database operations.",
          ],
        },
        {
          title: "Media & Data Management",
          bullets: [
            "MongoDB Atlas + Mongoose used for persistent application data.",
            "Separate schemas for users, products, orders, and addresses.",
            "Cloudinary handles cloud-based product image storage.",
            "Serverless API routes provide structured backend operations for products, users, carts, and orders.",
          ],
        },
      ],
      technicalArchitecture: [
        {
          categoryName: "Frontend",
          items: [
            "Next.js 16 App Router",
            "React 19",
            "Tailwind CSS",
            "React Context API",
            "Reusable Component Architecture",
          ],
        },
        {
          categoryName: "Backend",
          items: [
            "Next.js Serverless API Routes",
            "Node.js",
            "Mongoose",
            "MongoDB Atlas",
            "Clerk Authentication",
            "Inngest Event-Driven Processing",
          ],
        },
        {
          categoryName: "Third-Party Services",
          items: [
            "Clerk — Authentication & User Management",
            "Cloudinary — Product Image Storage",
            "Inngest — Background Jobs & Event Processing",
            "MongoDB Atlas — Cloud Database",
          ],
        },
      ],
      architectureImg: "/projects/Quickcart/quickcart-architecture.png",
      architectureFlow: [
        {
          title: "Customer Flow",
          steps: [
            "Authentication",
            "Browse Products",
            "Product Details",
            "Add to Cart",
            "Manage Address",
            "Checkout",
            "Place Order",
            "Track Order",
          ],
        },
        {
          title: "Seller Flow",
          steps: [
            "Authentication",
            "Become Seller",
            "Seller Dashboard",
            "Add Products",
            "Cloudinary Upload",
            "Product Inventory",
            "Manage Orders",
          ],
        },
        {
          title: "Data & Event Flow",
          steps: [
            "Next.js API",
            "MongoDB / Mongoose",
            "Clerk Events → Inngest",
            "MongoDB User Sync",
            "Order Event → Inngest Background Processing",
          ],
        },
      ],
      developmentHighlights: [
        "Designed a modular Next.js App Router architecture separating pages, components, API routes, models, context, and server utilities.",
        "Created reusable React components for products, navigation, banners, order summaries, loading states, and seller dashboard interfaces.",
        "Implemented server-side authorization for seller-specific functionality.",
        "Designed MongoDB schemas to represent users, products, reviews, addresses, carts, and orders.",
        "Integrated multiple external services into a single full-stack application.",
        "Used event-driven background processing to handle asynchronous operations.",
        "Built responsive interfaces using Tailwind CSS with reusable UI patterns.",
        "Structured the application to keep frontend state management, backend APIs, database models, and external services clearly separated.",
      ],
      outcomeParagraphs: [
        "QuickCart demonstrates practical experience in full-stack application development, authentication, role-based authorization, REST-style API design, database modeling, cloud media management, event-driven architecture, state management, and responsive UI development.",
        "The project goes beyond a basic eCommerce UI by implementing both customer-facing shopping functionality and seller-facing business workflows, providing experience across the complete modern web application stack.",
      ],
    },
  },
  {
    id: "terminal-chat",
    companyName: "Real-Time Terminal Chat",
    type: "Personal",
    category: ["Node.js", "TCP Networking"],
    shortDescription:
      "Real-time terminal chat application built with Node.js TCP sockets, featuring multi-client communication, user authentication, private messaging, and SQLite-based credential management.",
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
    companyLogoImg: "/projects/Terminal_chat/terminal-chat-thumbnail.png",
    demoVideo:
      "https://res.cloudinary.com/dbx2ewipf/video/upload/v1788066182/terminal_chat.mp4",
    demoVideoPoster: "/projects/Terminal_chat/terminal-chat-video-thumbnail.png",
    githubLink: "https://github.com/Sakthivel2026/terminal-chat",
    websiteLink: "https://github.com/Sakthivel2026/terminal-chat",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Terminal Chat is a command-line based real-time messaging application built with Node.js TCP sockets. The project was developed to understand how client-server communication works at the network level without relying on external web frameworks or real-time communication libraries.",
        "The application allows multiple users to connect to a central TCP server through a terminal interface, authenticate themselves, and communicate with other connected users in real time. It demonstrates core backend and networking concepts such as TCP socket programming, persistent client connections, authentication workflows, multi-client communication, database integration, and server-side connection management.",
      ],
      keyFeatures: [
        {
          title: "How the Application Works",
          bullets: [
            "Follows a client-server architecture: A Node.js TCP server listens for incoming connections on a designated port using Node.js's built-in net module.",
            "Authentication Session Flow: Connection → Menu → Register/Login → Authentication → Chat Room.",
            "Real-Time Message Distribution: Transmitted through TCP sockets to the server and distributed instantly to appropriate connected users.",
            "Multi-Client Chat: Supports multiple clients simultaneously in shared public conversations.",
          ],
        },
        {
          title: "Authentication System",
          bullets: [
            "JSON-based authentication — Stores test user credentials in users.json for simple registration and login workflows.",
            "SQLite + Bcrypt authentication — Stores user details (username, email, hashed password) in SQLite and uses bcrypt password comparison during login verification.",
          ],
        },
        {
          title: "Real-Time Communication & Commands",
          bullets: [
            "Public Broadcast: Server maintains connected client sockets and broadcasts public messages to all online users.",
            "Private Messaging: Direct user-to-user messaging via /pm username message.",
            "Online User Tracking: View active connected users with the users command.",
            "Graceful Exit: Safely close TCP connections using /exit.",
          ],
        },
        {
          title: "Modular Project Structure",
          bullets: [
            "server.js — Creates the TCP server, manages client connections, authentication states, chat sessions, and message broadcasting.",
            "client.js — Terminal interface, TCP socket connection, server message listener, and user input stream handling.",
            "auth.js — User registration and login verification using SQLite and bcrypt.",
            "database.js — Initializes SQLite database and users table schema.",
            "users.json & users.db — Credentials storage backends for testing and persistent SQLite data.",
          ],
        },
        {
          title: "Key Features Summary",
          bullets: [
            "Real-time communication using Node.js TCP sockets",
            "Multiple simultaneous client connections",
            "User registration and login",
            "Public broadcast messaging",
            "Private messaging with /pm",
            "Online user management with users",
            "Graceful client disconnection with /exit",
            "SQLite database integration",
            "Password hashing and verification using bcrypt",
            "Modular client, server, authentication, and database architecture",
            "Terminal-based user interface without a frontend framework",
          ],
        },
      ],
      technicalArchitecture: [
        {
          categoryName: "Core Networking",
          items: [
            "Node.js net Module",
            "TCP Sockets",
            "Readline Module",
            "Persistent Connections",
          ],
        },
        {
          categoryName: "Authentication & DB",
          items: [
            "SQLite3 Database",
            "Bcrypt Password Hashing",
            "JSON File Authentication",
            "Session State Management",
          ],
        },
        {
          categoryName: "Architecture",
          items: [
            "Client-Server Architecture",
            "Modular File Structure",
            "Command Parser (/pm, users, /exit)",
            "Event-Driven Sockets",
          ],
        },
      ],
      architectureImg: "/projects/Terminal_chat/terminal-chat-architecture.png",
      architectureFlow: [
        {
          title: "Authentication Flow",
          steps: [
            "Connection",
            "Menu",
            "Register/Login",
            "Authentication",
            "Chat Room",
          ],
        },
        {
          title: "Communication Flow",
          steps: [
            "Terminal Client",
            "TCP Socket",
            "Node.js Server",
            "Authentication / Chat Logic",
            "Connected Clients",
          ],
        },
      ],
      developmentHighlights: [
        "Built a network-level messaging application entirely with Node.js TCP sockets and built-in net and readline modules.",
        "Engineered dual authentication workflows using file-based JSON for testing and SQLite with bcrypt for production-like security.",
        "Implemented real-time message broadcasting and direct unicast messaging via custom terminal commands (/pm).",
        "Managed socket lifecycle, client disconnection, and connection error handling gracefully.",
      ],
      outcomeParagraphs: [
        "This project provided practical experience with network programming and backend architecture. It helped demonstrate how TCP connections are established and maintained, how a server manages multiple clients, how data travels between clients and a server, and how authentication can be integrated with persistent storage.",
        "It also provided hands-on experience designing a simple state-based authentication workflow, managing socket events, handling connection errors, broadcasting messages, and separating application responsibilities into reusable modules.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
