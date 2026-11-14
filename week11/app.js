const projects = [
  {
    name: 'Insurance AI',
    category: 'ai',
    label: 'AI · INSURANCE',
    description: 'A project exploring the overlap between artificial intelligence and insurance.',
    url: 'https://insurance-ai.tech',
    linkText: 'insurance-ai.tech',
  },
  {
    name: 'ArchyNotes',
    category: 'web-app',
    label: 'WEB APP · NOTES',
    description: 'A notes app for collecting ideas and keeping useful information close at hand.',
    url: 'https://archynotes.com',
    linkText: 'archynotes.com',
  },
];

const profile = {
  name: 'Xushnudbek Hamilton',
  studentId: '202537260',
  details: [
    ['University', 'Gachon University'],
    ['Role', 'Teacher Assistant'],
    ['Focus', 'Full-stack & AI engineering'],
    ['Based in', 'Seongnam, South Korea'],
  ],
};

const projectGrid = document.querySelector('#project-grid');
const projectCount = document.querySelector('#project-count');
const filterButtons = document.querySelectorAll('.filter-button');
const profileCard = document.querySelector('#profile-card');

function createProjectCard(project, index) {
  const article = document.createElement('article');
  article.className = 'project-card';

  const top = document.createElement('div');
  top.className = 'project-card-top';

  const category = document.createElement('span');
  category.className = 'project-category';
  category.textContent = project.label;

  const number = document.createElement('span');
  number.className = 'project-number';
  number.textContent = String(index + 1).padStart(2, '0');
  top.append(category, number);

  const details = document.createElement('div');
  details.className = 'project-details';

  const text = document.createElement('div');
  const title = document.createElement('h3');
  title.textContent = project.name;
  const description = document.createElement('p');
  description.textContent = project.description;
  text.append(title, description);

  const link = document.createElement('a');
  link.className = 'project-link';
  link.href = project.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `Visit ${project.name} at ${project.linkText}`);
  link.append(document.createTextNode(project.linkText));
  const arrow = document.createElement('span');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '↗';
  link.append(arrow);

  details.append(text, link);
  article.append(top, details);
  return article;
}

function renderProjects(category = 'all') {
  const visibleProjects = projects.filter((project) => category === 'all' || project.category === category);
  projectGrid.replaceChildren(...visibleProjects.map(createProjectCard));
  projectCount.textContent = `Showing ${visibleProjects.length} of ${projects.length} projects`;
}

function createProfileCard(student) {
  const article = document.createElement('article');
  article.className = 'student-card';
  article.setAttribute('aria-labelledby', 'student-name');

  const heading = document.createElement('div');
  heading.className = 'student-card-heading';
  const identity = document.createElement('div');
  const label = document.createElement('p');
  label.className = 'student-card-label';
  label.textContent = 'STUDENT PROFILE';
  const name = document.createElement('h3');
  name.id = 'student-name';
  name.textContent = student.name;
  identity.append(label, name);

  const studentId = document.createElement('span');
  studentId.className = 'student-id';
  studentId.textContent = `ID: ${student.studentId}`;
  heading.append(identity, studentId);

  const details = document.createElement('dl');
  details.className = 'student-details';
  student.details.forEach(([term, value]) => {
    const row = document.createElement('div');
    const termElement = document.createElement('dt');
    termElement.textContent = term;
    const valueElement = document.createElement('dd');
    valueElement.textContent = value;
    row.append(termElement, valueElement);
    details.append(row);
  });

  article.append(heading, details);
  return article;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
profileCard.replaceChildren(createProfileCard(profile));
