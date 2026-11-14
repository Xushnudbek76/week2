import { useState } from 'react';
import myPhoto from '../../assets/xushnudbek.jpg';
import '../../portfolio.css';
import Card from './components/Card.jsx';
import ConditionalDemo from './components/ConditionalDemo.jsx';
import FilterBar from './components/FilterBar.jsx';
import Greeting from './components/Greeting.jsx';
import NotificationList from './components/NotificationList.jsx';
import ProductCard from './components/ProductCard.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import ProjectList from './components/ProjectList.jsx';
import StudentCard from './components/StudentCard.jsx';
import StudentList from './components/StudentList.jsx';
import StudentProfileCard from './components/StudentProfileCard.jsx';
import { notifications, profile, projects, students, studentsForList } from './data/projects.js';
import './style.css';

const technologies = [...new Set(projects.flatMap((project) => project.tech))].sort();

function CodeDisclosure({ children }) {
  return (
    <details className="code-disclosure">
      <summary>View React example</summary>
      <pre><code>{children}</code></pre>
    </details>
  );
}

function Exercise({ number, id, origin, title, description, code, children }) {
  return (
    <article className="exercise-card" id={id}>
      <div className="exercise-heading">
        <span className="exercise-number">{number}</span>
        <div>
          <p className="exercise-origin">{origin}</p>
          <h3>{title}</h3>
        </div>
      </div>
      <p className="exercise-description">{description}</p>
      <div className="exercise-demo">{children}</div>
      <CodeDisclosure>{code}</CodeDisclosure>
    </article>
  );
}

