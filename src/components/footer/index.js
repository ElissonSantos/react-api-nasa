/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="center">
        <div className="nasa">
          <p className="primary">NASA</p>
          <p className="primary">Open Innovation Team</p>
          <a href="https://twitter.com/opennasa?lang=en" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="faGithubSquare" />
          </a>
          <a href="https://github.com/nasa" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="faGithubSquare" />
          </a>
        </div>
        <div className="personal">
          <p className="primary">Elisson Santos</p>
          <a href="https://github.com/ElissonSantos" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="faGithubSquare" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
