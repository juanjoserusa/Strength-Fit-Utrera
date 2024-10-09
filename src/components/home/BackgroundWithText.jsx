import React, { useState, useEffect } from "react";
import "./BackgroundWithText.css";
import backgroundImage from "../../assets/img/home.png";
import { Link } from "react-router-dom";

import Modal from "./modal.jsx";
// import { promocion } from "../../assets/constant/promociones";

const BackgroundWithText = () => {
  // const [showModal, setShowModal] = useState(true);

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  // useEffect(() => {
  //   setShowModal(true); // Open modal on component mount
  // }, []);

  return (
    <div className="background-container">
      {/* {showModal && <Modal tarifas={promocion} onClose={closeModal} />} */}
      <div className="text-container">
        <h1 className="home__title">STRENGTH FIT</h1>
        <h2 className="home__subtittle">Prepárate para el cambio</h2>
        <p className="home__text">
          ¡Te damos la bienvenida! <br /> <br /> Siempre estamos innovando para
          ofrecerte lo mejor, y queremos que sigas siendo parte de nuestra
          comunidad. Únete a nuestras redes sociales para recibir las últimas
          noticias y promociones exclusivas. <br /> <br /> En Strengthfit, hemos
          creado un espacio que se adapta a tus necesidades reales y
          específicas. Nuestro compromiso es brindarte una experiencia de
          entrenamiento de calidad, accesible y cómoda, para que solo pagues por
          lo que realmente utilizas.{" "}
        </p>
        <Link className="home__div-button" to={"/filosofia"}>
          <button className="btn btn-primary home__button-home">
            La filosofía del fitness que estabas buscando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BackgroundWithText;
