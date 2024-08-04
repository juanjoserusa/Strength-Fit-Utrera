import React from 'react';
import { galeria } from '../assets/constant/galeria';
import './Galeria.css';


const Galeria = () => {

  return (
    <div className='bg-black'>
    <div className="galeria-container  ">
      {
        galeria.map((item, index) => (
          <div key={index} className="galeria-item">
            <img src={item.image} alt={item.nombre} />
          </div>
        ))
      }
    </div>
    </div>
  );
};

export default Galeria;
