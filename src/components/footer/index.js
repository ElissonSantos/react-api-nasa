import React from "react";

import "./styles.css";

function Header() {
  return (
    <div className="footer">
      <div className="center">
        <div className="nasa">
          <p className="primary">Open Innovation Team</p>
          <a href="https://www.nasa.gov/about/highlights/HP_Privacy.html">
            Privacy
          </a>
          <a href="https://www.nasa.gov/FOIA/index.html">FOIA</a>
          <a href="benjamin.reist@nasa.gov">NASA Official: Benjamin Reist</a>
        </div>
        <div className="personal">
          <p className="primary">Elisson Santos</p>
          <a href="https://github.com/ElissonSantos">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
