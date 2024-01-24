import React from "react";
import myGoals from "../../assets/goals.png";
import myDiamond from "../../assets/Diamond.png";
import myVision from "../../assets/Vision.png";
import myNosotros from "../../assets/nosotros.jpeg";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <div className="sobre-nosotros">
        {/* Imagen para nosotros */}
        <div className="nosotros-img-container">
          <img className="nosotros-img" src={myNosotros} alt="xd" />
        </div>

        {/* sobre nosotros informacion "inicio" */}
        <div className="nosotros-info">
          <h2 className="nosotros-titulo">Sobre nosotros</h2>
          <p className="nosotros-parrafo">
            Somos una Organización Global dedicada a brindar Servicios
            Profesionales de Recursos Humanos de perfiles IT y
            generalistas,adaptados a la necesidad de cada Cliente. 
          </p>
          <button className="btn-nosotros">Saber más</button>
        </div>
      </div>

      <div className="nosotros-iconos-container">
        <div className="nosotros-iconos">
          <img src={myGoals} alt="xd" />
          <h3 className="iconos-titulo">Mision</h3>
          <p className="nosotros-iconos-p">Servicio de calidad</p>
        </div>
        <div className="nosotros-iconos">
          <img src={myDiamond} alt="xd" />
          <h3 className="iconos-titulo">Vision</h3>
          <p className="nosotros-iconos-p">Reconocimiento</p>
        </div>
        <div className="nosotros-iconos">
          <img src={myVision} alt="xd" />
          <h3 className="iconos-titulo">Valores</h3>
          <p className="nosotros-iconos-p">Profesionalismo</p>
        </div>
      </div>

      {/* que ofrecemos que va en el "inicio" */}

      <div className="que-ofrecemos-container">
        
          <h1 className="titulo">¿Qué ofrecemos?</h1>
       

        <div className="que-ofrecemos">
          <div className="que-ofrecemos-card">
            <div className="que-ofrecemos-card-text">
              <h1 className="que-ofrecemos-titulo">
              Reclutamiento y Selección
              </h1>
              <p className="que-ofrecemos-parrafo">
              Definimos el perfil del colaborador, reconocemos las necesidades e iniciamos la búsqueda.
              </p>
            </div>
            <div className="que-ofrecemos-card-btn-container">
              <button className="que-ofrecemos-btn">Saber mas</button>
            </div>
          </div>

          <div className="que-ofrecemos-card">
            <div className="que-ofrecemos-card-text">
              <h1 className="que-ofrecemos-titulo">
                Consultoría organizaicional y recursos humanos
              </h1>
              <p className="que-ofrecemos-parrafo">
              Asesoría especializada en atracción del talento, onboarding, capacitación, desarrollo, clima, felicidad laboral, administración de personal.
              </p>
            </div>
            <div className="que-ofrecemos-card-btn-container">
              <button className="que-ofrecemos-btn">Saber mas</button>
            </div>
          </div>

          <div className="que-ofrecemos-card">
            <div className="que-ofrecemos-card-text">
              <h1 className="que-ofrecemos-titulo">
              Consulta inicial e intervensiones sistémicas
              </h1>
              <p className="que-ofrecemos-parrafo">
              Estamos para escucharte, ayudarte con los procesos que impliquen decisiones importantes, clima, liderazgo.
              </p>
            </div>
            <div className="que-ofrecemos-card-btn-container">
              <button className="que-ofrecemos-btn">Saber mas</button>
            </div>
          </div>
        </div>
      </div>
      <div className="accion">
        <div className="accion-contenido">
          <h3 className="accion-titulo">
            ¡COMIENZA AHORA A CAMBIAR TU FUTURO!
          </h3>
          <button className="accion-btn">Postularme</button>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
