import React from "react";

import "./styles.css";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="NASA" className="logo" />
      <h3>Home</h3>
      <h3>Rockets</h3>
      <h3>APOD</h3>
    </div>
  );
}

export default Header;
