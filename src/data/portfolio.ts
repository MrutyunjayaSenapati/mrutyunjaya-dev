export const personal = {
  name: "Mrutyunjaya Senapati",
  title: "Software Engineer",
  email: "mrutyunjayasenapati007@gmail.com",
  github: "https://github.com/MrutyunjayaSenapati",
  linkedin: "https://www.linkedin.com/in/mrutyunjaya-senapati/",
  resume: "https://drive.google.com/file/d/1i5Q-Y2HXqSUyHzNvLHSX_bpAMV2BeRfn/view?usp=sharing",
  location: "India",
} as const;

export const techPipeline = [
  { layer: "Mobile App", tech: "React Native", icon: "📱", color: "from-indigo-500 to-indigo-400" },
  { layer: "Web UI", tech: "Next.js", icon: "🌐", color: "from-purple-500 to-purple-400" },
  { layer: "Backend API", tech: "Node.js", icon: "⚙️", color: "from-cyan-500 to-cyan-400" },
  { layer: "Cloud Infra", tech: "AWS", icon: "☁️", color: "from-amber-500 to-amber-400" },
] as const;

export const techStack = [
  "React Native",
  "Next.js",
  "Node.js",
  "AWS",
  "Docker",
  "TypeScript",
] as const;

export const skills = [
  {
    category: "Mobile",
    icon: "📱",
    items: ["React Native", "Android", "Android Studio", "Push Notifications", "Firebase", "Analytics", "Crashlytics", "Mobile Architecture"],
    description: "Cross-platform mobile applications with native performance",
  },
  {
    category: "Frontend",
    icon: "⚡",
    items: ["React", "Next.js", "TypeScript"],
    description: "Modern web applications with type-safe architecture",
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express", "REST APIs", "Authentication"],
    description: "Scalable APIs with robust security and data flow",
  },
  {
    category: "Cloud",
    icon: "☁️",
    items: ["AWS", "Docker", "CI/CD", "Linux", "Firebase"],
    description: "Infrastructure automation and cloud-native deployments",
  },
] as const;

export const experience = [
  {
    year: "Jul 2025 — Present",
    role: "Software Engineer",
    company: "Strivesteam",
    description: "Building production-grade mobile and full-stack applications. Architecting cloud infrastructure and implementing DevOps best practices. Working across React Native, Node.js, and cloud services.",
    tags: ["React Native", "Node.js", "AWS", "TypeScript", "Firebase", "Crashlytics"],
  },
  {
    year: "May 2025 — Jun 2025",
    role: "Developer",
    company: "Ciya Technology",
    description: "Short-term engagement focused on mobile development, backend API integration, and delivering production-ready features.",
    tags: ["React Native", "Node.js", "Android Studio", "Firebase"],
  },
  {
    year: "Aug 2024 — Apr 2025",
    role: "Intern",
    company: "Naresh IT",
    description: "Full-stack development internship. Built real-world projects, learned production workflows, and transitioned from academic to professional engineering.",
    tags: ["React", "Node.js", "JavaScript", "MongoDB", "REST APIs"],
  },
] as const;

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    year: "2022 - 2024",
    institution: "College of IT and Management Education(CIME),Bhubaneswar",
  },
] as const;

