import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https://www.facebook.com/icbrasilia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/icb.oficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/c/IgrejadeCristoemBrasília/streams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} />
          </a>
        </div>
        <p>
          &copy; 2023 Igreja de Cristo em Brasília. Todos os direitos
          reservados.
        </p>
        <p>
          Siga-nos nas redes sociais:
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          |
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          |
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
