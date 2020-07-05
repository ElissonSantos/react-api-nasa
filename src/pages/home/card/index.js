import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./styles.css";
import background from "../../../assets/background.jpg";

function Card(props) {
  const [img, setImg] = useState();
  const [today, setToday] = useState();

  useEffect(() => {
    const today = new Date(props.img.date);
    setToday(String(today));
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    axios
      .get(
        `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${props.img.image}.png`,
        { params: { api_key: "3c0aDGuxR3r5xcVYQVZFnW4zKG9oETvx9ogQ1YR7" } }
      )
      .then((data) => {
        const as = data.config.url;
        setImg(as.text);
      });
  }, []);

  return (
    <div className="card">
      <p className="title">{today}</p>
      <img className="img" src={background} alt="Oi" />
    </div>
  );
}

export default Card;
