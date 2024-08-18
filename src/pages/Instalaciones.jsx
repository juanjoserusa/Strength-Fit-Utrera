import React from "react";
import { galeria } from "../assets/constant/galeria";
import "./Galeria.css";

const Instalaciones = () => {
  return (
    <div className="bg-black">
      <h3 className="text-center text-white pt-5 pb-4">Instalaciones</h3>
      <div className="container">
        <p className="white-text text-center fs-5" style={{"color":"white"}}>
          <span style={{ color: "red", fontWeight: "bold" }}>
            Descubre nuestras Zonas de Entrenamiento Especializadas
          </span>
          <br />
          <br />
          En nuestro gimnasio, hemos diseñado espacios únicos para que puedas
          alcanzar tus objetivos de manera efectiva. Contamos con una{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Zona de Mancuernas
          </span>{" "}
          equipada con pesas de hasta 40 kg, además de barras fijas y barras Z
          de hasta 30 kg para que puedas desafiar tus límites.
          <br />
          <br />
          También disponemos de una{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Zona de Peso Libre
          </span>{" "}
          para entrenamientos más versátiles y una{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Zona de Máquinas de Placas
          </span>{" "}
          para trabajar todos los grupos musculares con precisión. No te
          olvides de fortalecer tu abdomen en nuestra{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Zona de Abdominales y Core
          </span>
          , y mejorar tu resistencia en nuestra completa{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Zona de Cardio
          </span>
          .
          <br />
          <br />
          ¡Entrena a tu ritmo y disfruta de todas nuestras áreas dedicadas al
          fitness y bienestar!
        </p>
      </div>
      <div className="galeria-container">
        {galeria.map((item, index) => (
          <div key={index} className="galeria-item">
            <img src={item.image} alt={item.nombre} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instalaciones;
