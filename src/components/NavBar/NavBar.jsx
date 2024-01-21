import React, { useState } from "react";
import miLogo from "../../assets/logo.png";
import "../../components/NavBar/_NavBar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); //  estado para el botón activo

  const handleButtonClick = (section) => {
    console.log(`Navegar a: ${section}`);
    setActiveSection(section);
    // agregar lógica de navegación basada en el botón presionado
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img className="logo" src={miLogo} alt="logo" />
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <button
          className={`nav-btn ${activeSection === "Inicio" && "active"}`}
          type="button"
          onClick={() => handleButtonClick("Inicio")}
        >
          Inicio
        </button>
        <button
          className={`nav-btn ${activeSection === "Bio" && "active"}`}
          type="button"
          onClick={() => handleButtonClick("Bio")}
        >
          Sobre nosotros
        </button>
        <button
          className={`nav-btn ${activeSection === "Portafolio" && "active"}`}
          type="button"
          onClick={() => handleButtonClick("Portafolio")}
        >
          Servicios
        </button>
        <button
          className={`nav-btn ${activeSection === "Contacto" && "active"}`}
          type="button"
          onClick={() => handleButtonClick("Contacto")}
        >
          Contacto
        </button>
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
