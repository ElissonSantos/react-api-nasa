import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Marte from "./pages/marte";
import Asteroides from "./pages/asteroides";
import Projetos from "./pages/projects";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/asteroides" component={Asteroides} />
      <Route path="/marte" component={Marte} />
      <Route path="/projetos" component={Projetos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
