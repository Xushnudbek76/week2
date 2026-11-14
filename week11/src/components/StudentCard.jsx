function StudentCard({ name, id, major, gpa }) {
  return (
    <article className="mini-card">
      <p className="card-kicker">STUDENT</p>
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Major: {major}</p>
      <p>GPA: {gpa}</p>
    </article>
  );
}

export default StudentCard;
