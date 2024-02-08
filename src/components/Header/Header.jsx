import React from "react";
import "./_Header.scss";
import miImagen from "../../assets/headerimg.png";

const Header = () => {
  return (
    <header className="header">
      {/* Información del header */}
      <div className="header-info">
        <div className="header-text">
          <div>
            <h1 className="header-titulo">Conectamos talentos con empresas</h1>
          </div>

          <div>
            <p className="parrafo-header">
              Generamos soluciones de valor con compromiso, coraje, enfoque,
              apertura y respeto.
            </p>
          </div>
        </div>
        {/* <button className='btn-header'>Quiero contactarme</button> */}

        <a
          href="https://calendly.com/daniela_reuniones/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-header">Quiero contactarme</button>
        </a>
      </div>
      {/* imagen del header */}
      <div className="img-header-container">
        <img className="header-img" src={miImagen} alt="Mi Imagen" />
      </div>
    </header>
  );
};

export default Header;
