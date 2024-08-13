import React from "react";
import { createPortal } from "react-dom";

function Modal({ open, close, name, sum, tech }) {
  if (!open) {
    return null;
  }

  const modalRoot = document.getElementById("modal-pop");
  if (!modalRoot) {
    return null; // Prevent createPortal from running if the target element does not exist
  }

  return createPortal(
    <div className="overlay">
      <div className="modalContainer">
        <div className="modalClose">
          <p onClick={() => close(false)}>X</p>
        </div>
        <div className="modalTitle">{name}</div>
        <div className="modalGif"></div>
        <div className="modalSummary">{sum}</div>
        <div className="modalTech">Technology: {tech}</div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
