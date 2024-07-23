import Course from "./Course";

function CourseContainer({ courses }) {
  return (
    <>
      <h3 id="courses-header" className="section-header">
        Courses
      </h3>
      <div className="course-container">
        {courses.map((course) => (
          <Course
            name={course.name}
            summary={course.summary}
            technology={course.technology}
          />
        ))}
      </div>
    </>
  );
}

export default CourseContainer;
