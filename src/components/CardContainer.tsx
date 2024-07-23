import { useEffect, useState } from "react";
import Card from "./Card";

function CardContainer({ data }) {
  const [projects, setProjects] = useState(data);
  const [carosel, setCarosel] = useState(0);

  useEffect(() => {}, [showCards]);

  console.log(projects);

  function showCards() {
    let cardArr = [];
    let cards = data.slice(carosel, carosel + 3);
    console.log(cards);
    for (let i of cards) {
      cardArr.push(
        <Card
          name={i.name}
          summary={i.summary}
          technology={i.technology}
          gif={i.gif}
        />
      );
    }
    return cardArr;
  }

  return (
    <>
      <h3 id="project-header" className="section-header">
        Projects {"(" + projects.length + ")"}
      </h3>
      <div className="project-container">
        {/* {data.map((project, i) => (
          <Card
            key={i}
            name={project.name}
            summary={project.summary}
            technology={project.technology}
          />
        ))} */}
        <div onClick={() => setCarosel(carosel > 0 ? carosel - 3 : 0)}>
          <button className="arrow">&#x2B05;</button>
        </div>
        <div className="card-carousel">{showCards()}</div>
        <div
          onClick={() =>
            setCarosel(carosel + 3 < projects.length ? carosel + 3 : carosel)
          }
        >
          <button className="arrow">&#x27A1;</button>
        </div>
      </div>
    </>
  );
}

export default CardContainer;
