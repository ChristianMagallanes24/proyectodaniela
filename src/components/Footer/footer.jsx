import React from "react";
import logo from "../../assets/logo(2).png";
import fb from "../../assets/facebook.svg";
import lin from "../../assets/linkedin.svg";
import insta from "../../assets/instagram.svg";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      {/* footer contenedor padre */}

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

      {/*contenedor para el logo final*/}
      <div className="text">
        <img className="logo" src={logo} alt="logo daniela vincenzini" />
        <h5>©2024 por Daniela Vincenzini RRHH</h5>
      </div>
    </footer>
  );
};
export default Footer;
