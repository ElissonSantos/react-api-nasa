import React, { useState, useEffect } from "react";

import "./styles.css";

import { loadInit } from "./services/api-posts";
import Routes from "./routes";
import apiGet from "./services/api";

function App() {
  const [img, setImg] = useState("");
  const [copyright, setCopyright] = useState("");
  const [title, setTitle] = useState("");

  const background = { backgroundImage: `url(${img})` };

  useEffect(() => {
    const today = new Date();
    let day = today.getDate() === 1 ? today.getDate() : today.getDate() - 1;
    day = String(day).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    apiGet("planetary/apod", { date: `${year}-${month}-${day}` }).then(
      (data) => {
        const { hdurl, copyright, title } = data.data;
        setImg(hdurl);
        setCopyright(`Autor: ${copyright}`);
        setTitle(title);
      }
    );
  }, []);

  loadInit();

  return (
    <div style={background} className="App">
      <small>
        {title}
        <br />
        {copyright}
      </small>

      <div className="sobApp">
        <Routes />
      </div>
    </div>
  );
}

export default App;
