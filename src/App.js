import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/NavBar";
import Nosotros from "./components/Nosotros/Nosotros";
import Servicios from "./components/Servicios/Servicios";
import Footer from "./components/Footer/footer";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Agrega una ruta específica para la página de inicio */}
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  );
}

// Nuevo componente para la página de inicio
function Inicio() {
  return (
    <div className="home">
      <Header />
      <Nosotros />
      <Footer />
    </div>
  );
}

export default App;
