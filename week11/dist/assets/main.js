import{j as e,r as m,P as g,c as f}from"./PortfolioProjects-DL6LVpae.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const N=""+new URL("xushnudbek-DA747ioH.jpg",import.meta.url).href;function u({title:i,children:s}){return e.jsxs("article",{className:"mini-card content-card",children:[e.jsx("p",{className:"card-kicker",children:"REUSABLE CARD"}),e.jsx("h3",{children:i}),e.jsx("div",{className:"card-content",children:s})]})}function h({type:i,message:s}){return s?e.jsx("p",{className:`demo-alert alert-${i}`,role:"status",children:s}):null}function y(){const[i,s]=m.useState(null);return e.jsxs("div",{className:"conditional-demo",children:[e.jsx(h,{type:"error",message:i?"":"You are signed out."}),e.jsx(h,{type:"success",message:i?"You are signed in.":""}),e.jsxs("div",{className:"welcome-panel",children:[i&&e.jsxs("p",{children:["Welcome back, ",i.name,"."]}),!i&&e.jsx("p",{children:"Sign in to see your dashboard."}),e.jsx("button",{className:"filter-button",type:"button",onClick:()=>s(i?null:{name:"Xushnudbek"}),children:i?"Sign out":"Sign in"})]})]})}function d({name:i="World"}){return e.jsxs("p",{className:"greeting",children:["Hello, ",i,"!"]})}const b=["all","success","warning","info"];function v({notifications:i}){const[s,a]=m.useState("all"),n=s==="all"?i:i.filter(({type:r})=>r===s);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"notification-controls",role:"group","aria-label":"Filter notifications",children:[b.map(r=>e.jsx("button",{className:"notification-filter-button",type:"button","aria-pressed":s===r,onClick:()=>a(r),children:r==="all"?"Show all":r},r)),e.jsxs("span",{className:"notification-count","aria-live":"polite",children:[n.length," ",n.length===1?"item":"items"]})]}),n.length>0?e.jsx("ul",{className:"notification-list",children:n.map(({id:r,type:t,message:o})=>{const j=t==="success"?"✅":t==="warning"?"⚠️":"ℹ️";return e.jsxs("li",{className:`notification notification-${t}`,children:[e.jsx("span",{className:"notification-icon","aria-hidden":"true",children:j}),e.jsx("span",{children:o})]},r)})}):e.jsx("p",{className:"notification-empty",role:"status",children:"No notifications to show."})]})}function p({name:i,price:s,rating:a,inStock:n}){return e.jsxs("article",{className:`mini-card product-card${n?"":" is-sold-out"}`,children:[e.jsx("p",{className:"card-kicker",children:"PRODUCT"}),e.jsx("h3",{children:i}),e.jsxs("p",{className:"product-price",children:["₩",s.toLocaleString("ko-KR")]}),e.jsxs("p",{className:"product-rating",children:[e.jsxs("span",{"aria-hidden":"true",children:["★".repeat(Math.floor(a)),"☆".repeat(5-Math.floor(a))]}),e.jsxs("span",{children:[a," / 5 stars"]})]}),e.jsx("p",{className:"stock-status",children:n?"In stock":"Out of stock"})]})}const k="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" fill="#e2e5e1"/><circle cx="40" cy="30" r="14" fill="#626862"/><path d="M12 80c2-18 14-28 28-28s26 10 28 28" fill="#626862"/></svg>');function x({name:i,role:s,email:a,avatarUrl:n=k}){return e.jsxs("article",{className:"mini-card profile-demo-card",children:[e.jsx("img",{className:"profile-avatar",src:n,alt:"",width:"64",height:"64"}),e.jsxs("div",{children:[e.jsx("p",{className:"card-kicker",children:"PROFILE"}),e.jsx("h3",{children:i}),e.jsx("p",{children:s}),e.jsx("a",{href:`mailto:${a}`,children:a})]})]})}function w({name:i,studentId:s,major:a,year:n,gpa:r}){return e.jsxs("article",{className:"mini-card profile-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("h3",{className:"student-name",children:i}),e.jsxs("span",{className:"student-id",children:["ID: ",s]})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Major:"})," ",a]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Year:"})," ",n]}),e.jsxs("p",{children:[e.jsx("strong",{children:"GPA:"})," ",r.toFixed(1)]})]})]})}function P({students:i}){return e.jsx("ul",{className:"grade-list",children:i.map(s=>e.jsxs("li",{children:[e.jsx("span",{children:s.name}),e.jsx("strong",{children:s.grade})]},s.id))})}const l={name:"Xushnudbek Hamilton",role:"Full-stack & AI engineer",email:"xushnudbek76n@gmail.com",studentId:"202537260",major:"Computer Engineering",year:2,gpa:4},S=[{id:"xushnudbek",name:l.name,studentId:l.studentId,major:l.major,year:l.year,gpa:l.gpa},{id:"sample-101",name:"Sample Student 1",studentId:"DEMO-101",major:"Computer Engineering",year:1,gpa:3.8},{id:"sample-102",name:"Sample Student 2",studentId:"DEMO-102",major:"Computer Engineering",year:2,gpa:3.6}],C=[{id:"saved",type:"success",message:"Your profile was saved."},{id:"deadline",type:"warning",message:"The project deadline is approaching."},{id:"materials",type:"info",message:"New lecture notes are available."}],E=[{id:"s-01",name:"Jordan Lee",grade:"A"},{id:"s-02",name:"Taylor Kim",grade:"B+"},{id:"s-03",name:"Morgan Park",grade:"A-"}];function A({children:i}){return e.jsxs("details",{className:"code-disclosure",children:[e.jsx("summary",{children:"View React example"}),e.jsx("pre",{children:e.jsx("code",{children:i})})]})}function c({number:i,id:s,origin:a,title:n,description:r,code:t,children:o}){return e.jsxs("article",{className:"exercise-card",id:s,children:[e.jsxs("div",{className:"exercise-heading",children:[e.jsx("span",{className:"exercise-number",children:i}),e.jsxs("div",{children:[e.jsx("p",{className:"exercise-origin",children:a}),e.jsx("h3",{children:n})]})]}),e.jsx("p",{className:"exercise-description",children:r}),e.jsx("div",{className:"exercise-demo",children:o}),e.jsx(A,{children:t})]})}function I(){return e.jsxs("div",{className:"page-shell",children:[e.jsxs("header",{className:"site-header",children:[e.jsxs("a",{className:"wordmark",href:"../../index.html","aria-label":"Coursework home",children:["XH",e.jsx("span",{children:"."})]}),e.jsx("nav",{className:"site-nav","aria-label":"Week 11 navigation",children:e.jsx("a",{href:"#practice",children:"Practice"})}),e.jsxs("a",{className:"header-link",href:"../../portfolio.html",children:["Portfolio ",e.jsx("span",{"aria-hidden":"true",children:"↗"})]})]}),e.jsx("main",{id:"main-content",children:e.jsxs("section",{className:"section practice-section",id:"practice","aria-labelledby":"practice-title",children:[e.jsxs("div",{className:"section-heading",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"eyebrow",children:["WEEK 11_1 ",e.jsx("span",{className:"eyebrow-divider",children:"/"})," REACT COMPONENTS & PROPS"]}),e.jsx("h2",{id:"practice-title",children:"Exercises and homework, tried live."})]}),e.jsx("p",{className:"section-note",children:"The three class exercises and both homework tasks run as React components."})]}),e.jsxs("div",{className:"exercise-grid",children:[e.jsx(c,{number:"E1",id:"profile-card",origin:"Week 11_1 · Exercise 1",title:"A profile card with a default avatar",description:"Pass profile details into a reusable card; the first card uses its default avatar.",code:`function ProfileCard({ name, role, email, avatarUrl = defaultAvatar }) {
  return (
    <article>
      <img src={avatarUrl} alt="" />
      <h3>{name}</h3>
      <p>{role}</p>
      <a href={\`mailto:\${email}\`}>{email}</a>
    </article>
  );
}`,children:e.jsxs("div",{className:"demo-card-grid",children:[e.jsx(x,{name:"Course Instructor",role:"Instructor",email:"instructor@example.edu"}),e.jsx(x,{name:l.name,role:l.role,email:l.email,avatarUrl:N})]})}),e.jsx(c,{number:"E2",id:"notifications",origin:"Week 11_1 · Exercise 2",title:"Conditional icons in a notification list",description:"Map notifications by ID, show an icon by type, and filter the list interactively.",code:`{notifications.map(({ id, type, message }) => {
  const icon = type === 'success'
    ? '✅'
    : type === 'warning'
      ? '⚠️'
      : 'ℹ️';

  return (
    <li key={id} className={\`notification-\${type}\`}>
      <span aria-hidden="true">{icon}</span>
      {message}
    </li>
  );
})}`,children:e.jsx(v,{notifications:C})}),e.jsx(c,{number:"E3",id:"children",origin:"Week 11_1 · Exercise 3",title:"A reusable card with children",description:"Keep the card wrapper reusable while passing different content through children.",code:`function Card({ title, children }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

<Card title="Lecture topics">
  <ul><li>Components</li><li>Props</li></ul>
</Card>
<Card title="Homework"><p>Build a portfolio gallery.</p></Card>`,children:e.jsxs("div",{className:"demo-card-grid",children:[e.jsx(u,{title:"Lecture topics",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Components"}),e.jsx("li",{children:"Props"}),e.jsx("li",{children:"State"})]})}),e.jsx(u,{title:"Homework",children:e.jsx("p",{children:"Build a portfolio gallery with reusable project cards and technology filters."})})]})}),e.jsx(c,{number:"HW1",id:"student-card",origin:"Week 11_1 · Homework 1",title:"A student directory with five props",description:"Render three profile cards using a student ID, major, numeric year, and numeric GPA.",code:`function StudentCard({ name, studentId, major, year, gpa }) {
  return (
    <article className="profile-card">
      <div className="card-header">
        <h3 className="student-name">{name}</h3>
        <span className="student-id">ID: {studentId}</span>
      </div>
      <div className="card-body">
        <p>Major: {major}</p>
        <p>Year: {year}</p>
        <p>GPA: {gpa.toFixed(1)}</p>
      </div>
    </article>
  );
}

{studentProfiles.map(({ id, ...student }) => (
  <StudentCard key={id} {...student} />
))}`,children:e.jsx("div",{className:"student-card-grid",children:S.map(({id:i,...s})=>e.jsx(w,{...s},i))})}),e.jsx(c,{number:"HW2",id:"portfolio-gallery",origin:"Week 11_1 · Homework 2",title:"A portfolio gallery with technology filters",description:"Filter the projects below by technology. The same React gallery powers the project list on the portfolio.",code:`const categories = [
  'All',
  ...new Set(projects.flatMap((project) => project.techStack)),
];

const visibleProjects = activeFilter === 'All'
  ? projects
  : projects.filter((project) => project.techStack.includes(activeFilter));

<FilterBar
  categories={categories}
  activeFilter={activeFilter}
  onSelectFilter={setActiveFilter}
/>
<ProjectList projects={visibleProjects} />`,children:e.jsx(g,{})}),e.jsx(c,{number:"P1",id:"first-component",origin:"Extra practice · Components",title:"One greeting component, multiple props",description:"Render the same component with default and custom names.",code:`function Greeting({ name = 'World' }) {
  return <p>Hello, {name}!</p>;
}

<Greeting />
<Greeting name="Ari" />
<Greeting name="Sam" />`,children:e.jsxs("div",{className:"greeting-stack",children:[e.jsx(d,{}),e.jsx(d,{name:"Ari"}),e.jsx(d,{name:"Sam"})]})}),e.jsx(c,{number:"P2",id:"product-card",origin:"Extra practice · Conditional UI",title:"A product card with stock status",description:"Format a price, show a rating, and change the stock label from a boolean prop.",code:`function ProductCard({ name, price, rating, inStock }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{price.toLocaleString('ko-KR')}원</p>
      <p>{rating} / 5 stars</p>
      <p>{inStock ? 'In stock' : 'Out of stock'}</p>
    </article>
  );
}`,children:e.jsxs("div",{className:"demo-card-grid product-grid",children:[e.jsx(p,{name:"Wireless Earbuds",price:89e3,rating:4.5,inStock:!0}),e.jsx(p,{name:"USB-C Hub",price:45e3,rating:3.5,inStock:!1})]})}),e.jsx(c,{number:"P3",id:"lists",origin:"Extra practice · Rendering arrays",title:"A list with stable keys",description:"Render each record by its ID instead of using an array position as the key.",code:`<ul>
  {students.map((student) => (
    <li key={student.id}>
      {student.name} — {student.grade}
    </li>
  ))}
</ul>`,children:e.jsx(P,{students:E})}),e.jsx(c,{number:"P4",id:"conditional",origin:"Extra practice · State and conditional rendering",title:"Switch between signed-out and signed-in UI",description:"Use null, &&, and a ternary to switch between both states.",code:`if (!message) return null;

{user && <p>Welcome, {user.name}.</p>}
{!user && <p>Please sign in.</p>}

<button onClick={() => setUser(user ? null : { name: 'Xushnudbek' })}>
  {user ? 'Sign out' : 'Sign in'}
</button>`,children:e.jsx(y,{})})]})]})}),e.jsxs("footer",{className:"site-footer",children:[e.jsxs("a",{className:"footer-home",href:"../../index.html",children:["Coursework home ",e.jsx("span",{"aria-hidden":"true",children:"↑"})]}),e.jsxs("a",{href:"../../portfolio.html",children:["Xushnudbek ",e.jsx("span",{"aria-hidden":"true",children:"↗"})]}),e.jsxs("span",{children:["WEEK 11_1 ",e.jsx("span",{"aria-hidden":"true",children:"·"})," REACT COMPONENTS & PROPS"]})]})]})}f.createRoot(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(I,{})}));
