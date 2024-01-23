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

        {/* sobre nosotros informacion */}
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
          <h3>Mision</h3>
          <p className="nosotros-iconos-p">Servicio de calidad</p>
        </div>
        <div className="nosotros-iconos">
          <img src={myDiamond} alt="xd" />
          <h3>Vision</h3>
          <p className="nosotros-iconos-p">Reconocimiento</p>
        </div>
        <div className="nosotros-iconos">
          <img src={myVision} alt="xd" />
          <h3>Valores</h3>
          <p className="nosotros-iconos-p">Profesionalismo</p>
        </div>
      </div>
      <div className="descripcion">
        <h1>¿Qué ofrecemos?</h1>
      </div>
      <div className="cuadros">
        <div className="cuadro">
          <h1>Reclutamiento y Selección</h1>
          <p>
            Definimos el perfil del colaborador, reconocemos las necesidades e
            iniciamos la búsqueda.
          </p>
          <button className="btn-saber-mas">Saber mas</button>
        </div>
        <div className="cuadro">
          <h1>Consultoría organizaicional y recursos humanos</h1>
          <p>
            Asesoría especializada en atracción del talento, onboarding,
            capacitación, desarrollo, clima, felicidad laboral, administración
            de personal.
          </p>
          <button className="btn-saber-mas">Saber mas</button>
        </div>
        <div className="cuadro">
          <h1>Consulta inicial e intervensiones sistémicas</h1>
          <p>
            Estamos para escucharte, ayudarte con los procesos que impliquen
            decisiones importantes, clima, liderazgo.
          </p>
          <button className="btn-saber-mas">Saber mas</button>
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