function App() {
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const visibleProjects = projects.filter(
    (project) => selectedTechnology === 'All' || project.tech.includes(selectedTechnology),
  );

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="../../index.html" aria-label="Coursework home">XH<span>.</span></a>
        <nav className="site-nav" aria-label="Week 11 navigation">
          <a href="#projects">Projects</a>
          <a href="#directory">Directory</a>
          <a href="#practice">Practice</a>
        </nav>
        <a className="header-link" href="../../portfolio.html">Portfolio <span aria-hidden="true">↗</span></a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> WEEK 11 <span className="eyebrow-divider">/</span> REACT COMPONENTS &amp; PROPS</p>
            <h1 id="hero-title">Small pieces.<br /><span>Clear interfaces.</span></h1>
            <p className="hero-intro">
              A hands-on set of React examples: reusable components, props, lists, and conditional
              rendering, alongside a filterable gallery of my work.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#practice">Explore the exercises <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#projects">View project gallery <span aria-hidden="true">↘</span></a>
            </div>
            <div className="hero-meta">
              <span>{profile.name}</span>
              <span className="meta-separator" aria-hidden="true">·</span>
              <span>{profile.university}</span>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img src={myPhoto} alt="Portrait of Xushnudbek Hamilton" width="768" height="911" />
            </div>
            <span className="portrait-note">WEEK 11 <span aria-hidden="true">—</span> COMPONENTS &amp; PROPS</span>
            <span className="portrait-index" aria-hidden="true">11 / 11</span>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOMEWORK <span className="eyebrow-divider">/</span> 01</p>
              <h2 id="projects-title">Projects from reusable data.</h2>
            </div>
            <p className="section-note">Filter six projects by a technology used to build them.</p>
          </div>
          <FilterBar options={technologies} selected={selectedTechnology} onSelect={setSelectedTechnology} />
          <p className="project-count" role="status" aria-live="polite">
            Showing {visibleProjects.length} of {projects.length} projects
            {selectedTechnology !== 'All' && ` using ${selectedTechnology}`}
          </p>
          <ProjectList projects={visibleProjects} />
        </section>

        <section className="section directory-section" id="directory" aria-labelledby="directory-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TASK 11-A <span className="eyebrow-divider">/</span> STUDENT DIRECTORY</p>
              <h2 id="directory-title">One card, several students.</h2>
            </div>
            <p className="section-note">Each directory entry uses the same component and receives its details as props.</p>
          </div>
          <p className="completion-note">
            The two classmate entries are clearly marked sample data. Replace them with real
            classmates if your assignment requires it, and add your GPA before submitting.
          </p>
          <div className="directory-grid">
            {students.map((student) => (
              <StudentProfileCard key={student.id} {...student} />
            ))}
          </div>
        </section>

        <section className="section practice-section" id="practice" aria-labelledby="practice-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CLASS PRACTICE <span className="eyebrow-divider">/</span> 02</p>
              <h2 id="practice-title">Eight patterns, tried live.</h2>
            </div>
            <p className="section-note">Each example includes a working component and a compact code sample.</p>
          </div>

          <div className="exercise-grid">
            <Exercise
              number="E1"
              id="first-component"
              origin="Component basics"
              title="One component, multiple uses"
              description="Render the same greeting component three times with different props."
              code={`function Greeting({ name = 'World' }) {
  return <p>Hello, {name}!</p>;
}

<Greeting />
<Greeting name="Ari" />
<Greeting name="Sam" />`}
            >
              <div className="greeting-stack">
                <Greeting />
                <Greeting name="Ari" />
                <Greeting name="Sam" />
              </div>
            </Exercise>

            <Exercise
              number="E2"
              id="student-card"
              origin="Props practice"
              title="A student card from props"
              description="Pass a name, student ID, and major into one reusable card."
              code={`function StudentCard({ name, id, major }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Major: {major}</p>
    </article>
  );
}`}
            >
              <div className="demo-card-grid">
                <StudentCard name="Jamie Park" id="DEMO-103" major="Computer Engineering" />
                <StudentCard name={profile.name} id={profile.studentId} major="Computer Engineering" />
              </div>
            </Exercise>

            <Exercise
              number="E3"
              id="profile-card"
              origin="Optional props"
              title="A profile with a default avatar"
              description="The first card uses its default image; the second receives a photo prop."
              code={`function ProfileCard({ name, role, email, avatarUrl = defaultAvatar }) {
  return (
    <article>
      <img src={avatarUrl} alt="" />
      <h3>{name}</h3>
      <p>{role}</p>
      <a href={\`mailto:\${email}\`}>{email}</a>
    </article>
  );
}`}
            >
              <div className="demo-card-grid">
                <ProfileCard name="Course Instructor" role="Instructor" email="instructor@example.edu" />
                <ProfileCard
                  name={profile.name}
                  role={profile.role}
                  email={profile.email}
                  avatarUrl={myPhoto}
                />
              </div>
            </Exercise>

            <Exercise
              number="E4"
              id="notifications"
              origin="Lists and conditions"
              title="Notifications with icons"
              description="Map an array to list items, use each notification ID as its key, and select an icon by type."
              code={`{notifications.map(({ id, type, message }) => (
  <li key={id} className={\`notification-\${type}\`}>
    <span aria-hidden="true">{iconFor(type)}</span>
    {message}
  </li>
))}`}
            >
              <NotificationList notifications={notifications} />
            </Exercise>

            <Exercise
              number="E5"
              id="children"
              origin="Composition"
              title="Different content through children"
              description="The wrapper stays the same while its parent supplies different content."
              code={`function Card({ title, children }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

<Card title="Topics"><p>Components and props</p></Card>`}
            >
              <div className="demo-card-grid">
                <Card title="Today’s topics"><p>Components · Props · State</p></Card>
                <Card title="Next step"><p>Build a small component of your own.</p></Card>
              </div>
            </Exercise>

            <Exercise
              number="E6"
              id="product-card"
              origin="Conditional UI"
              title="A product card with stock status"
              description="Format a price, show a rating, and change the stock label based on a boolean prop."
              code={`function ProductCard({ name, price, rating, inStock }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{price.toLocaleString('ko-KR')}원</p>
      <p>{rating} / 5 stars</p>
      <p>{inStock ? 'In stock' : 'Out of stock'}</p>
    </article>
  );
}`}
            >
              <div className="demo-card-grid product-grid">
                <ProductCard name="Wireless Earbuds" price={89000} rating={4.5} inStock />
                <ProductCard name="USB-C Hub" price={45000} rating={3.5} inStock={false} />
              </div>
            </Exercise>

            <Exercise
              number="E7"
              id="lists"
              origin="Rendering arrays"
              title="A list with stable keys"
              description="Render each record by its ID instead of using an array position as the key."
              code={`<ul>
  {students.map((student) => (
    <li key={student.id}>
      {student.name} — {student.grade}
    </li>
  ))}
</ul>`}
            >
              <StudentList students={studentsForList} />
            </Exercise>

            <Exercise
              number="E8"
              id="conditional"
              origin="State and conditional rendering"
              title="Switch between signed-out and signed-in UI"
              description="This demo uses null, &&, and a ternary so you can switch between both states."
              code={`if (!message) return null;

{user && <p>Welcome, {user.name}.</p>}
{!user && <p>Please sign in.</p>}

<button onClick={() => setUser(user ? null : { name: 'Xushnudbek' })}>
  {user ? 'Sign out' : 'Sign in'}
</button>`}
            >
              <ConditionalDemo />
            </Exercise>
          </div>
        </section>

        <section className="contact-panel week-contact" aria-labelledby="contact-title">
          <p className="eyebrow">MORE ABOUT MY WORK <span className="eyebrow-divider">/</span> PORTFOLIO</p>
          <div className="contact-row">
            <h2 id="contact-title">See the complete picture.</h2>
            <a className="contact-link" href="../../portfolio.html">Visit my portfolio <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-home" href="../../index.html">Coursework home <span aria-hidden="true">↑</span></a>
        <a href="../../portfolio.html">Xushnudbek Hamilton <span aria-hidden="true">↗</span></a>
        <span>WEEK 11 <span aria-hidden="true">·</span> REACT COMPONENTS &amp; PROPS</span>
      </footer>
    </div>
  );
}

export default App;
