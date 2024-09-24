/* eslint-disable react/no-array-index-key */
import React from "react";

import "../styles/Icb.css";
import overall from "../images/home/overall.svg";

const imageUrls = [
  "../images/home/photo1.svg",
  "../images/home/photo2.svg",
  "../images/home/photo3.svg",
  "../images/home/photo4.svg",
  "../images/home/photo5.svg",
  "../images/home/photo6.svg",
  "../images/home/photo7.svg",
  "../images/home/photo8.svg",
];

const imageAlts = [
  "Event at ICB",
  "Community gathering",
  "Worship session",
  "Youth group activity",
  "Volunteer work",
];

const Icb: React.FC = () => {
  return (
    <div>
      <section id="icb-pictures">
        <div className="svg-container">
          <img src={overall} alt="ICB" />
        </div>
        <div className="photo-collage">
          {imageUrls.map((url, index) => (
            <div key={index} className="photo-container">
              <img src={url} alt={imageAlts[index]} className="photo" />
            </div>
          ))}
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
