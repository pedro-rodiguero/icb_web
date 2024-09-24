/* eslint-disable react/no-array-index-key */
import React from "react";

import "../styles/Icb.css";
import overall from "../images/home/overall.svg";
import picture1 from "../images/home/picture1.svg";
import picture2 from "../images/home/picture2.svg";
import picture3 from "../images/home/picture3.svg";
import picture4 from "../images/home/picture4.svg";
import picture5 from "../images/home/picture5.svg";
import picture6 from "../images/home/picture6.svg";
import picture7 from "../images/home/picture7.svg";
import picture8 from "../images/home/picture8.svg";
import inspiracoes from "../images/home/inspiracoes.svg";
import lema from "../images/home/lema.svg";
import year1960 from "../images/home/year1960.svg";

const Icb: React.FC = () => {
  return (
    <div>
      <section id="icb-pictures">
        <div className="photo-collage">
          <img
            src={picture1}
            alt="Photo1"
            className="photo-container image-1"
          />
          <img src={year1960} alt="Lema" className="photo-container year1960" />

          <img
            src={picture2}
            alt="Photo2"
            className="photo-container image-2"
          />
          <img
            src={picture3}
            alt="Photo3"
            className="photo-container image-3"
          />
          <img
            src={inspiracoes}
            alt="Inspirações"
            className="photo-container inspirations"
          />
          <img
            src={picture4}
            alt="Photo4"
            className="photo-container image-4"
          />
          <img
            src={picture5}
            alt="Photo5"
            className="photo-container image-5"
          />
          <img
            src={picture6}
            alt="Photo6"
            className="photo-container image-6"
          />
          <img src={lema} alt="Lema" className="photo-container lema" />
          <img
            src={picture7}
            alt="Photo7"
            className="photo-container image-7"
          />
          <img
            src={picture8}
            alt="Photo8"
            className="photo-container image-8"
          />
        </div>
      </section>
      <section id="quem-somos">
        <h2>Quem Somos</h2>
        <p>
          Como a ICB começou? David Sanders recebeu sua chamada missionária em
          sonho, ainda como seminarista no Johnson Bible College, no Tennessee,
          de que seria missionário numa cidade chamada Brasília, na qual nunca
          ouvira falar e muito menos constava em mapa algum. Em 1945 casa-se com
          Ruth Edna. Em 1948, convicto da permissão de Deus, o casal chega ao
          Brasil. Depois de um tempo no Rio de Janeiro, segue para o
          Centro-Oeste brasileiro, mais precisamente Goiânia, onde David Sanders
          esperou pacientemente o nascimento da cidade de seu sonho, Brasília. O
          casal Sanders chegou ao Distrito Federal em 1956 e em 1957 dá entrada
          no protocolo de pedido de uma área no Plano Piloto. Na inauguração de
          Brasília, em 21 de abril de 1960, foi realizado um culto na área onde
          hoje está localizada a Igreja de Cristo em Brasília, ao lado de uma
          pequena capela de madeira, onde já aconteciam os cultos. Um ano
          depois, em 1961, foi inaugurado o templo da Igreja de Cristo em
          Brasília.
        </p>
      </section>
      <section id="visao-missao-valores">
        <h2>Visão, Missão e Valores</h2>
        <p>Conteúdo sobre visão, missão e valores...</p>
      </section>
      <section id="o-que-cremos">
        <h2>O Que Cremos</h2>
        <p>Conteúdo sobre o que cremos...</p>
      </section>
    </div>
  );
};

export default Icb;
