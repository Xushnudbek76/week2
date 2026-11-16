import { createRoot } from 'react-dom/client';
import PortfolioProjects from './components/PortfolioProjects.jsx';

const root = document.getElementById('portfolio-projects-root');

if (root) {
  createRoot(root).render(<PortfolioProjects />);
}
