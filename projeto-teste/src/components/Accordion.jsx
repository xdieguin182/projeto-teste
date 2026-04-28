import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Aviso() {
  return (
    <div>
      <Accordion defaultActiveKey="0" className="w-50 mx-auto mt-5 mb-5 ps-5 p">
        <Accordion.Item eventKey="0">
          <Accordion.Header id="apresentacao">Apresentação</Accordion.Header>
          <Accordion.Body className="bg-dark text-light fs-6 ">
            Meu nome é Diego Martins, tenho 33 anos e sou estudante de Análise e
            Desenvolvimento de Sistemas. Este blog foi desenvolvido como parte
            do meu processo de aprendizado em desenvolvimento web, com o
            objetivo de aplicar, na prática, os conhecimentos adquiridos ao
            longo da minha formação. O projeto reúne conceitos de estruturação,
            estilização e interatividade, servindo como um espaço de
            experimentação e evolução contínua. Além do aspecto técnico, o
            conteúdo do blog reflete um interesse pessoal: compartilhar
            histórias sobre meus gatos, unindo assim prática profissional e
            motivação pessoal. Este projeto representa não apenas meu progresso
            na área de tecnologia, mas também meu comprometimento com o
            aprendizado constante e o desenvolvimento de novas habilidades. 🐾🌟
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header id="sobre">Sobre</Accordion.Header>
          <Accordion.Body className="bg-dark text-light fs-6 ">
            Aqui você poderá conhecer a forma como expresso meu carinho por cada
            um dos meus pequenos companheiros, acompanhando histórias que
            traduzem essa conexão tão especial. Convido você a embarcar comigo
            nessa jornada, repleta de momentos únicos e cheios de significado.
            Espero que aproveite a experiência e se encante com essas fofuras.
            Um grande abraço e meu sincero agradecimento pela visita!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Aviso;
