import React, { useEffect, useState } from "react";

import "./styles.css";
import get from "../../services/api";

import Header from "../../components/header";
import Footer from "../../components/footer";
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
      <Header />
      {imgs.map((img) => {
        return <Card img={img} />;
      })}
      <Footer />
    </div>
  );
}

export default Home;
