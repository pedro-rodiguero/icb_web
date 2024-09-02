import React from "react";
import { Link } from "react-router-dom";

import ImageCarousel from "../components/ImageCarousel";
import YtHome from "../images/yt_home.svg";
import "../styles/Home.css";

const Home: React.FC = () => {
  const imageUrls = [
    "https://storage.cloud.google.com/icb-web-bucket/photo1.JPG",
    "https://storage.cloud.google.com/icb-web-bucket/photo2.JPG",
  ];
  return (
    <div>
      <ImageCarousel imageUrls={imageUrls} />
      <Link
        to="https://www.youtube.com/c/IgrejadeCristoemBras%C3%ADlia/featured"
        className="yt_home"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={YtHome} alt="Youtube" />
      </Link>
    </div>
  );
};

export default Home;
