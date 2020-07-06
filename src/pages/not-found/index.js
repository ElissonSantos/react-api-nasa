import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function NotFound() {
  return (
    <div className="size">
      <div className="error">
        <FontAwesomeIcon icon={faExclamationTriangle} className="error-icon" />
        <h1 className="error-msg">Desculpe, está pagina não existe</h1>
      </div>
    </div>
  );
}

export default NotFound;
