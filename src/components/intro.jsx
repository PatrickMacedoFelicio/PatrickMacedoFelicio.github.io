import React from "react";
import eu from "../assets/eu.png";

const Intro = () => {
  return (
    <div className="um">
        <div className="sobre-container">
        <div className="sobre-texto">
        <h1 className="azul">Patrick Macêdo Felicio</h1>
        <p>
          Um desenvolvedor web apaixonado por tecnologia, especializado em 
          React, JavaScript, MySql e outras tecnologias
        </p>
        </div>
        <div className="sobre-imagem">
            <img src={eu} alt="Minha Foto" />
         </div>
        </div>
    </div>
  );
};

export default Intro;
