import React, { useEffect } from "react";
import "./modal.css";

const Modal = ({ tarifas, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    return () => {
      document.body.style.overflow = "unset"; // Re-enable scrolling when modal is closed
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header ">
          <h2 clas>{tarifas[0].nombre}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          {tarifas[0].descripcion.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <p>
            Para inscribirte en la promoción, debes acudir al gimnasio ubicado en
            <br />
            <strong className="fs-3 "> Avenida de Andalucía 12, Utrera.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
