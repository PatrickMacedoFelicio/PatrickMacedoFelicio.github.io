import React from "react";
import eu from "../assets/eu-again.png";

const About = () => {
  return (
    <section id="about">
      <h2>Sobre Mim</h2>
      <div className="sobre-container-teste">
        <div className="sobre-texto">
        <p>
        Olá, meu nome é Patrick Macêdo Felício. Sou Técnico em Informática e atualmente estou cursando Análise e Desenvolvimento de Sistemas. Natural de Ji-Paraná, no estado de Rondônia, tenho experiência na área de Tecnologia da Informação e, atualmente, atuo como Analista de Suporte de Banco de Dados na cooperativa CrediSIS Central.
        </p>
        </div>
        <div className="sobre-imagem">
            <img src={eu} alt="Minha Foto" />
         </div>
        </div>
    </section>
  );
};

export default About;
