import ProjectCard from './ProjectCard.jsx';

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty-state">No projects use this technology yet.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} number={index + 1} />
      ))}
    </div>
  );
}

export default ProjectList;
