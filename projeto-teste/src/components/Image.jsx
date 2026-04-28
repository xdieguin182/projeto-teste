import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import React from "react";

function ImagemGatos() {
  return (
    <Container className="mb-3 mt-3">
      <Row>
        <Col xs={6} md={3}>
          <h5 className="nome-fotos text-center text-light align-items-center">
            Bucky
          </h5>

          <div className="imagem-wrapper">
            <Image src="/bucky.jpeg" thumbnail className="fotos" />
            <div className="overlay text-light ps-0 pt-2 p-3">
              <ul>
                <li>Seu nome é em homenagem ao herói da Marvel</li>
                <li>Bucky foi resgatado na rua com 1 mês de vida</li>
                <li>Quando era pequeno era bravo mas cresceu e ficou medroso</li>
                <li>Já pulou de uma altura muito alta para fugir de humanos</li>        
              </ul>
            </div>
          </div>
        </Col>

        <Col xs={6} md={3}>
          <h5 className="nome-fotos text-center text-light align-items-center">
            Leone
          </h5>

          <div className="imagem-wrapper">
            <Image src="/leone.jpeg" thumbnail className="fotos" />

            <div className="overlay text-light ps-0 pt-2 p-3">
                            <ul>
                <li>Foi adotado com poucos dias de vida</li>
                <li>Ainda não é castrado</li>
                <li>Ele gosta de implicar com a Estrela</li>
                <li>Se você pedir a pata ele oferece</li>
                <li>Ele é mais magro do que parece ser</li>
                <li>É o unico gato de raça</li>
              </ul>
            </div>
          </div>
        </Col>

        <Col xs={6} md={3}>
          <h5 className="nome-fotos text-center text-light align-items-center">
            Estrela
          </h5>
          <div className="imagem-wrapper">
            <Image src="/estrela.jpeg" thumbnail className="fotos" />

            <div className="overlay text-light ps-0 pt-2 p-3">
                           <ul>
                <li>Estrela é muito brava</li>
                <li>Pesa em torno de uns 8Kg</li>
                <li>Quando foi adotada era totalmente branca</li>
                <li>É a mais velha de todos</li>
                <li>É pidona</li>
                <li>Dorme em qualquer lugar</li>
              </ul>
            </div>
          </div>
        </Col>

        <Col xs={6} md={3}>
          <h5 className="nome-fotos text-center text-light align-items-center">
            Tchuba
          </h5>
          <div className="imagem-wrapper">
            <Image src="/tchuba.jpeg" thumbnail className="fotos" />

            <div className="overlay text-light ps-0 pt-2 p-3">
                            <ul>
                <li>Seu nome é em homeagem ao personagem Chewbacca</li>
                <li>Era muito brava mas ao mesmo tempo amorosa</li>
                <li>Gostava de caçar</li>
                <li>Fazia suas necessidades em locais inapropriados</li>
                <li>Foi resgatada da rua</li>
                <li>Era pidona</li>
                <li>Faleceu em 2024 por complicações renais</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <h5 className="nome-fotos text-center text-light align-items-center mt-3">
            Gannicus
          </h5>

          <div className="imagem-wrapper">
            <Image src="/gannicus.jpeg" thumbnail className="fotos" />

            <div className="overlay text-light ps-0 pt-2 p-3">
              <ul>
                <li>Seu nome é em homenagem ao Gannicus de SPARTACUS</li>
                <li>Seu antes de ser adotado era TOM</li>
                <li>Quem deveria se chamar Gannicus era o Gau</li>
                <li>Tem uma manchinha branca de pelos nas costas</li>
                <li>Sua patinha esquerda lembra um braço com tatuagem</li>
                <li>Mija a casa toda</li>
                <li>Já mergulhou em uma caixa d'agua cheia</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <h5 className="nome-fotos text-center text-light align-items-center mt-3">
            Gau
          </h5>
          <div className="imagem-wrapper">
            <Image src="/gau.jpeg" thumbnail className="fotos" />

            <div className="overlay text-light ps-0 pt-2 p-3">
              <ul>
                <li>Seu nome é em homenagem ao streamer Gaulês</li>
                <li>Gostava de lamber danone</li>
                <li>Gostava de brincar com laser</li>
                <li>Era muito apegado pela sua irmã Kate</li>
                <li>Ele tinha cravos na parte de baixo do queixo</li>
                <li>Era muito carinhoso</li>
                <li>Faleceu em 2023 por complicações no estomago</li>
              </ul>
            </div>
          </div>
        </Col>

        <Col xs={6} md={3}>
          <h5 className="nome-fotos text-center text-light align-items-center mt-3">
            Kate
          </h5>
          <div className="imagem-wrapper">
            <Image src="/kate.jpeg" thumbnail className="fotos" />

            <div className="overlay text-light ps-0 pt-2 p-3">
              <ul>
                <li>Kate foi adotada com uns 4 meses de vida</li>
                <li>Seu nome é homenagem a Kate da série LOST</li>
                <li>Era muito apegada ao seu irmã Gau</li>
                <li>É carinhosa e gordinha</li>

              </ul>
            </div>
          </div>
        </Col>

        <Col xs={6} md={3}>
          <h5 className="nome-fotos text-center text-light align-items-center mt-3">
            Joel
          </h5>
          <div className="imagem-wrapper">
            <Image src="/joel.jpeg" thumbnail className="fotos" />

            <div className="overlay text-light ps-0 pt-2 p-3">
              <ul>
                <li>Seu nome é em homenagem à um jogador gringo de CS</li>
                <li>Quando resgatado estava muito sujo e com  olho fechado</li>
                <li>Fugiu uma vez e não soube voltar, felizmente foi resgatado</li>
                <li>Seu nome quase foi biskela</li>
                <li>Era chamado de nariz de gotinha</li>
                <li>Faleceu em 2025 após fugir de casa</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ImagemGatos;
