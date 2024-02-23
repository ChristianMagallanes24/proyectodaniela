// Servicios.jsx
import React, { useEffect } from "react";
import Footer from "../Footer/footer";
import miImagen from "../../assets/imgservicios.png";
import miUnion from "../../assets/union.svg";
import miCapa from "../../assets/capa.svg";
import miLibro from "../../assets/libro.svg";

import "./_Servicios.scss";

const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="servicios-container">
      <header className="header-servicios">
        <div className="header-text">
          <h2 className="servicios-titulo">Nuestros servicios</h2>
        </div>
        <div className="header-img-container">
          <img className="header-img" src={miImagen} alt="Mi Imagen" />
        </div>
      </header>

      <section className="servicios-section">
        <div className="servicios">
          <div className="servicio">
            <img className="servicio-img" src={miUnion} alt="Mi Imagen" />
            <div>
              <h3 className="servicio-titulo">Servicios de recruiting</h3>
              <p className="servicio-parrafo">
                <p><span className="check">▣</span> Ofrecemos servicios de reclutamiento personalizados que se
                adaptan a tus necesidades y perfil.</p>
                <p><span className="check">▣</span> Nuestro servicio es 100%
                personalizado a éxito, de calidad, basado en el conocimiento del
                mercado, en la confianza y transparencia. Garantizamos que
                encontrarás lo que buscas.</p>
              </p>
            </div>
          </div>
          <div className="servicio">
            <img className="servicio-img" src={miCapa} alt="Mi Imagen" />
            <div>
              <h3 className="servicio-titulo">
                Consultoría organizacional y capital humano
              </h3>
              <p className="servicio-parrafo2">
                <p><span className="check">▣</span> Informes psicológicos, grafológicos o por competencias.</p> 
                <p><span className="check">▣</span> Valoración de puestos. Sistemas de beneficios y compensaciones.</p>
                <p><span className="check">▣</span> Formación y desarrollo. Nóminas y seguridad social.</p>
                <p><span className="check">▣</span> Reestructuración organizacional. Cápsulas HR new</p>
                
              </p>
            </div>
          </div>
          <div className="servicio">
            <img className="servicio-img" src={miLibro} alt="Mi Imagen" />
            <div>
              <h3 className="servicio-titulo">
                Asesoramiento y coaching laboral
              </h3>
              <p className="servicio-parrafo">
                <p><span className="check">▣</span> Proceso de acompañamiento y desarrollo personalizado para
                organizaciones.  </p>
                <p><span className="check">▣</span> Identificación de objetivos, superación de
                desafíos y mejoramiento de habilidades, competencias y
                rendimiento en el entorno laboral.</p>
                <p> <span className="check">▣</span> Ayudamos a potenciar a las
                organizaciones a aprovechar al máximo su capital humano, a
                mantenerse ágiles y receptivas ante los desafíos del mercado.</p>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="accion">
        <div className="accion-contenido">
          <h3 className="accion-titulo">
            ¡COMIENZA AHORA A CAMBIAR TU FUTURO!
          </h3>
          <a
            href=" https://docs.google.com/forms/d/e/1FAIpQLSe7O8i2naJoDF9AyqEP_ikHXwh8_zQku_-9Hf59-MdJfboZgA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="accion-btn">Postularme</button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Servicios;
