import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Church Logo" />
      </Link>
      <nav className="nav">
        <div className="dropdown">
          <button className="dropbtn">ICB</button>
          <div className="dropdown-content">
            <Link to="/icb#quem-somos">Quem Somos</Link>
            <Link to="/icb#visao-missao-valores">Visão, Missão e Valores</Link>
            <Link to="/icb#o-que-cremos">O Que Cremos</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Ministérios</button>
          <div className="dropdown-content">
            <Link to="/ministerios#icb-jvm">ICB JVM</Link>
            <Link to="/ministerios#adolas">Adolas</Link>
            <Link to="/ministerios#casais">Casais</Link>
            <Link to="/ministerios#criancas">Crianças</Link>
          </div>
        </div>
        <Link to="/mensagens">Mensagens</Link>
        <Link to="/contribua">Contribua</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;