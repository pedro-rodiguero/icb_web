import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo2 from "../images/logo2.svg";
import MainLogo from "../images/main_logo.svg";
import "../styles/Header.css";

const Header: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const delay = 500;

    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string,
  ) => {
    event.preventDefault();
    navigate(`/ministries?target=${targetId}`);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo2">
          <img src={logo2} alt="Church Logo" />
        </Link>
        <Link to="/" className="main_logo">
          <img src={MainLogo} alt="Church Logo" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/ICB">ICB</Link>
        <div className="dropdown">
          <Link to="/ministries" className="dropbtn">
            Ministérios
          </Link>
          <div className="dropdown-content">
            {imagesLoaded && (
              <>
                <a
                  href="#icb-jvm"
                  onClick={(e) => handleLinkClick(e, "icb-jvm")}
                >
                  ICB JVM
                </a>
                <a href="#adolas" onClick={(e) => handleLinkClick(e, "adolas")}>
                  Adolas
                </a>
                <a href="#casais" onClick={(e) => handleLinkClick(e, "casais")}>
                  Casais
                </a>
                <a
                  href="#criancas"
                  onClick={(e) => handleLinkClick(e, "criancas")}
                >
                  Crianças
                </a>
              </>
            )}
          </div>
        </div>
        <Link to="/messages">Mensagens</Link>
        <Link to="/contribute">Contribua</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/store">Loja</Link>
      </nav>
    </header>
  );
};

export default Header;
