import React from "react";
import wp from "../../assets/whatsapp.svg";
import fb from "../../assets/facebook.svg";
import lin from "../../assets/linkedin.svg";
import insta from "../../assets/instagram.svg";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <>
      <div id="footer-container">
        <div className="titulo-footer">
          <h2>¡Comienza ahora a cambiar tu futuro!</h2>

          <button className="postularme">Postularme</button>
        </div>
        <div className="icons-container">
          <h3>¡Seguinos!</h3>

          <div className="icons">
            <a href="https://api.whatsapp.com/send?phone=5491153657218">
              <img src={wp} alt="logo whatsapp" />
            </a>

            <a href="https://www.linkedin.com/company/daniela-vincenzini-rrhh/">
              <img src={lin} alt="logo linkedin" />
            </a>

            <a href="https://web.facebook.com/danielavincenziniHR?_rdc=1&_rdr">
              <img src={fb} alt="logo facebook" />
            </a>

            <a href="https://www.instagram.com/danielavincenzini/">
              <img src={insta} alt="logo instagram" />
            </a>
          </div>
        </div>
        <div className="text">
          <h1>created by coderteam</h1>
        </div>
      </div>
    </>
  );
};
export default Footer;
