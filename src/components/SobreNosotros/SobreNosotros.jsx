import React, { useEffect } from "react";

import "../SobreNosotros/SobreNosotros.scss";
import Footer from "../Footer/footer";
import myGoals from "../../assets/goals.svg";
import myDiamond from "../../assets/Diamond.png";
import myVision from "../../assets/Vision.png";
const SobreNosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Hacer scroll al principio de la página al cargar el componente
  }, []);

  return (
    <div className="sobre-nosotros-pagina">
      <div className="sobre-nosotros-container">
        {/* sobre nosotros "pagina" */}
        <div className="sobre-nosotros-descripcion">
          {/* sobre nosotros primera parte */}

          <h1 className="descripcion-titulo">Sobre nosotros</h1>
          <div className="descripcion">
            <p className="descripcion-parrafo">
              Somos una organización virtual que se expande a nivel global
              ofreciendo servicios de capital humano para empresas. Nos
              respaldan 14 años en el sector de capital humano dedicados a
              brindar servicios profesionales. Principalmente proveemos perfiles
              de colaboradores para aumentar el valor de tus experiencias como
              soluciones para mejorar tus estrategias en un marco de agilidad y
              disrupción.
            </p>
          </div>
        </div>
       
        

        <div className="cuadros">
          {/* correjir lo siguiente para que quede bien estructurado */}

          <div className="cuadro">
            
            <div className="titulo-container">
            <h1 className="cuadro-titulo">Misión</h1>
            <img className="cuadro-img" src={myGoals} alt="a" />
            </div>
            <div className="cuadro-info">
              <p className="cuadro-parrafo">
                Brindar un servicio personalizado y de calidad en el ámbito de
                capital humano, orientado a satisfacer tus necesidades y
                expectativas a través de soluciones que aporten valor a tus
                proyectos enmarcado en el conocimiento del mercado y la agilidad
                de los procesos acompañándote de manera integral.
              </p>
            </div>
            {/*lo de arriba */}
          </div>

          <div className="cuadro">
          <div className="titulo-container2">
            <h1 className="cuadro-titulo2">Vision</h1>
            <img className="cuadro-img3" src={myVision} alt="a" />
            </div>
            <div className="cuadro-info">
              <p className="cuadro-parrafo">
                Ser reconocidos multiculturalmente por nuestra capacidad de
                apoyar tus <br /> necesidades de capital humano, contribuyendo al éxito
                organizacional y al bienestar de las personas.
              </p>
            </div>
          </div>

          <div className="cuadro">
            <div className="titulo-container">
            <img className="cuadro-img3" src={myDiamond} alt="a" />
            <h1 className="cuadro-titulo">Valores</h1>
            
            </div>
            <div className="cuadro-info">
              <p className="cuadro-parrafo">
                Se sustentan de acciones de <span>colaboración, enfoque,
                profesionalidad y responsabilidad.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SobreNosotros;
