import proyecto1 from "../Assets/personal_finances_tracker_muestra.png";
import proyecto2 from "../Assets/goal_handler_muestra.png";
import proyecto3 from "../Assets/Negocio_muestra.png";
import proyecto4 from "../Assets/Sig_muestra.png";
import proyecto5 from "../Assets/Arq_microservicios_muestra.png";
import proyecto6 from "../Assets/NovaCore_muestra.png";
import { getTagColor } from "./languageColors.js";

const stackTags = (...labels) =>
  labels.map((label) => ({
    label,
    color: getTagColor(label),
  }));

export const curatedProjects = [
  {
    repo: "Personal-Finances-Tracker",
    image: proyecto1,
    tags: stackTags(
      "Node.js", 
      "Express.js", 
      "MySQL", 
      "HTML5", 
      "CSS3"),
  },
  {
    repo: "Arquitectura-Microservicios-",
    image: proyecto5,
    tags: stackTags(
      "CSS3",
      "JavaScript",
      "Firebase",
      "Node.js"
    ),
  },
  {
    repo: "InnovaCode-web",
    image: proyecto6,
    tags: stackTags(
      "React",
      "Firebase",
      "Tailwind CSS",
      "Vite"
    ),
  },
  {
    repo: "Goal_Handler",
    image: proyecto2,
    tags: stackTags(
      "React",
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "Vite"
    ),
  },
   {
     title: "CORDOBA S.A.S.",
     image: proyecto3,
     description: "Landing page profesional para **Córdoba S.A.S.**, empresa especializada en acabados, reformas y pintura en el Valle de Aburrá y Oriente (Antioquia, Colombia). El sitio presenta los servicios, proyectos destacados, trayectoria, valores y facilita el contacto con potenciales clientes.",
     tags: stackTags("React", "JavaScript", "Firebase"),
   },
   {
     title: "GeoAburrá",
     image: proyecto4,
     description: "Aplicación web para cargar, visualizar, reproyectar y almacenar capas geoespaciales (GeoJSON, Shapefile, KML), con soporte para dos motores de renderizado intercambiables: Leaflet (estándar) y MapLibre GL (alto rendimiento, WebGL).",
     tags: stackTags("React", "JavaScript", "Supabase"),
   },
];
