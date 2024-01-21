import React from "react";
import "../SobreNosotros/SobreNosotros.scss";

const SobreNosotros = () => {
  return (
    <div>
      <div className="descripcion">
        <h1>Sobre nosotros</h1>
        <p>
          Somos una organización virtual que se expande a nivel global
          ofreciendo servicios de capital humano para empresas. Nos respaldan 14
          años en el sector de capital humano dedicados a brindar servicios
          profesionales. Principalmente proveemos perfiles de colaboradores para
          aumentar el valor de tus experiencias como soluciones para mejorar tus
          estrategias en un marco de agilidad y disrupción.
        </p>
      </div>
      <div className="cuadros">
        <div className="cuadro">
          <h1>Misión</h1>
          <p>
            Brindar un servicio integral, personalizado y de calidad en el
            ámbito de capital humano, orientado a satisfacer tus necesidades y
            expectativas a través de soluciones que aporten valor a tus
            proyectos
          </p>
        </div>
        <div className="cuadro">
          <h1>Visión</h1>
          <p>
            Reconocimiento multiculturalmente por nuestra capacidad de apoyar
            tus necesidades de capital humano, contribuyendo al éxito
            organizacional y al bienestar de las personas.
          </p>
        </div>
        <div className="cuadro">
          <h1>Valores</h1>
          <p>
            Basados en la colaboración, el enfoque, la profesionalidad  y la
            responsabilidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
