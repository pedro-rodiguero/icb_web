import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

const Icb: React.FC = () => {
  const imageUrls = [
    'https://storage.cloud.google.com/'
  ]
  return (
    <div>
      <section id="quem-somos">
        <h2>Quem Somos</h2>
        <p>
          Como a ICB começou? David Sanders recebeu sua chamada missionária em
          sonho, ainda como seminarista no Johnson Bible College, no Tennessee,
          de que seria missionário numa cidade chamada Brasília, na qual nunca
          ouvira falar e muito menos constava em mapa algum. Em 1945 casa-se
          com Ruth Edna. Em 1948, convicto da permissão de Deus, o casal chega
          ao Brasil.
          Depois de um tempo no Rio de Janeiro, segue para o Centro-Oeste
          brasileiro, mais precisamente Goiânia, onde David Sanders esperou
          pacientemente o nascimento da cidade de seu sonho, Brasília.
          O casal Sanders chegou ao Distrito Federal em 1956 e em 1957 dá
          entrada no protocolo de pedido de uma área no Plano Piloto. Na
          inauguração de Brasília, em 21 de abril de 1960, foi realizado um
          culto na área onde hoje está localizada a Igreja de Cristo em
          Brasília, ao lado de uma pequena capela de madeira, onde já aconteciam
          os cultos. Um ano depois, em 1961, foi inaugurado o templo da Igreja
          de Cristo em Brasília.
        </p>
        <ImageCarousel imageUrls={imageUrls} />
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