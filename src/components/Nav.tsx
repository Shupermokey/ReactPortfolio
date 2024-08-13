export default function Nav() {
  return (
    <div className="nav-bar">
      <a href="/home" className="nav-home">
        Home
      </a>
      <div className="nav-links">
        <a href="#project-header" className="nav-link">
          Projects
        </a>
        <a href="#courses-header" className="nav-link">
          Courses
        </a>
        <a href="#bootcamps-header" className="nav-link">
          Bootcamps
        </a>
      </div>
    </div>
  );
}
