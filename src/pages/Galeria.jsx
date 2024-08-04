import React from 'react';
import { galeria } from '../assets/constant/galeria';
import './Galeria.css';


const Galeria = () => {

  return (
    <div className='bg-black'>
    <h3 className='text-center text-white pt-5'>Galeria</h3>
    <div className="galeria-container">
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
