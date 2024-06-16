import React from 'react';
import './Tarifas.css';

const Tarifas = () => {
  return (
    <div className='tarifas__background'>    
      <div className="tarifas-container">
        <div className='tarifa'>
          <h2>Tarifa Básica</h2>
          <p>Acceso al gimnasio durante horario normal.</p>
          <p>Precio: $20/mes</p>
          <button className="btn btn-primary">Seleccionar</button>
        </div>
        <div className="tarifa">
          <h2>Tarifa Premium</h2>
          <p>Acceso 24/7 al gimnasio, clases personalizadas.</p>
          <p>Precio: $50/mes</p>
          <button className="btn btn-primary">Seleccionar</button>
        </div>
        <div className='tarifa__decorations'>
          <div className='tarifa__square--decoration'></div>
          <div className='tarifa__circle--decoration'></div>
          <div className='tarifa__triangle--decoration'></div>
        </div>
      </div>
    </div>
  );
}

export default Tarifas;
