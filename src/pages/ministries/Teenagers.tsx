import React from 'react';
import ImageCarousel from '../../components/ImageCarousel';

const Teenagers: React.FC = () => {
  const imageUrls = [
    'https://storage.cloud.google.com/icb-web-bucket/photo3.JPG'
  ]
  return (
    <div>
      <h2>Adolas</h2>
      <p>Conteúdo sobre Adolas...</p>
      <ImageCarousel imageUrls={imageUrls} />
    </div>
  );
};

export default Teenagers;