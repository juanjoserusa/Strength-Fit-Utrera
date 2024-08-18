import React from 'react';
import './Tarifas.css';
import { tarifas } from '../assets/constant/tarifas';
import { Link } from 'react-router-dom';

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
            <Link to={"/contacto"} className="btn btn-primary">Seleccionar</Link>
          </div>
        ))  
        } 
      </div>
    </div>
  );
}

export default Tarifas;
