import proyecto1 from "../Assets/personal_finances_tracker_muestra.png";
import proyecto2 from "../Assets/goal_handler_muestra.png";

export const projects = [
  {
    id: 1,
    title: "Personal Finances Tracker",
    image: proyecto1,
    featured: false,
    description: "App para gestionar finanzas personales.",
    codeUrl: "https://github.com/JuanUribeDv/Personal-Finances-Tracker",
    demoUrl: "",
    tags: [
      { label: "HTML",   color: "#e14a18" },
      { label: "CSS",   color: "#2215da" },
      { label: "Node.js", color: "#a855f7" },
      { label: "Express", color: "#f97316" },
    ]
  },
  {
    id: 2,
    title: "Goal_Handler",
    image: proyecto2,
    featured: false,
    description: "App para gestionar objetivos personales.",
    codeUrl: "https://github.com/JuanUribeDv/Goal_Handler",
    demoUrl: "",
    tags: [
      { label: "React", color: "#06b6d4" },
      { label: "CSS",   color: "#2215da" },
      { label: "Node.js", color: "#a855f7" },
      { label: "Express", color: "#f97316" },
    ]
  }
];