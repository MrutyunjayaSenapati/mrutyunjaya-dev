export const personal = {
  name: "Mrutyunjaya Senapati",
  title: "Mobile & Full-Stack Software Engineer",
  tagline: "Building high-performance Mobile Applications & Full-Stack Systems",
  email: "mrutyunjayasenapati007@gmail.com",
  github: "https://github.com/MrutyunjayaSenapati",
  linkedin: "https://www.linkedin.com/in/mrutyunjaya-senapati/",
  resume: "https://drive.google.com/file/d/1i5Q-Y2HXqSUyHzNvLHSX_bpAMV2BeRfn/view?usp=sharing",
  location: "India",
  status: "Available for Engineering Roles",
} as const;

export const techPipeline = [
  { layer: "Mobile App", tech: "React Native / Expo", iconKey: "Smartphone", color: "from-indigo-500 to-indigo-400" },
  { layer: "Web App & DB", tech: "PostgreSQL / MERN", iconKey: "Globe", color: "from-purple-500 to-purple-400" },
  { layer: "Python & AI", tech: "FastAPI / PyTorch", iconKey: "Code2", color: "from-cyan-500 to-cyan-400" },
  { layer: "Cloud Infra", tech: "AWS / Docker", iconKey: "Cloud", color: "from-amber-500 to-amber-400" },
] as const;

export const techStack = [
  "React Native",
  "Expo",
  "PostgreSQL",
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "Python",
  "FastAPI",
  "AWS",
  "Docker",
  "TypeScript",
] as const;

export const skills = [
  {
    category: "Mobile App Development",
    iconKey: "Smartphone",
    badge: "MOBILE ENGINE",
    items: [
      "React Native",
      "Expo",
      "Android Studio",
      "SQLite (Local DB)",
      "Zustand State",
      "Push Notifications",
      "Firebase Analytics",
      "Crashlytics",
      "Native Modules",
    ],
    description: "Cross-platform mobile engineering with native performance, 60 FPS UI, and offline sync.",
  },
  {
    category: "Web App & Databases",
    iconKey: "Globe",
    badge: "FULL-STACK",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Turborepo",
      "REST APIs",
    ],
    description: "Multi-tenant web dashboards, merchant portals, and relational schema architecture.",
  },
  {
    category: "Python Stack & AI",
    iconKey: "Code2",
    badge: "AI & SERVICES",
    items: [
      "Python",
      "FastAPI",
      "PyTorch",
      "Gemini API (RAG)",
      "Pydantic Validation",
      "REST Microservices",
      "Async Workers",
    ],
    description: "High-speed Python microservices, vision inference, and LLM workflow automation.",
  },
  {
    category: "Cloud & DevOps",
    iconKey: "Cloud",
    badge: "INFRASTRUCTURE",
    items: [
      "AWS (S3, EC2, Lambda)",
      "Docker",
      "GitHub Actions CI/CD",
      "Linux Administration",
      "Nginx Proxy",
      "Supabase",
      "Firebase",
      "Git & Postman",
    ],
    description: "Containerization, cloud infrastructure deployment, and automated release pipelines.",
  },
] as const;

export const experience = [
  {
    year: "Jul 2025 — Present",
    role: "Software Engineer",
    company: "Strivesteam",
    description: "Engineering production mobile applications and full-stack systems with React Native, Node.js, Python, and AWS.",
    tags: ["React Native", "Expo", "Node.js", "Python", "AWS", "TypeScript"],
  },
  {
    year: "May 2025 — Jul 2025",
    role: "Developer",
    company: "Ciya Technology",
    description: "Focused on React Native mobile UI components, backend REST API integrations, and feature delivery.",
    tags: ["React Native", "Android Studio", "Node.js", "Firebase"],
  },
] as const;

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    year: "2022 - 2024",
    institution: "College of IT and Management Education (CIME), Bhubaneswar",
  },
] as const;

export interface Project {
  id: string;
  title: string;
  tagline: string;
  featured: boolean;
  category: "Mobile Apps & AI" | "Full-Stack Monorepos" | "MERN Stack";
  status: "Live Project" | "Complete" | "In Development";
  problem: string;
  solution: string;
  architecture: string;
  portals?: string[];
  database: string;
  technologies: string[];
  challenges: string[];
  github: string;
  demo?: string | null;
}

