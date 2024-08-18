import React from 'react';
import './Tarifas.css';
import { tarifas } from '../assets/constant/tarifas';

const Tarifas = () => {
  return (
    <div className='tarifas__background'>    
      <div className="tarifas-container">

        {/* Tarifa PreStrengthFit */}
         {tarifas.map((tarifa, index) => (
          <div className='tarifa d-flex flex-column justify-content-around' key={index}>
            <h2 className='title'>{tarifa.nombre}</h2>
            <ul className='mt-2'>
              {tarifa.descripcion.map((item, index) => (
                <li key={index} className='fs-6 m-0'>{item}</li>
              ))}
            </ul>
            <p className='mt-1 price'>Precio: {tarifa.precio} €/mes</p>
            <a href="https://www.strengthfitutrera.com/contacto" className="btn btn-primary">Seleccionar</a>
          </div>
        ))  
        } 
      </div>
    </div>
  );
}

export default Tarifas;
