import React from "react";

import Header from "../../components/header";
import "./styles.css";

function Marte() {
  return (
    <div>
      <Header />
      <iframe
        title="Marte"
        src="https://mars.nasa.gov/layout/embed/image/insightweather/"
        width="800"
        height="530"
        scrolling="no"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Marte;
