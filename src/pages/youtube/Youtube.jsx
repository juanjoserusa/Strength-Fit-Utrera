import React, { useState } from "react";
import ReactPlayer from "react-player";
import grupos from "./grupos.json"; // Importa el JSON directamente
import "./youtube.css";

const YoutubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedZone, setSelectedZone] = useState("");

  const handleZoneChange = (zone) => {
    setSelectedZone(zone);
    setVideos(grupos[zone] || []); // Accede directamente a los datos del JSON importado
  };

  return (
    <div className="youtube-videos-container">
      <div className="container">
        <h3>Haz clic en alguno de los grupos musculares o rutinas para obtener ideas de entrenamiento personalizadas</h3>
      </div>
      <div className="zones">
        <button onClick={() => handleZoneChange("Espalda")}>Espalda</button>
        <button onClick={() => handleZoneChange("Pecho")}>Pecho</button>
        <button onClick={() => handleZoneChange("Hombro")}>Hombro</button>
        <button onClick={() => handleZoneChange("Piernas")}>Piernas</button>
        <button onClick={() => handleZoneChange("Brazos")}>Brazos</button>
        <hr style={{ color: "red" }} />
        <button onClick={() => handleZoneChange("Core")}>Core</button>
        <button onClick={() => handleZoneChange("Cardio")}>Cardio</button>
      </div>

      <div className="video-container">
        {videos.length > 0 ? (
          <div>
            <h3 className="zone-title">
              Videos de <span className="highlight">{selectedZone}</span>
            </h3>
            <div className="videos w-100">
              {videos.map((url, index) => (
                <div key={index} className="video">
                  <ReactPlayer url={url} width="100%" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Selecciona un grupo muscular para ver los videos.</p>
        )}
      </div>
    </div>
  );
};

export default YoutubeVideos;
