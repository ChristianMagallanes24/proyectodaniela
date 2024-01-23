import React from "react";
import logo from "../../assets/logo.svg";
import fb from "../../assets/facebook.svg";
import lin from "../../assets/linkedin.svg";
import insta from "../../assets/instagram.svg";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <>
      <div id="footer-container">
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
            <h4>Email</h4>
            <h4>talentos@dvincenzini</h4>
          </div>
        </div>
        <div className="text">
          <img className="logo" src={logo} alt="logo daniela vincenzini" />
          <h5>©2024 por Daniela Vincenzini RRHH</h5>
        </div>
      </div>
    </>
  );
};
export default Footer;
