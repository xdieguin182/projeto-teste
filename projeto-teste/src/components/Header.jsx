import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";


function Header() {
  const usuario = localStorage.getItem("usuario");
  

  return (
    <div className="menu">
      <Navbar expand="lg" bg="primary" variant="light">
        <Container>
          <Navbar.Brand className="titulo d-flex align-items-center gap-2 fs-1 text-light me-auto ms-3">
            BloGatos
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-nav-bar" />
          <Navbar.Collapse className="justify-content-end" id="basic-nav-bar">
            <Nav className="fs-5">
              <Nav.Link className="text-light fs-4" href="#apresentacao">
                Início
              </Nav.Link>
              <Nav.Link className="text-light fs-4" href="#sobre">
                Sobre
              </Nav.Link>

              <Navbar.Text className="d-flex align-items-center gap-2 fs-1 text-light me-auto ms-5">
                <p className="text-light fs-6 mb-0 me-0">Usuário: <strong>{usuario}</strong></p>
              </Navbar.Text>

              <NavDropdown className="fs-5" title="" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Sair</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
