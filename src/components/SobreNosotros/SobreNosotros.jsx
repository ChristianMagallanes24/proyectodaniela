import React, { useEffect } from "react";

import "../SobreNosotros/SobreNosotros.scss";
import Footer from "../Footer/footer";
import myGoals from "../../assets/goals.png";
import myDiamond from "../../assets/Diamond.png";
import myVision from "../../assets/Vision.png";
const SobreNosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Hacer scroll al principio de la página al cargar el componente
  }, []);

  return (
    <div className="sobre-nosotros-container">
      <div className="sobre-nosotros">
        {/* sobre nosotros "pagina" */}
        <h1 className="descripcion-titulo">Sobre nosotros</h1>
        <div className="descripcion">
          <p className="descripcion-parrafo">
            Somos una organización virtual que se expande a nivel global
            ofreciendo servicios de capital humano para empresas. Nos respaldan
            14 años en el sector de capital humano dedicados a brindar servicios
            profesionales. Principalmente proveemos perfiles de colaboradores
            para aumentar el valor de tus experiencias como soluciones para
            mejorar tus estrategias en un marco de agilidad y disrupción.
          </p>
        </div>
      </div>

      <div className="cuadros">
        {/* correjir lo siguiente para que quede bien estructurado */}
        <div className="lol">
          <img className="img-cuadro" src={myGoals} alt="xd" />
          <div className="cuadro">
            <h1 className="cuadro-titulo">Misión</h1>
            <div className="cuadro-info">
              <p className="cuadro-parrafo">
                Brindar un servicio integral, personalizado y de calidad en el
                ámbito de capital humano, orientado a satisfacer tus necesidades
                y expectativas a través de soluciones que aporten valor a tus
                proyectos
              </p>
            </div>
          </div>
          {/*lo de arriba */}
        </div>

        <div className="lol">
          <img className="img-cuadro" src={myVision} alt="xd" />
          <div className="cuadro">
            <h1 className="cuadro-titulo">Visión</h1>
            <div className="cuadro-info">
              <p className="cuadro-parrafo">
                Reconocimiento multiculturalmente por nuestra capacidad de
                apoyar tus necesidades de capital humano, contribuyendo al éxito
                organizacional y al bienestar de las personas.
              </p>
            </div>
          </div>
        </div>

        <div className="lol">
          <img className="img-cuadro" src={myDiamond} alt="xd" />
          <div className="cuadro">
            <h1 className="cuadro-titulo">Valores</h1>
            <div className="cuadro-info">
              <p className="cuadro-parrafo">
                Basados en la colaboración, el enfoque, la profesionalidad  y la
                responsabilidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SobreNosotros;
