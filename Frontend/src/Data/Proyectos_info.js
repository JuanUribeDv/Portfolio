import proyecto1 from "../Assets/personal_finances_tracker_muestra.png";
import proyecto2 from "../Assets/Goal_handler_muestra.png";
import proyecto3 from "../Assets/Negocio_muestra.png";
import proyecto4 from "../Assets/Sig_muestra.png";
import proyecto5 from "../Assets/Arq_microservicios_muestra.png";
import proyecto6 from "../Assets/NovaCore_muestra.png";
export const curatedProjects = [
  {
    repo: "Personal-Finances-Tracker",
    image: proyecto1,
  },
  {
    repo: "Arquitectura-Microservicios-",
    image: proyecto5,
  },
  {
    repo: "InnovaCode-web",
    image: proyecto6,
  },

  // Privado o compartido: objeto completo, sin campo `repo`
   {
     title: "Goal_Handler",
     image: proyecto2,
     description: "Una app web intuitiva para registrar y gestionar metas, también una zona de descarga mental llamada journal donde se registran progresos diarios o incluso pensamientos con la intención de mantener una mentalidad más ordenada y más enfocada, ideal para organizar rutinas y llevar un registro eficaz de mis metas.",
     tags: [
       { label: "React", color: "#06b6d4" },
       { label: "JavaScript", color: "#f7df1e" },
       { label: "PostgreSQL", color: "#4EAA25" },
     ],
   },
   {
     title: "CORDOBA S.A.S.",
     image: proyecto3,
     description: "Landing page profesional para **Córdoba S.A.S.**, empresa especializada en acabados, reformas y pintura en el Valle de Aburrá y Oriente (Antioquia, Colombia). El sitio presenta los servicios, proyectos destacados, trayectoria, valores y facilita el contacto con potenciales clientes.",
     tags: [
       { label: "React", color: "#06b6d4" },
       { label: "JavaScript", color: "#f7df1e" },
       { label: "Firebase", color: "#ff3e00" },
     ],
   },
   {
     title: "GeoAburrá",
     image: proyecto4,
     description: "Aplicación web para cargar, visualizar, reproyectar y almacenar capas geoespaciales (GeoJSON, Shapefile, KML), con soporte para dos motores de renderizado intercambiables: Leaflet (estándar) y MapLibre GL (alto rendimiento, WebGL).",
     tags: [
       { label: "React", color: "#06b6d4" },
       { label: "JavaScript", color: "#f7df1e" },
       { label: "Supabase", color: "#8c33a3" },
     ],
   },
];
