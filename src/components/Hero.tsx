import skills from "../skills.json";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h2 className="portfolio-title">
          Alexander Sobieraj | Software Engineer
        </h2>
        <div className="portfolio-info">
          <div>
            I am a dedicated and passionate software engineer based in{" "}
            <span className="highlight">Chicago</span> specializing in
            <span className="highlight"> Java, Spring Boot, and React</span>.
            With a solid foundation in both theory and practice, I hold a
            <span className="highlight">Bachelor's degree</span> in Computer
            Science and a <span className="highlight">Master's degree</span> in
            Software Engineering from DePaul University. My academic journey has
            equipped me with the skills to tackle complex problems and deliver
            robust, scalable solutions.
          </div>
        </div>
        <div className="skills">
          {skills.map((category, index) => {
            return Object.entries(category).map(([key, value]) => (
              <div className="skill-row">
                <strong className="bold">{key}:</strong>
                <div key={`${key}-${index}`} className="skills-div">
                  {value.map((skill, i) => (
                    <span key={i} className="skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ));
          })}
        </div>
      </div>
      <div className="hero-right">
        <img className="profile-img" src="./img/Alex.png" alt="" />
        <div className="hero-social-container">
          <div>
            <a
              href="https://www.linkedin.com/in/alexander-e-sobieraj/"
              target="_blank"
            >
              <img
                className="social-icon"
                src="./img/LinkedIn.png"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/alexander-e-sobieraj/"
              target="_blank"
            >
              <img
                className="social-icon"
                src="./img/GitHub.png"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
