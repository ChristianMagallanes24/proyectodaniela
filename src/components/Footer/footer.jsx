import React from "react";
import logo from "../../assets/logo(2).png";
import fb from "../../assets/facebook.svg";
import lin from "../../assets/linkedin.svg";
import insta from "../../assets/instagram.svg";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <>
    <div className="footer-titulo-container">
    <h3 className="footer-titulo">¡Seguinos!</h3>
    </div>
     {/* footer contenedor padre */}
      <div id="footer-container">
      
      {/*contenedor para el titulo del footer*/}
     
     
     

      
         {/* contenedor padre para los iconos */}
       
         {/* contenedor que contiene los iconos */}
           <div className="iconos">
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
              <img  src={insta} alt="logo instagram" />
            </a>
            
            <a
              href="https://www.linkedin.com/company/daniela-vincenzini-rrhh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={lin} alt="logo linkedin" />
            </a>
           </div>
           </div>

           
           
           
            <h4 className="footer-info">talentos@dvincenzini.com</h4>
           
            
          </div>
          
          <div>
          

        </div>
        <div className="text">
          <img className="logo" src={logo} alt="logo daniela vincenzini" />
          <h5>©2024 por Daniela Vincenzini RRHH</h5>
        </div>
      
    </>
  );
};
export default Footer;
