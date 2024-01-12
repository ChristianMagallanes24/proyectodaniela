import React from 'react';
import miHero from '../../assets/hero2.jpeg';

const Header = () => {
  return (
    <header className='header'>
      <img className='hero' src={miHero} alt="hero" />
      <div className='header-info'>
        <h1 className='titulo'>Conectamos tu talento con las empresas</h1>
        <p className='parrafo-header'>Lorem ipsum dolor sit amet consectetur. Placerat massa morbi scelerisque.</p>
      </div>
      <div>
      </div>
    </header>
  );
}

export default Header;
