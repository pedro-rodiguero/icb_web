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
          <Link to="/ICB" className="dropbtn">ICB</Link>
          <div className="dropdown-content">
            <Link to="/icb#quem-somos">Quem Somos</Link>
            <Link to="/icb#visao-missao-valores">Visão, Missão e Valores</Link>
            <Link to="/icb#o-que-cremos">O Que Cremos</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/ministries" className="dropbtn">Ministérios</Link>
          <div className="dropdown-content">
            <Link to="/ministries#icb-jvm">ICB JVM</Link>
            <Link to="/ministries#adolas">Adolas</Link>
            <Link to="/ministries#casais">Casais</Link>
            <Link to="/ministries#criancas">Crianças</Link>
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