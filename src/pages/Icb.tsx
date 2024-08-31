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
        <p>Conteúdo sobre quem somos...</p>
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