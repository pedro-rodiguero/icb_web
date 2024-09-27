import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logo2 from "../images/logo2.svg";
import MainLogo from "../images/main_logo.svg";
import "../styles/Header.css";

const Header: React.FC = () => {
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
            <HashLink smooth to="/ministries#icb-jvm">
              ICB JVM
            </HashLink>
            <HashLink smooth to="/ministries#adolas">
              Adolas
            </HashLink>
            <HashLink smooth to="/ministries#casais">
              Casais
            </HashLink>
            <HashLink smooth to="/ministries#criancas">
              Crianças
            </HashLink>
          </div>
        </div>
        <Link to="/messages">Mensagens</Link>
        <Link to="/contribute">Contribua</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
