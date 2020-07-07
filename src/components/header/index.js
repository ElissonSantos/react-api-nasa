import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

import "./styles.css";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <Row justify="center">
      <div className="header">
        <Col className="header" xs={7} md={7} lg={7}>
          <img src={Logo} alt="NASA" className="logo" />
        </Col>

        <Col className="header" xs={15} md={18} lg={18}>
          <Link className="link" to={`/`}>
            <h3 className="menu-option">Inicio</h3>
          </Link>

          <Link className="link" to={`/asteroides`}>
            <h3 className="menu-option">Asteroides</h3>
          </Link>

          <Link className="link" to={`/marte`}>
            <h3 className="menu-option">Marte</h3>
          </Link>

          <Link className="link" to={`/projetos`}>
            <h3 className="menu-option">Projetos</h3>
          </Link>
        </Col>
      </div>
    </Row>
  );
}

export default Header;
