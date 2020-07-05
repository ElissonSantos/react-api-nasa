import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Marte from "./pages/marte";
import Asteroides from "./pages/asteroides";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/asteroides" component={Asteroides} />
      <Route path="/marte" component={Marte} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
