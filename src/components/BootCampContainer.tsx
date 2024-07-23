import BootCamp from "./BootCamp";

function BootCampContainer({ bootcamps }) {
  return (
    <>
      <h3 id="bootcamps-header" className="section-header">
        BootCamps
      </h3>
      <div className="camp-container">
        {bootcamps.map((bootcamp) => (
          <BootCamp
            name={bootcamp.name}
            summary={bootcamp.summary}
            technology={bootcamp.technology}
          />
        ))}
      </div>
    </>
  );
}

export default BootCampContainer;
