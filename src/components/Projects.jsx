import React from "react";
import foto from "../assets/robotica.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="sobre-container-teste">
        <div className="sobre-texto">
          <p><strong>- Simulação Robôtica</strong>: Projeto de extensão desenvolvido no IFRO, o qual me proporcionou estudos básicos na linguagem de programação Python, contatos com a multiplataforma Blender, microcomputadores (Raspberry Pi 3) e com servo motores, amplificando meus conhecimentos em robótica e obtendo a experiência de trabalho em grupo.</p>
        </div>
        <div className="sobre-imagem">
            <img src={foto} alt="Minha Foto" />
         </div>
        </div>
    </section>
  );
};

export default Projects;
