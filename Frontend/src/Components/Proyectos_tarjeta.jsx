import { useRef } from 'react'
import { Eye, X } from 'lucide-react'
import '../Styles/Proyectos_tarjeta.css'

const ProjectCard = ({ title, image, tags, description, codeUrl, demoUrl, featured }) => {
  const imageDialogRef = useRef(null)

  return (
    <article className="project-card">
      <div className="card-image-wrapper">
        <img
          src={image}
          alt={`Vista previa de ${title}`}
          className="card-image"
          loading="lazy"
          decoding="async"
        />
        <button
          type="button"
          className="card-overlay"
          aria-label={`Ver imagen completa de ${title}`}
          title="Ver imagen completa"
          onClick={() => imageDialogRef.current?.showModal()}
        >
          <Eye aria-hidden="true" size={20} />
        </button>
        {featured && <span className="card-badge">Destacado</span>}
      </div>
      <dialog
        ref={imageDialogRef}
        className="image-preview-dialog"
        aria-label={`Imagen completa de ${title}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close()
          }
        }}
      >
        <div className="image-preview-content">
          <button
            type="button"
            className="image-preview-close"
            aria-label="Cerrar imagen"
            onClick={() => imageDialogRef.current?.close()}
          >
            <X aria-hidden="true" size={20} />
          </button>
          <img src={image} alt={`Imagen completa de ${title}`} />
        </div>
      </dialog>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>

        <div className="card-tags">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="card-tag"
              style={{ '--tag-color': tag.color }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <p className="card-description">{description}</p>

        <div className="card-buttons">
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-code"
            >
              Código
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo"
            >
              Demo en vivo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
