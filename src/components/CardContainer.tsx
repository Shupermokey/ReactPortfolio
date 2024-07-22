import Card from "./Card";

function CardContainer({ data }) {
  return (
    <div className="project-container">
      {data.map((project) => (
        <Card
          name={project.name}
          summary={project.summary}
          technology={project.technology}
        />
      ))}
    </div>
  );
}

export default CardContainer;
