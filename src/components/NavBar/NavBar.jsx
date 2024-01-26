import React, { useState } from "react";
import { Link } from "react-router-dom";
import miLogo from "../../assets/logo.png";
import "../../components/NavBar/_NavBar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // estado para el botón activo

  const handleButtonClick = (section) => {
    console.log(`Navegar a: ${section}`);
    setActiveSection(section);

    // Agregar lógica de navegación basada en el botón presionado

    // Scroll hacia arriba al hacer clic en un botón de navegación
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <Link to="/">
          <img className="logo" src={miLogo} alt="logo" />
        </Link>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link
          to="/"
          className={`nav-btn ${activeSection === "Inicio" && "active"}`}
          onClick={() => handleButtonClick("Inicio")}
        >
          Inicio
        </Link>
        <Link
          to="/Sobrenosotros"
          className={`nav-btn ${activeSection === "Bio" && "active"}`}
          onClick={() => handleButtonClick("Bio")}
        >
          Sobre nosotros
        </Link>
        <Link
          to="/servicios"
          className={`nav-btn ${activeSection === "Servicios" && "active"}`}
          onClick={() => handleButtonClick("Servicios")}
        >
          Servicios
        </Link>
        <Link
          to="/contacto"
          className={`nav-btn ${activeSection === "Contacto" && "active"}`}
          onClick={() => handleButtonClick("Contacto")}
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
