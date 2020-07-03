import React from "react";

import "./styles.css";

import Header from "./components/header";
import Routes from "./routes";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
