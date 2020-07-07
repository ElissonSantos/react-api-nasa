import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import Home from "./pages/home";
import EditPost from "./pages/edit-post";
import Mars from "./pages/mars";
import Asteroids from "./pages/asteroids";
import AsteroidsDetails from "./pages/asteroids-details";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/projects-details";
import Header from "./components/header";
import NotFound from "./pages/not-found";
import Footer from "./components/footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/editpost" component={EditPost} />
        <Route exact path="/asteroides" component={Asteroids} />
        <Route exact path="/asteroides/:id" component={AsteroidsDetails} />
        <Route exact path="/marte" component={Mars} />
        <Route exact path="/projetos" component={Projects} />
        <Route exact path="/projetos/:id" component={ProjectDetails} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
