import React from "react";
import foto from "../../assets/fotocontacto.png";
import fotocomb from "../../assets/contacto1.png";

import "../Contacto/_Contacto.scss";
import logo from "../../assets/logo(2).png";
import fb from "../../assets/facebook.svg";
import lin from "../../assets/linkedin.svg";
import insta from "../../assets/instagram.svg";
import "../Footer/Footer.scss";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-body">
        
        <div className="contacto-info-redes">
          <div className="contacto-info">
            <h2 className="info-titulo">¡Da el primer paso!</h2>
            <a
              href=" https://docs.google.com/forms/d/e/1FAIpQLSe7O8i2naJoDF9AyqEP_ikHXwh8_zQku_-9Hf59-MdJfboZgA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="postularme-btn">Postularme</button>
            </a>
            <a
              href="https://calendly.com/daniela_reuniones/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contacto-btn">Quiero contactarme</button>
            </a>
          </div>

          <div className="footer-iconos-mail">
            {/*  contenedor titulo */}
            <div>
              <h3 className="footer-titulo">¡Seguinos!</h3>
            </div>

            {/*contenedor para las redes*/}
            <div className="icons">
              <a
                href="https://web.facebook.com/danielavincenziniHR?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="logo facebook" />
              </a>

              <a
                href="https://www.instagram.com/danielavincenzini/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="logo instagram" />
              </a>

              <a
                href="https://www.linkedin.com/company/daniela-vincenzini-rrhh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={lin} alt="logo linkedin" />
              </a>
            </div>

            {/*contenedor para el mail*/}

            <div>
              <h4 className="footer-info">talentos@dvincenzini.com</h4>
            </div>
          </div>
        </div>

        <div className="contacto-img-container">
          <img className="contacto-img" src={foto} alt="foto" />
          <img className="contacto-img-comb" src={fotocomb} alt="foto" />
        </div>
      </div>

      <div className="text">
        <img className="logo" src={logo} alt="logo daniela vincenzini" />
        <h5>©2024 por Daniela Vincenzini RRHH</h5>
      </div>
    </div>
  );
};

export default Contacto;
