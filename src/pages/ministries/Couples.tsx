import React from 'react';
import ImageCarousel from '../../components/ImageCarousel';

const Couples: React.FC = () => {
  const imageUrls = [
    'https://storage.cloud.google.com/'
  ]
  return (
    <div>
      <h2>Casais</h2>
      <p>Conteúdo sobre Casais...</p>
      <ImageCarousel imageUrls={imageUrls} />
    </div>
  );
};

export default Couples;