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
      <div id="carousel">
        {" "}
        <ImageCarousel imageUrls={imageUrls} />
      </div>
      <div id="livestream">
        <Link
          to="https://www.youtube.com/c/IgrejadeCristoemBras%C3%ADlia/featured"
          className="yt_home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={YtHome} alt="Youtube" />
        </Link>
      </div>
      <div id="messages">
        <div>
          <a href="https://www.youtube.com/watch?v=L9lrrj0S9c4">
            <img
              src="https://i.ytimg.com/vi/L9lrrj0S9c4/maxresdefault.jpg"
              alt="Culto"
            />
          </a>
        </div>
        <div>
          <div>
            <a href="https://www.youtube.com/watch?v=6g3QlcS5Bbo">
              <img
                src="https://i.ytimg.com/vi/6g3QlcS5Bbo/maxresdefault.jpg"
                alt="Culto"
              />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/watch?v=hEKgWNWL4_o">
              <img
                src="https://i.ytimg.com/vi/hEKgWNWL4_o/maxresdefault.jpg"
                alt="Culto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