export const projects = [
  {
    title: "FitLens",
    tagline: "Fitness Platform",
    featured: true,
    status: "In Development",
    problem: "Fitness tracking and health management are fragmented across multiple platforms. Users lack a unified solution that combines workout tracking, nutrition planning, and AI-assisted analytics in one place.",
    solution: "A comprehensive fitness platform with a React Native mobile app, cloud-backed APIs, and AI-assisted analytics. Designed for cross-platform consistency and real-time synchronization.",
    architecture: "React Native App → API Gateway → Microservices → Database → Cloud Infrastructure → Analytics & AI/ML",
    technologies: ["React Native", "Node.js", "AWS", "Docker", "AI/ML"],
    challenges: ["Real-time data sync across devices", "Offline-first architecture", "Cross-platform UI consistency", "AI model integration for personalized insights"],
    github: "#",
    demo: null,
  },
  {
    title: "ChatApp",
    tagline: "Real-time Messaging",
    featured: false,
    status: "Live",
    problem: "Need for a full-stack real-time chat application demonstrating authentication, live messaging, and scalable architecture.",
    solution: "A complete chat application with JWT authentication, real-time messaging via WebSockets, and a clean MERN stack architecture. Deployed on Render with CI/CD.",
    architecture: "React Frontend → Express API → WebSocket Server → MongoDB → Cloud Deployment",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    challenges: ["Real-time message delivery", "Authentication flow", "Deployment on free tier infrastructure"],
    github: "https://github.com/MrutyunjayaSenapati/ChatApp",
    demo: "https://chatapp-3o8b.onrender.com/",
  },
  {
    title: "Todoist Clone",
    tagline: "Offline-First Task Manager",
    featured: false,
    status: "Complete",
    problem: "Task management apps often lack offline capabilities and real-time sync across devices.",
    solution: "A React Native task manager with offline-first architecture using SQLite, Zustand for state management, and Firebase for cloud sync. Supports projects, labels, reminders, and calendar view.",
    architecture: "React Native UI → Zustand Store → SQLite (local) ↔ Sync Engine ↔ Firebase Firestore",
    technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Zustand", "Firebase"],
    challenges: ["Conflict resolution in offline/online sync", "Local-first data architecture", "Push notification scheduling", "Recurring task time engine"],
    github: "https://github.com/MrutyunjayaSenapati/todoist",
    demo: null,
  },
  {
    title: "Plant Doctor",
    tagline: "AI Plant Disease Diagnosis",
    featured: false,
    status: "Experimental",
    problem: "Plant disease identification requires expert knowledge. Farmers and gardeners lack accessible AI-powered tools for quick diagnosis.",
    solution: "A full-stack monorepo with a React Native mobile app, NestJS backend, FastAI ML service, and Gemini API integration. Features image capture, AI diagnosis, treatment plans, and history tracking.",
    architecture: "Mobile App → NestJS API → FastAI ML Service / Gemini API → Supabase → Cloudinary",
    technologies: ["React Native", "NestJS", "FastAPI", "Python", "Supabase", "Gemini API", "Turborepo", "Docker"],
    challenges: ["Multi-service architecture coordination", "ML model integration with mobile app", "Image processing pipeline", "Monorepo tooling with Turborepo"],
    github: "https://github.com/MrutyunjayaSenapati/plant-doctor",
    demo: null,
  },
] as const;

export const cloudDevOpsSteps = [
  {
    step: "Development",
    icon: "💻",
    description: "Building applications with modern frameworks and type-safe languages",
    technologies: ["React Native", "Next.js", "TypeScript", "Node.js"],
  },
  {
    step: "Backend",
    icon: "🔧",
    description: "Designing scalable APIs with authentication, databases, and real-time capabilities",
    technologies: ["Express", "NestJS", "PostgreSQL", "MongoDB", "Socket.io"],
  },
  {
    step: "Deployment",
    icon: "🚀",
    description: "Containerizing applications and setting up CI/CD pipelines for automated releases",
    technologies: ["Docker", "GitHub Actions", "Render", "Vercel"],
  },
  {
    step: "Cloud",
    icon: "☁️",
    description: "Leveraging cloud services for scalable infrastructure and managed resources",
    technologies: ["AWS", "Lambda", "S3", "EC2", "Firebase"],
  },
  {
    step: "DevOps",
    icon: "🔄",
    description: "Implementing monitoring, infrastructure as code, and operational best practices",
    technologies: ["CI/CD", "Linux", "Nginx", "Git", "Monitoring"],
  },
] as const;
