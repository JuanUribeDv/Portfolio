import'../Styles/Proyectos_tarjeta.css';

const ProjectCard = ({ title, image, tags, description, codeUrl, demoUrl, featured }) => {
  return (
    <div className="project-card">

      
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        {featured && (
          <span className="card-badge">⭐ Featured</span>
        )}
      </div>

      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>

        <div className="card-tags">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="card-tag"
              style={{ backgroundColor: tag.color }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <p className="card-description">{description}</p>

        <div className="card-buttons">
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn-code">
             Código
          </a>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
            🖥️ Demo
          </a>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;