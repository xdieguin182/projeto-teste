import React from "react";


function Hero() {

const usuario = localStorage.getItem("usuario");

  return (

    <div
      className="hero d-flex align-items-center justify-content-center text-white"
      style={{
        height: "50vh",
        backgroundImage: "url('/banner-blogatos.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h4 className="mt-5">Bem vindo, {usuario}</h4>
    </div>
  );
}

export default Hero;