export const projects: Project[] = [
  {
    id: "plant-doctor",
    title: "PlantDoctor AI",
    tagline: "AI Agricultural & Leaf Disease Diagnosis Mobile App",
    featured: true,
    category: "Mobile Apps & AI",
    status: "Live Project",
    database: "Supabase (PostgreSQL)",
    problem: "Farmers lack instant tools for diagnosing plant diseases.",
    solution: "React Native camera app integrated with FastAPI Python microservices and PyTorch/Gemini LLM for instant diagnosis.",
    architecture: "React Native App → FastAPI Microservice → PyTorch / Gemini RAG → Supabase",
    technologies: ["React Native", "Expo", "Python", "FastAPI", "PyTorch", "Supabase", "Gemini API"],
    challenges: [
      "Low-latency mobile image capture & inference pipeline",
      "Multi-service ML containerization with Docker",
      "Offline diagnosis caching for weak connectivity",
    ],
    github: "https://github.com/MrutyunjayaSenapati/PlantDoctor-AI",
    demo: null,
  },
  {
    id: "foodygo",
    title: "FoodyGo",
    tagline: "Multi-Portal Food Delivery Monorepo Ecosystem",
    featured: true,
    category: "Full-Stack Monorepos",
    status: "Complete",
    database: "PostgreSQL",
    problem: "Multi-party food ordering requires synchronized real-time state across 4 distinct portals.",
    solution: "Unified Turborepo monorepo architecture powering Customer & Delivery Mobile Apps, Admin Dashboard, and Merchant Web Portal.",
    portals: [
      "Customer Mobile App (React Native - Ordering & Tracking)",
      "Delivery Partner Mobile App (React Native - Driver Dispatch)",
      "Admin Web Dashboard (Next.js - Analytics & Control)",
      "Merchant Web Portal (Next.js - Menu & Order Management)",
    ],
    architecture: "Customer & Driver Apps + Admin & Merchant Web → Express API → PostgreSQL",
    technologies: ["React Native", "Expo", "Next.js", "Node.js", "Express", "PostgreSQL", "Turborepo"],
    challenges: [
      "Monorepo type sharing across web and mobile apps",
      "Relational PostgreSQL schema design for multi-tenant ordering",
      "Real-time driver dispatch state management",
    ],
    github: "https://github.com/MrutyunjayaSenapati/foodygo",
    demo: null,
  },
  {
    id: "chatapp",
    title: "ChatApp",
    tagline: "Real-Time WebSocket Messaging Application",
    featured: false,
    category: "MERN Stack",
    status: "Live Project",
    database: "MongoDB",
    problem: "Real-time communication requires low-latency WebSockets and secure auth.",
    solution: "Full-stack messaging application with JWT security, real-time Socket.io channels, and online status indicators.",
    architecture: "React Frontend → Express API → Socket.io Engine → MongoDB",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    challenges: [
      "Low-latency WebSocket connection management",
      "Session state handling & JWT validation",
    ],
    github: "https://github.com/MrutyunjayaSenapati/ChatApp",
    demo: "https://chatapp-3o8b.onrender.com/",
  },
];

export const cloudDevOpsSteps = [
  {
    step: "Mobile Architecture",
    iconKey: "Smartphone",
    title: "Cross-Platform Mobile Clients",
    description: "Native-feel iOS & Android apps with offline resilience and fluid UI",
    technologies: ["React Native", "Expo", "Android Studio", "SQLite", "Zustand"],
  },
  {
    step: "Full-Stack & Relational DBs",
    iconKey: "Globe",
    title: "Full-Stack Web & Admin Portals",
    description: "Multi-portal web applications and relational database schemas",
    technologies: ["PostgreSQL", "Express", "React", "Node.js", "Next.js"],
  },
  {
    step: "Python & AI Microservices",
    iconKey: "Code2",
    title: "AI Inference & Python Services",
    description: "Fast REST microservices, computer vision pipelines, and LLM RAG",
    technologies: ["Python", "FastAPI", "PyTorch", "Gemini API", "Pydantic"],
  },
  {
    step: "Cloud & DevOps Infrastructure",
    iconKey: "Cloud",
    title: "Containerization & Cloud Deployments",
    description: "Cloud services, Docker containers, and CI/CD automated deployment pipelines",
    technologies: ["AWS (EC2, S3)", "Docker", "GitHub Actions", "Linux", "Nginx"],
  },
] as const;
