import React from 'react';
import './_Header.scss';
import miImagen from '../../assets/headerimg.png';


const Header = () => {
  return (
    <header className='header'>
     {/* Información del header */}
      <div className='header-info'>

       <div className='header-text'>
       <div>
       <h1 className='titulo'>Conectamos tu talento con las empresas</h1>
       </div>

        <div>
        <p className='parrafo-header'>Generamos soluciones de valor con compromiso, coraje, enfoque, apertura y respeto.</p>
        </div>
       </div>
        {/* <button className='btn-header'>Quiero contactarme</button> */}
        <button className='btn-header'>Quiero contactarme</button>
       
      </div>
      {/* imagen del header */}
      <div className='img-header-container'>
      <img className='header-img' src={miImagen} alt="Mi Imagen" />
      </div>
      
    </header>
    
  );
}

export default Header;
