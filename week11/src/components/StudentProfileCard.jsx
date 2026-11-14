function StudentProfileCard({ name, studentId, major, year, gpa }) {
  return (
    <article className="directory-card">
      <div className="directory-card-heading">
        <div>
          <p className="directory-label">STUDENT PROFILE</p>
          <h3>{name}</h3>
        </div>
        <span className="student-id">ID: {studentId}</span>
      </div>
      <dl className="student-details">
        <div><dt>Major</dt><dd>{major}</dd></div>
        <div><dt>Year</dt><dd>{year}</dd></div>
        <div><dt>GPA</dt><dd>{gpa}</dd></div>
      </dl>
    </article>
  );
}

export default StudentProfileCard;
