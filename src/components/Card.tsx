function Card({ name, summary, technology, gif }) {
  return (
    <div className="card" style={{ backgroundImage: `url(/gifs/${gif})` }}>
      <div className="card-title">{name}</div>
      <div className="card-sum">{summary}</div>
      <div className="card-tech">{technology}</div>
    </div>
  );
}

export default Card;
