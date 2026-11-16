import { useState } from 'react';
import FilterBar from './FilterBar.jsx';
import ProjectList from './ProjectList.jsx';
import { projects } from '../data/projects.js';

function PortfolioProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = [
    'All',
    ...new Set(projects.flatMap((project) => project.techStack)),
  ];
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.techStack.includes(activeFilter));

  return (
    <div className="portfolio-gallery">
      <div className="project-toolbar">
        <FilterBar
          categories={categories}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />
        <p className="project-count" aria-live="polite">
          Showing {visibleProjects.length} of {projects.length} projects
        </p>
      </div>
      <ProjectList projects={visibleProjects} />
    </div>
  );
}

export default PortfolioProjects;
