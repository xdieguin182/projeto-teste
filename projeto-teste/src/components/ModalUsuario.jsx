import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalUsuario({ mostrar, esconder }) {

  const usuario = localStorage.getItem("usuario");

  return (
    <Modal show={mostrar} onHide={esconder}>
      <Modal.Header closeButton>
        <Modal.Title>Olá, <strong>{usuario}</strong></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5 className="text-center ">Bem vindo ao <strong>BloGatos!</strong></h5>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={esconder} variant="secondary">
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
