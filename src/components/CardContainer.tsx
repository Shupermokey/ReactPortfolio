import { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardContainer({ data, infinite }) {
  const settings = {
    infinite: infinite,
    centerMode: infinite,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
  };
  const [projects, setProjects] = useState(data);

  console.log(projects);

  return (
    <>
      <h3 id="project-header" className="section-header">
        Projects {"(" + projects.length + ")"}
      </h3>
      <div className="project-container">
        <div className="card-carousel">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <Card
                key={index}
                name={project.name}
                summary={project.summary}
                technology={project.technology}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CardContainer;
