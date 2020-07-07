/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "antd";

import "./styles.css";

function Footer() {
  return (
    <Row className="footer">
      <Col className="nasa" xs={12} md={10} lg={8}>
        <p className="primary">NASA - Open Innovation Team</p>
        <a href="https://twitter.com/opennasa?lang=en" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="faIcons" />
        </a>
        <a href="https://github.com/nasa" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="faIcons" />
        </a>
      </Col>
      <Col className="personal" xs={12} md={10} lg={8}>
        <p className="primary">Elisson Santos</p>
        <a href="https://github.com/ElissonSantos" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="faIcons" />
        </a>
      </Col>
    </Row>
  );
}

export default Footer;
