function Course({ name, summary, technology }) {
  return (
    <div className="course">
      <div className="course-name">{name}</div>
      <div className="course-sum">{summary}</div>
      <div className="course-tech">{technology}</div>
    </div>
  );
}

export default Course;
