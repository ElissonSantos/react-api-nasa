import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Edit from "./pages/edit";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/edit/:id" component={Edit} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
