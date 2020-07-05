import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="NASA" className="logo" />

      <Link className="link" to={`/`}>
        <h3>Inicio</h3>
      </Link>

      <Link className="link" to={`/asteroides`}>
        <h3>Asteroides</h3>
      </Link>

      <Link className="link" to={`/marte`}>
        <h3>Marte</h3>
      </Link>

      <Link className="link" to={`/projetos`}>
        <h3>Projetos</h3>
      </Link>
    </div>
  );
}

export default Header;
