import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ModalUsuario from "./ModalUsuario";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  

  
  function entrar(e) {
    e.preventDefault();

    const usuario = {
      nome: nome,
      email: email,
    };
    console.log(usuario);
    setShowModal(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  localStorage.setItem("usuario", nome);
    

  return (   
    <> 
    <h1 className="d-flex justify-content-center align-items-center mt-5 mb-0 text-primary">Faça seu login</h1>
    <div className="container-formulario d-flex justify-content-center align-items-center mt-1">
      
      <Form
        className="formulario w-25 border rounded-4 p-3 bg-light"
        onSubmit={entrar}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome"
            onChange={(value) => setNome(value.target.value)}
          />

          <Form.Text className="text-muted">
            Não divulgaremos seus dados
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            onChange={(value) => setEmail(value.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Lembrar" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Entrar
        </Button>
        <ModalUsuario
          mostrar={showModal}
          esconder={() => setShowModal(false)}
        />
      </Form>
    </div>
    </>
  );
}

export default Formulario;
