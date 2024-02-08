import React from "react";
import horn from "../../assets/horn.png";
import frame from "../../assets/Frame.png";

import myNosotros from "../../assets/nosotros.jpeg";
import { Link } from "react-router-dom";

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
            Somos una organización virtual que se expande a nivel global
            ofreciendo servicios de capital humano para empresas.
          </p>
          <Link to="/sobreNosotros" className="btn-nosotros">
            Saber mas
          </Link>
        </div>
      </div>

      {/* información sobre datos y experiencia */}

      <div className="nosotros-datos-container">
        <div className="nosotros-numeros">
          <div className="nosotros-numeros-titulo">
            {" "}
            Los números hablan sobre nosotros...
          </div>
          <div className="seisk">+ 6K</div>
          <div className="nosotros-numeros-descripcion">
            De personas reclutadas en 14 años de experiencia que nos avalan
          </div>
        </div>

        <div className="nosotros-puestos">
          <div className="nosotros-puestos-arriba">
            <button className="btn-puestos">#IngenieroSoftware</button>
            <button className="btn-puestos">#AnalisisDeDatos</button>
            <img className="puntitos" src={frame} alt="imagen decorativa" />
          </div>

          <div className="nosotros-puestos-abajo">
            <img src={horn} alt="imagen bocina" />
            <button className="btn-puestos">#DiseñoUXUI</button>
          </div>
        </div>
      </div>

      {/* que ofrecemos que va en el "inicio" */}
      <h1 className="titulo">¿Qué hacemos?</h1>
      <div className="que-ofrecemos-container">
        <div className="que-ofrecemos">
          <div className="que-ofrecemos-card">
            <div className="que-ofrecemos-card-text">
              <h1 className="que-ofrecemos-titulo">
                Reclutamiento y Selección
              </h1>
              <p className="que-ofrecemos-parrafo">
                Definimos el perfil del colaborador, reconocemos las
                necesidades e iniciamos la búsqueda.
              </p>
            </div>
          </div>

          <div className="que-ofrecemos-card">
            <div className="que-ofrecemos-card-text">
              <h1 className="que-ofrecemos-titulo">
                Consultoría organizacional y recursos humanos
              </h1>
              <p className="que-ofrecemos-parrafo">
                Asesoría especializada en atracción del talento, onboarding,
                capacitación, desarrollo, clima, felicidad laboral,
                administración de personal.
              </p>
            </div>
          </div>

          <div className="que-ofrecemos-card">
            <div className="que-ofrecemos-card-text">
              <h1 className="que-ofrecemos-titulo">
                Consulta inicial e intervensiones sistémicas
              </h1>
              <p className="que-ofrecemos-parrafo">
                Estamos para escucharte, ayudarte con los procesos que impliquen
                decisiones importantes, clima, liderazgo.
              </p>
            </div>
          </div>
        </div>
        <div className="que-ofrecemos-card-btn-container">
          <Link to={"/Servicios"} style={{ textDecoration: "none" }}>
          <button className="que-ofrecemos-btn">Saber mas</button></Link>
        </div>
      </div>
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
    </div>
  );
};

export default Nosotros;
