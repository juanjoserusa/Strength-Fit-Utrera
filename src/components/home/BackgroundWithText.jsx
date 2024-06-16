import React from "react";
import "./BackgroundWithText.css";
import backgroundImage from "../../assets/home.png";
import { Link } from "react-router-dom";

const BackgroundWithText = () => {
  return (
    <div className="background-container">
      <div className="text-container">
        <h1 className="home__title">STRENGTH FIT</h1>
        <h2 className="home__subtittle">Prepárate para el cambio</h2>
        <p className="home__text">
          ¡Próxima Apertura! <br/><br/> Estamos trabajando en algo increíble y queremos que
          seas parte de ello. Únete a nuestras redes sociales para ser el
           primero en recibir noticias y promociones exclusivas. <br/><br/>{/*
          ¿Te gustaría estar al tanto? Contáctanos Si tienes alguna pregunta o necesitas más
          información, no dudes en ponerte en contacto con nosotros.<br/><br/> 
          ¡Estamos aquí para ayudarte!*/}
        </p>
        <Link className="home__div-button" to={"/contacto"}>
        <button className="btn btn-primary home__button">Informate aquí</button>
        </Link> 

      </div>
    </div>
  );
};

export default BackgroundWithText;
