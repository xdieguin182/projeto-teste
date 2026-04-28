import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ImagemGatos from "../components/Image";
import Aviso from "../components/Accordion";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import { Spinner } from "react-bootstrap";

function Home() {
  const [catUrl, setCatUrl] = useState(null);
  const [catInfo, setCatInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [carregando, setCarregando] = useState(false);

  async function buscarGato() {
    setLoading(true);
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: {
          "x-api-key":
            "live_QYXCnliyqD07Eg4WA5RqmcTYqIi5ftRQzc5QL3v24tr26C2SN1dZYJSyzic97EqU",
        },
      });
      setLoading(false);

      const data = await res.json();
      console.log(data);

      if (data && data.length > 0) {
        setCatUrl(data[0].url);
      }
    } catch (erro) {
      console.error(erro);
    }
  }

  async function buscarInfo() {
    setCarregando(true);
    try {
      const res = await fetch(
        "https://api.api-ninjas.com/v1/cats?name=abyssinian",
        {
          headers: {
            "x-api-key": "vL1F16ibt2Y8CM36uHOxw1hNtPqpS3r5DHk0NQoP",
          },
        },
      );
      setCarregando(false);

      const data = await res.json();
      console.log(data);

      if (data && data.length > 0) {
        setCatInfo(data[0]);
      }
    } catch (erro) {
      console.error(erro);
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Hero />
      <Aviso />
      <ImagemGatos />

      <div className="container">
        <div className="container-api d-flex border border-3 justify-content-center gap-4 flex-wrap mb-5 bg-light text-dark">
          <div className="d-flex flex-column align-items-center mt-2">
            <h3 className="text-light bg-primary border-border- rounded p-2 mb-3">
              CLIQUE NO BOTÃO PARA BUSCAR UMA FOTO ALEATÓRIA DE UM GATINHO
            </h3>
            {catUrl && (
              <img
                src={catUrl}
                alt="Gato"
                width={700}
                height={400}
                className="foto-api mb-5 border border-3 "
              />
            )}

            <Button
              onClick={buscarGato}
              disabled={loading}
              className="mb-3 mt-4 "
              size="lg"
            >
              {loading ? (
                <Spinner animation="border" size="md" />
              ) : (
                "Buscar gato"
              )}
            </Button>
          </div>
        </div>

        <div className="container-api d-flex border border-3 justify-content-center gap-4 flex-wrap mb-5 bg-light text-dark fs-5">
          <div className="d-flex flex-column align-items-center mt-2">
            <h3 className="text-light bg-primary border-border rounded p-2">
              CLIQUE NO BOTÃO PARA BUSCAR INFORMAÇÕES DE UM GATO ESPECÍFICO
            </h3>
            {catInfo && (
              <div>
                <img
                  src={catInfo.image_link}
                  width={500}
                  height={250}
                  className="foto-api mb-3 border border-3"
                />

                <ul>
                  <li>
                    <strong>Raça/Nome:</strong> {catInfo.name} (Abissínio)
                  </li>
                  <li>
                    <strong>Porte:</strong> {catInfo.length} (30 a 50cm)
                  </li>
                  <li>
                    <strong> Origem:</strong> {catInfo.origin} (Etiopia)
                  </li>
                  <li>
                    <strong>Peso máximo:</strong> {catInfo.max_weight}Kg
                  </li>
                  <li>
                    <strong>Peso mínimo:</strong> {catInfo.min_weight}Kg
                  </li>
                  <li>
                    <strong>Expectativa de vida mínima:</strong>{" "}
                    {catInfo.min_life_expectancy} anos
                  </li>
                  <li>
                    <strong>Expectativa de vida máxima:</strong>{" "}
                    {catInfo.max_life_expectancy} anos
                  </li>
                </ul>
              </div>
            )}

            <div className="container mt-5 d-flex justify-content-center gap-3 mb-3">
              <Button
                onClick={buscarInfo}
                disabled={carregando}
                className="mb-3"
                size="lg"
              >
                {carregando ? (
                  <Spinner animation="border" size="md" />
                ) : (
                  "Buscar Informação"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
