import React from 'react'
import './filosofia.css'

const Filosofia = () => {
    return (
        <div className='services__background '>    
          <div className="services-container">
            <div className='service d-flex flex-column align-items-center'>
              <h2 className='m-4'>Economía y Eficiencia</h2>
              <p className='mx-5'>En Strengthfit, comprendemos que cada persona tiene diferentes necesidades y preferencias. Por ello, hemos creado un modelo de membresía que te permite acceder a las áreas de pesas y máquinas de cardio sin tener que pagar por clases grupales que no vas a utilizar. Esto nos permite ofrecerte una cuota reducida que se ajusta perfectamente a tu estilo de entrenamiento.</p>
            </div>
            <div className="service d-flex flex-column align-items-center">
              <h2 className='m-4'>Para Deportistas y Amantes del Fitness</h2>
              <p className='mx-5'>Si practicas un deporte principal como el running, ciclismo, fútbol o natación, y solo necesitas complementar tu entrenamiento unas pocas veces por semana, tenemos opciones de pago flexibles para ti. No tendrás que asumir el costo de una membresía ilimitada si solo planeas asistir un par de veces a la semana para fortalecer tu musculatura.</p>
            </div>
            <div className='service d-flex flex-column align-items-center'>
              <h2 className='m-4'>Comodidad y Exclusividad</h2>
              <p className='mx-5'>Nuestro compromiso es ofrecerte un entorno cómodo y exclusivo. Además de contar con instalaciones completamente equipadas con vestuarios, duchas y taquillas, regulamos el número de miembros para evitar la saturación en horas punta. Esto garantiza que siempre podrás entrenar con el espacio necesario y en un ambiente agradable. En [Nombre del Gimnasio], priorizamos tu comodidad y satisfacción por encima de las ganancias.</p>
            </div>
            
          </div>
        </div>
      )
    }

export default Filosofia