import React from 'react';
import ContactForm from '../components/contactForm/ContactForm';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className='bg-black pt-5 contact__page--father'>
      <div className='contact__content'>
        <div className='d-flex justify-content-center'>
          <h1 className='contact__title'>Infórmate y prepárate para el cambio</h1>
        </div>
        <div className='d-flex justify-content-center contact__div'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contacto;
