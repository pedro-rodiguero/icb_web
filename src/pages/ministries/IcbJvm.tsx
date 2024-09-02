import React from "react";

import ImageCarousel from "../../components/ImageCarousel";
import "./IcbJvm.css";

const ICBJVM: React.FC = () => {
  const imageUrls = [
    "https://storage.cloud.google.com/icb-web-bucket/photo1.JPG",
    "https://storage.cloud.google.com/icb-web-bucket/photo2.JPG",
    // Add more image URLs here
  ];

  return (
    <div className="icb-jvm-container">
      <h2>ICB JVM</h2>
      <ImageCarousel imageUrls={imageUrls} />
      <p>Conteúdo sobre ICB JVM...</p>
    </div>
  );
};

export default ICBJVM;
