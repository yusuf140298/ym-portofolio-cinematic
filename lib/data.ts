import { Code2, Compass, Layers3, Sparkles, Wand2, Workflow } from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { label: "Creative Direction", icon: Compass },
  { label: "Motion Systems", icon: Sparkles },
  { label: "3D Interfaces", icon: Layers3 },
  { label: "Frontend Architecture", icon: Code2 },
  { label: "Interaction Design", icon: Wand2 },
  { label: "Product Workflows", icon: Workflow },
];

export const projects = [
  {
    title: "Nebula Atlas",
    type: "Spatial Data Platform",
    year: "2026",
    impact: "Reduced geospatial scene load time by 48% while adding cinematic route playback.",
    tags: ["R3F", "WebGL", "Maps", "Motion"],
  },
  {
    title: "Pulse Foundry",
    type: "AI Brand System",
    year: "2025",
    impact: "Designed an adaptive identity engine with live previews and exportable motion tokens.",
    tags: ["Next.js", "AI", "Design Systems", "Framer"],
  },
  {
    title: "Signal Room",
    type: "Executive Analytics",
    year: "2025",
    impact: "Built a command center for operators with real-time narratives and focused drilldowns.",
    tags: ["Dashboards", "Realtime", "UX", "Charts"],
  },
];

export const experience = [
  {
    role: "Lead Creative Engineer",
    company: "Independent Studio",
    date: "2024 - Now",
    summary:
      "Building performant cinematic web experiences for founders, studios, and product teams.",
  },
  {
    role: "Senior Frontend Engineer",
    company: "Northstar Labs",
    date: "2021 - 2024",
    summary:
      "Led interface architecture for data-heavy SaaS products with animation-rich workflows.",
  },
  {
    role: "Interactive Developer",
    company: "Orbit Works",
    date: "2018 - 2021",
    summary:
      "Shipped immersive marketing sites, WebGL experiments, and editorial product launches.",
  },
];
