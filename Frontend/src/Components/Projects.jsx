import { useProjects } from '../Data/useProjects.js'
import ProjectCard from './Proyectos_tarjeta'
import '../Styles/projects.css'

function Projects() {
  const { projects } = useProjects()

  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Proyectos</p>
          <h2 className="section-title">Trabajos recientes</h2>
          <p className="section-subtitle">
            Una selección de proyectos en los que he trabajado, desde el diseño
            de la interfaz hasta la lógica del servidor.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
