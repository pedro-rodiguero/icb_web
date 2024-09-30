import React from "react";

import ImageCarousel from "../../components/ImageCarousel";
import "./IcbJvm.css";
import icbJvm from "../../images/ministries/icbjvm/icbJvm.svg";

const ICBJVM: React.FC = () => {
  const imageUrls = [
    "https://storage.cloud.google.com/icb-web-bucket-brasil/photo1.JPG",
    "https://storage.cloud.google.com/icb-web-bucket-brasil/photo2.JPG",
    // Add more image URLs here
  ];

  return (
    <div className="icb-jvm-container">
      <img src={icbJvm} alt="ICB JVM header" />
      <ImageCarousel imageUrls={imageUrls} height="100vh" />{" "}
      {/* Set the desired height */}
      <img src={icbJvm} alt="ICB JVM footer" className="footer-image" />
    </div>
  );
};

export default ICBJVM;
