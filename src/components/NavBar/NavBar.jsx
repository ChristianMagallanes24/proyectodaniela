import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import miLogo from "../../assets/logo.png";
import "../../components/NavBar/_NavBar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    // Desplázate hacia arriba de manera suave con una duración más corta
    scroll.scrollToTop({
      duration: 300, // Duración de la animación en milisegundos
      smooth: "easeInOutQuart", // Función de animación suave
    });
  };

  useEffect(() => {
    // Cierra el menú cuando cambias de página
    setIsOpen(false);

    // Desplázate hacia arriba de manera instantánea después de la transición de la página
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="navbar">
      <div className="nav_logo">
        <Link to="/" onClick={() => scrollToTop()}>
          <img className="logo" src={miLogo} alt="logo" />
        </Link>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link
          to="/"
          className={`nav-btn ${location.pathname === "/" && "active"}`}
          onClick={() => {
            handleButtonClick();
            scrollToTop();
          }}
        >
          Inicio
        </Link>
        <Link
          to="/sobreNosotros"
          className={`nav-btn ${
            location.pathname === "/sobreNosotros" && "active"
          }`}
          onClick={() => {
            handleButtonClick();
            scrollToTop();
          }}
        >
          Sobre nosotros
        </Link>
        <Link
          to="/servicios"
          className={`nav-btn ${
            location.pathname === "/servicios" && "active"
          }`}
          onClick={() => {
            handleButtonClick();
            scrollToTop();
          }}
        >
          Servicios
        </Link>
        <Link
          to="/contacto"
          className={`nav-btn ${location.pathname === "/contacto" && "active"}`}
          onClick={() => {
            handleButtonClick();
            scrollToTop();
          }}
        >
          Contacto
        </Link>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
