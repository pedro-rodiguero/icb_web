import React from "react";

import ImageCarousel from "../../components/ImageCarousel";
import "./Teenagers.css";

const Teenagers: React.FC = () => {
  const bucketLink = "https://storage.cloud.google.com/icb-web-bucket-brasil";
  const imageUrls = [
    `${bucketLink}/adolescentes/adolescentes1.jpg`,
    `${bucketLink}/adolescentes/adolescentes2.jpg`,
    `${bucketLink}/adolescentes/adolescentes3.jpg`,
  ];
  return (
    <div className="teenagers-container">
      <h2>Adolas</h2>
      <ImageCarousel imageUrls={imageUrls} />
      <p>Conteúdo sobre Adolas...</p>
    </div>
  );
};

export default Teenagers;
