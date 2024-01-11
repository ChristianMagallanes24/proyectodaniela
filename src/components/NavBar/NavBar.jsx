import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import miLogo from "../../assets/logo.png";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-light" fixed='top' sticky='top'>
      <Container>
        {/* Quita las comillas alrededor de {miLogo} */}
        <Navbar.Brand href="#home"> <img className='logo' src={miLogo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto links">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Sobre nosotros</Nav.Link>
            <Nav.Link href="#link">Servicios</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
