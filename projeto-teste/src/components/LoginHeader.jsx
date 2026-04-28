import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { FaCat } from "react-icons/fa";

export default function LoginHeader() {
  return (
    <div className="menu">
      <Navbar expand="lg" bg="primary" variant="light">
        <Navbar.Brand className="titulo d-flex align-items-center gap-2 fs-1 text-light me-auto ms-3">
          BloGatos
          <FaCat className="text-dark" />{" "}
        </Navbar.Brand>
        <Navbar.Text className="subtitulo fs-6 text-light  translate-middle-x">
          O seu blog de gatos
        </Navbar.Text>
        <Navbar.Text className="subtitulo fs-4 text-light position-absolute start-50 translate-middle-x">
          Seja bem Vindo!
        </Navbar.Text>
      </Navbar>
    </div>
  );
}
