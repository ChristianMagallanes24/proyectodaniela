import React from "react";
import foto from "../../assets/fotocontacto.png";
import "../Footer/Footer.scss";
import "../Contacto/_Contacto.scss";
import Footer from "../Footer/footer";

const Contacto = () => {
  return (
    <div>
      <div className="contacto-container">
        <div className="contacto-info">
          <h2 className="info-titulo">¡COMIENZA AHORA A CAMBIAR TU FUTURO!</h2>
          <button className="contacto-btn">Contactame</button>
          
        </div>

        <div className="contacto-img-container">
          <img className="contacto-img" src={foto} alt="foto" />
        </div>
      </div>

      
      <Footer />
      
    </div>
  );
};

export default Contacto;
