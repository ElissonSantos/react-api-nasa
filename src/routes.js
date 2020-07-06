import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Marte from "./pages/marte";
import Asteroides from "./pages/asteroides";
import DetailsAsteroide from "./pages/asteroides-details";
import Projetos from "./pages/projects";
import Header from "./components/header";
import NotFound from "./pages/not-found";
import Footer from "./components/footer";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/asteroides" component={Asteroides} />
      <Route exact path="/asteroides/:id" component={DetailsAsteroide} />
      <Route exact path="/marte" component={Marte} />
      <Route exact path="/projetos" component={Projetos} />
      <Route path="*" component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
