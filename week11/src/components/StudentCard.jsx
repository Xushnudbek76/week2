function StudentCard({ name, id, major }) {
  return (
    <article className="mini-card">
      <p className="card-kicker">STUDENT</p>
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Major: {major}</p>
    </article>
  );
}

export default StudentCard;
