import React from "react";
import logo from "../../assets/logoblanco.png";
import fb from "../../assets/facebook.svg";
import lin from "../../assets/linkedin.svg";
import insta from "../../assets/instagram.svg";
import foto from "../../assets/fotocontacto.png";
import "../Footer/Footer.scss";
import "../Contacto/_Contacto.scss";

const Contacto = () => {
  return (
    <>
      <div className="contacto-container">
        <div className="contacto-redes">
          <div className="contacto-titulo">
            <h1>¡Comienza ahora a cambiar tu futuro!</h1>
            <button className="btn-contacto">Contactame</button>
          </div>

          <div className="icons-container">
            <h3>¡Seguinos!</h3>

            <div className="icons">
              <a
                href="https://www.linkedin.com/company/daniela-vincenzini-rrhh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={lin} alt="logo linkedin" />
              </a>

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
            </div>
            <h4>Email</h4>
            <h4>talentos@dvincenzini</h4>
          </div>
        </div>

        <img src={foto} alt="imagen-contacto" />
      </div>

      <div className="text">
        <img className="logo" src={logo} alt="logo daniela vincenzini" />
        <h5>©2024 por Daniela Vincenzini RRHH</h5>
      </div>
    </>
  );
};

export default Contacto;
