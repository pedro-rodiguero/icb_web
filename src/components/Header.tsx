import React from "react";
import { Link } from "react-router-dom";

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
        <div className="dropdown-content">
          <Link to="/icb#quem-somos">Quem Somos</Link>
          <Link to="/icb#visao-missao-valores">Visão, Missão e Valores</Link>
          <Link to="/icb#o-que-cremos">O Que Cremos</Link>
        </div>
        <Link to="/ministries">Ministérios</Link>
        <div className="dropdown-content">
          <Link to="/ministries#icb-jvm">ICB JVM</Link>
          <Link to="/ministries#adolas">Adolas</Link>
          <Link to="/ministries#casais">Casais</Link>
          <Link to="/ministries#criancas">Crianças</Link>
        </div>
        <Link to="/messages">Mensagens</Link>
        <Link to="/contribute">Contribua</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
