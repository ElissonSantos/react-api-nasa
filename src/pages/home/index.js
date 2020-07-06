import React, { useEffect, useState } from "react";

import "./styles.css";
import get from "../../services/api";

import Card from "./card";

function Home() {
  const [imgs, setimgs] = useState([]);

  useEffect(() => {
    get("EPIC/api/natural/images").then(async (data) => {
      setimgs(data.data);
    });
  }, []);

  return (
    <div className="home">
      {imgs.map((img) => {
        return <Card img={img} />;
      })}
    </div>
  );
}

export default Home;
