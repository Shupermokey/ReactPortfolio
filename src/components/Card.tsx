import { useState } from "react";
import Modal from "./Modal";

function Card({ name, summary, technology }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Modal
        open={openModal}
        close={setOpenModal}
        name={name}
        sum={summary}
        tech={technology}
      />

      <div onClick={() => setOpenModal(true)} className="card">
        <div className="card-title">{name}</div>
        <div className="card-sum">{summary}</div>
        <div className="card-tech">{technology}</div>
      </div>
    </>
  );
}

export default Card;
