import React from "react";

import ImageCarousel from "../../components/ImageCarousel";

const Children: React.FC = () => {
  const imageUrls = ["https://storage.cloud.google.com/"];
  return (
    <div>
      <h2>Crianças</h2>
      <p>Conteúdo sobre Crianças...</p>
      <ImageCarousel imageUrls={imageUrls} />
    </div>
  );
};

export default Children;
