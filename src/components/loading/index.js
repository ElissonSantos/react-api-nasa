import React from "react";

import "./styles.css";

function Loading() {
  return (
    <div className="center">
      <div className="spinner" />
      <h2 className="carregando">Carregando</h2>
    </div>
  );
}

export default Loading;
