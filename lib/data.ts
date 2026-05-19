import {
  Code2,
  Database,
  Layers3,
  Sparkles,
  Wand2,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    label: "Frontend Engineering",
    icon: Sparkles,
    description:
      "Crafting performant interfaces with reusable components, scalable state management, and polished motion.",
  },
  {
    label: "Backend Systems",
    icon: Code2,
    description:
      "Designing and implementing scalable backend systems with a focus on performance and maintainability.",
  },
  {
    label: "Creative Development",
    icon: Wand2,
    description:
      "Bringing ideas to life through innovative design and development approaches.",
  },
  {
    label: "Infrastructure",
    icon: Layers3,
    description:
      "Building and maintaining the underlying infrastructure that supports modern web applications.",
  },
  {
    label: "Database Management",
    icon: Database,
    description:
      "Designing and managing databases to ensure data integrity, performance, and scalability.",
  },
  {
    label: "Product Workflows",
    icon: Workflow,
    description:
      "Designing and optimizing product workflows to enhance user experience and operational efficiency.",
  },
];

export const projects = [
  {
    title: "Teladan By Bianore",
    type: "attendance system with face detection and location that can be determined",
    year: "2026",
    impact:
      "Developed a real-time attendance system with face detection and location that can be determined.",
    tags: ["Next.js", "AI", "Maps", "Realtime"],
  },
  {
    title: "POS System for Small Businesses",
    type: "A point-of-sale system tailored for small businesses, featuring inventory management and sales analytics.",
    year: "2026",
    impact:
      "Developed a point-of-sale system for small businesses, including inventory management and sales analytics.",
    tags: ["Next.js", "AI", "Design Systems", "Framer"],
  },
  {
    title: "Executive Analytics Dashboard",
    type: "A dashboard for executives with real-time narratives and focused drilldowns.",
    year: "2025",
    impact:
      "Developed a dashboard for executives with real-time narratives and focused drilldowns.",
    tags: ["Dashboards", "Realtime", "UX", "Charts"],
  },
  {
    title: "3D Interactive Web Experience",
    type: "A 3D interactive web experience that immerses users in a virtual world.",
    year: "2024",
    impact:
      "Developed a 3D interactive web experience that immerses users in a virtual world.",
    tags: ["Three.js", "React Three Fiber", "Drei"],
  },
];

export const experience = [
  {
    role: "Lead Project Engineer",
    company: "Bianore Creative",
    date: "2026 - Now",
    summary:
      "Lead the development of a real-time attendance system with face detection and location that can be determined.",
  },
  {
    role: "Fullstack Engineer - Internship",
    company: "PT. Sentra Usahatama Jaya",
    date: "2025 - Now",
    summary:
      "Developed internal systems and dashboards to optimize operations and provide real-time insights for executives.",
  },
  {
    role: "Junior Frontend Engineer",
    company: "Garuda Dinasty Nusantara",
    date: "2021 - 2022",
    summary:
      "Contributed to the development of an interactive web experience that immerses users in a virtual world.",
  },
  {
    role: "Interactive Developer",
    company: "Freelance",
    date: "2020 - 2025",
    summary:
      "Service provider for interactive web experiences, including 3D and motion design.",
  },
];
