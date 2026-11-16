import ProjectCard from './ProjectCard.jsx';

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="project-empty" role="status">No projects match this technology filter.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default ProjectList;
