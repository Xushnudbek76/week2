function ProjectCard({ project, number }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-category">{project.tech.join(' · ')}</span>
        <span className="project-number">{String(number).padStart(2, '0')}</span>
      </div>
      <div className="project-details">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-links">
          <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">
            Source <span aria-hidden="true">↗</span>
            <span className="visually-hidden"> for {project.title} (opens in a new tab)</span>
          </a>
          {project.demo && (
            <a className="project-link" href={project.demo} target="_blank" rel="noopener noreferrer">
              Live demo <span aria-hidden="true">↗</span>
              <span className="visually-hidden"> of {project.title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
