import React from "react";
import horn from "../../assets/horn.png";
import frame from "../../assets/Frame.png";
import elipse from "../../assets/elipse.png";
import vectortransp from "../../assets/vectortransp.png";
import vectortransparente from "../../assets/vectortransparente.png";
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

      {/* información sobre datos y perfiles */}

      <div className="nosotros-datos-container">
        <div className="nosotros-numeros">
          <img src={vectortransp} alt="vector fondo" />
          <div className="anios">14 años</div>
          <div className="nosotros-numeros-descripcion">
            De experiencia reclutando perfiles que nos avalan
          </div>
        </div>

        <div className="nosotros-puestos">
          <div className="nosotros-puestos-arriba">
            <div className="nosotros-puestos-titulo">
              <h4>Perfiles IT</h4>
            </div>

            <button className="btn-puestos">#Ciberseguridad</button>
            <button className="btn-puestos">UXUI</button>
            <button className="btn-puestos">#AgileCoach</button>
            <button className="btn-puestos">#SoftwareArchitects</button>
            <button className="btn-puestos">#IA</button>
            <button className="btn-puestos">#Developers</button>
            <img className="puntitos" src={frame} alt="imagen decorativa" />
          </div>

          <div className="nosotros-puestos-abajo">
            <div className="nosotros-puestos-titulo">
              <h4>Perfiles Generalistas</h4>
            </div>
            <button className="btn-puestos">#Comerciales</button>
            <button className="btn-puestos">#Analistas</button>
            <button className="btn-puestos">#Administrativos</button>
            <button className="btn-puestos">#Secretarios</button>
            <button className="btn-puestos">#Docentes</button>
            <button className="btn-puestos">#LideresDeAreas</button>
          </div>
        </div>
      </div>

      {/* que acemos div */}
      <div className="que-hacemos-container">
        <div className="que-hacemos-izq">
          <img
            className="vector-izq-fondo"
            src={frame}
            alt="imagen decorativa"
          />
        </div>

        <div className="que-hacemos-central">
          <img className="fondo-elipse" src={elipse} alt="imagen decorativa" />
          <h1 className="titulo">¿Qué hacemos?</h1>
          <p>
            En el mundo actual, la tecnología es un factor clave para el éxito
            de cualquier empresa. Por eso, desde nuestra organización, estamos
            siempre buscando a los mejores profesionales del sector, que nos
            ayuden a innovar y a ofrecer soluciones de calidad a nuestros
            clientes.
          </p>

          <Link to={"/Servicios"} style={{ textDecoration: "none" }}>
            <button className="btn-nosotros">Saber mas</button>
          </Link>
        </div>

        <div className="que-hacemos-der">
          <img
            className="vector-der-fondo"
            src={vectortransparente}
            alt="imagen decorativa"
          />
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
