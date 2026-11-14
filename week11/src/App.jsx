import myPhoto from '../../assets/xushnudbek.jpg';
import '../../portfolio.css';
import Card from './components/Card.jsx';
import ConditionalDemo from './components/ConditionalDemo.jsx';
import Greeting from './components/Greeting.jsx';
import NotificationList from './components/NotificationList.jsx';
import ProductCard from './components/ProductCard.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import StudentCard from './components/StudentCard.jsx';
import StudentList from './components/StudentList.jsx';
import { notifications, profile, studentsForList } from './data/exercises.js';
import './style.css';

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
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="../../index.html" aria-label="Coursework home">XH<span>.</span></a>
        <nav className="site-nav" aria-label="Week 11 navigation">
          <a href="#practice">Practice</a>
        </nav>
        <a className="header-link" href="../../portfolio.html">Portfolio <span aria-hidden="true">↗</span></a>
      </header>

      <main id="main-content">
        <section className="section practice-section" id="practice" aria-labelledby="practice-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WEEK 11 <span className="eyebrow-divider">/</span> REACT COMPONENTS &amp; PROPS</p>
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
              description="Pass a name, student ID, major, and GPA into one reusable card."
              code={`function StudentCard({ name, id, major, gpa }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Major: {major}</p>
      <p>GPA: {gpa}</p>
    </article>
  );
}`}
            >
              <div className="demo-card-grid">
                <StudentCard name="Jamie Park" id="DEMO-103" major="Computer Engineering" gpa="3.8" />
                <StudentCard
                  name={profile.name}
                  id={profile.studentId}
                  major="Computer Engineering"
                  gpa={profile.gpa}
                />
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

      </main>

      <footer className="site-footer">
        <a className="footer-home" href="../../index.html">Coursework home <span aria-hidden="true">↑</span></a>
        <a href="../../portfolio.html">Xushnudbek <span aria-hidden="true">↗</span></a>
        <span>WEEK 11 <span aria-hidden="true">·</span> REACT COMPONENTS &amp; PROPS</span>
      </footer>
    </div>
  );
}

export default App;
