import React from 'react';
import './filosofia.css';

const Filosofia = () => {
  return (
    <div className="services__background">
      <div className="custom-container">
        <div className="custom-row">
          {/* Texto */}
          <div className="custom-col">
            <div className="custom-card text-card">
              <h2>Economía y Eficiencia</h2>
              <p>
                En Strengthfit, comprendemos que cada persona tiene diferentes
                necesidades y preferencias. Por ello, hemos creado un modelo de
                membresía que te permite acceder a las áreas de pesas y máquinas
                de cardio sin tener que pagar por clases grupales que no vas a
                utilizar. Esto nos permite ofrecerte una cuota reducida que se
                ajusta perfectamente a tu estilo de entrenamiento.
              </p>
            </div>
          </div>

          {/* Foto */}
          <div className="custom-col">
            <div className="custom-card image-card">
              <img
                src="./src/assets/img/filosofia1.jpg"
                alt="Imagen 1"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="custom-col">
            <div className="custom-card text-card">
              <h2>Para Deportistas y Amantes del Fitness</h2>
              <p>
                Si practicas un deporte principal como el running, ciclismo,
                fútbol o natación, y solo necesitas complementar tu
                entrenamiento unas pocas veces por semana, tenemos opciones de
                pago flexibles para ti. No tendrás que asumir el costo de una
                membresía ilimitada si solo planeas asistir un par de veces a la
                semana para fortalecer tu musculatura.
              </p>
            </div>
          </div>

          {/* Foto */}
          <div className="custom-col">
            <div className="custom-card image-card">
              <img
                src="./src/assets/img/filosofia2.jpg"
                alt="Imagen 2"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="custom-col">
            <div className="custom-card text-card">
              <h2>Comodidad y Exclusividad</h2>
              <p>
                Nuestro compromiso es ofrecerte un entorno cómodo y exclusivo.
                Además de contar con instalaciones completamente equipadas con
                vestuarios, duchas y taquillas, regulamos el número de miembros
                para evitar la saturación en horas punta. Esto garantiza que
                siempre podrás entrenar con el espacio necesario y en un
                ambiente agradable. En strengthfit, priorizamos tu
                comodidad y satisfacción por encima de las ganancias.
              </p>
            </div>
          </div>

          {/* Foto extra para PC */}
          <div className="custom-col only-pc">
            <div className="custom-card image-card">
              <img
                src="./src/assets/img/filosofia3.jpg"
                alt="Imagen 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filosofia;
