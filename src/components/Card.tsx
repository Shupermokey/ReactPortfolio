function Card({ name, summary, technology }) {
  return (
    <div className="card">
      <div className="card-title">{name}</div>
      <div className="card-sum">{summary}</div>
      <div className="card-tech">{technology}</div>
    </div>
  );
}

export default Card;
