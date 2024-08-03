import React from 'react';
import './Galeria.css';

const Galeria = () => {

  const galeria = [
    "https://www.binomfitness.es/media/catalog/product/cache/2959e07eef40d1cb33decb8397ba855a/b/i/binom_fitness_tapis_de_course.jpg",
    "https://img.freepik.com/foto-gratis/hombre-sano-entrenando-gimnasio_23-2147915467.jpg?t=st=1718563966~exp=1718567566~hmac=383acdb1a262b760ab2a8413001b7545c37b0d18cbeeb1597d1ad508e7b60cf9&w=1380",
    "https://img.freepik.com/foto-gratis/hombre-joven-entrenando-gimnasio_23-2147915500.jpg?t=st=1718563993~exp=1718567593~hmac=890177e691db0f534b80b49aad94a73e92cd14192629ef75588ddc9256a1c308&w=1060",
    "https://img.freepik.com/foto-gratis/mujer-trabajando-equipo_23-2147688154.jpg?t=st=1718563914~exp=1718567514~hmac=496bbeb68e833c099e3028d4e52c8fd6cfd89aeb87f873f2af181cb143d4ff08&w=1380",
    "https://img.freepik.com/foto-gratis/hombre-sano-entrenando-gimnasio_23-2147915467.jpg?t=st=1718563966~exp=1718567566~hmac=383acdb1a262b760ab2a8413001b7545c37b0d18cbeeb1597d1ad508e7b60cf9&w=1380",
    "https://img.freepik.com/foto-gratis/hombre-joven-entrenando-gimnasio_23-2147915500.jpg?t=st=1718563993~exp=1718567593~hmac=890177e691db0f534b80b49aad94a73e92cd14192629ef75588ddc9256a1c308&w=1060",
    "https://img.freepik.com/foto-gratis/mujer-trabajando-equipo_23-2147688154.jpg?t=st=1718563914~exp=1718567514~hmac=496bbeb68e833c099e3028d4e52c8fd6cfd89aeb87f873f2af181cb143d4ff08&w=1380",
    "https://img.freepik.com/foto-gratis/hombre-sano-entrenando-gimnasio_23-2147915467.jpg?t=st=1718563966~exp=1718567566~hmac=383acdb1a262b760ab2a8413001b7545c37b0d18cbeeb1597d1ad508e7b60cf9&w=1380",
    "https://img.freepik.com/foto-gratis/hombre-joven-entrenando-gimnasio_23-2147915500.jpg?t=st=1718563993~exp=1718567593~hmac=890177e691db0f534b80b49aad94a73e92cd14192629ef75588ddc9256a1c308&w=1060",
  ]
  return (
    <div className='bg-black'>
    <div className="galeria-container container ">
      {galeria.map((_, index) => (
        <div key={index} className="galeria-item">
          <img src={ galeria[index]} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Galeria;
